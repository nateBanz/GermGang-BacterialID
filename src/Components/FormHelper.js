import React, {useEffect} from 'react'
import {useState} from 'react'
import firebase from "firebase";

const FormHelper = ({ theHandler, placeholder, form,}) => {


    const [input, inputChange] = useState("");
    const [inputArray, arrayChanges] = useState([])

    function deleteArrayElement(nameer) {

       let index = inputArray.indexOf(nameer)

        let copyArray = inputArray.slice()

        copyArray.splice(index, 1)

        console.log(copyArray)


        arrayChanges(copyArray)


        form.setFieldValue(`nodeGerms.${index}.buttonList`, copyArray)


    }

    return (
        <div>
            <div>
                <input placeholder={placeholder} type =  "text" value = {input} onChange={ e=> (inputChange(e.target.value))} />
                <button type = "button" disabled = {input === undefined || input == null || input === ""} onClick={() => {arrayChanges(inputArray =>([...inputArray, input ]));theHandler(input)}}> Add Button Name </button>
            </div>

            <ul>

                {
                     inputArray.map((buttonsName, index) => (

                        <li key = {index}>
                            <div>
                                <span>{buttonsName}</span>
                            <button type = "button"
                                onClick={() => {deleteArrayElement(buttonsName)}}> - </button>
                            </div>
                       </li>



                        )
                    )
                }
            </ul>

        </div>
    )
}

const DropdownHelper = ({form, index})=> {

    const [input, inputChange] = useState(null);


    const [groupOfNodes, updateNodes] = useState([])

    const [preview, updatePreview] = useState({buttonList: ["The preview will show up here"], name: '', image: ''})

    //important! This gets the database reference and finds the list of objects. Then, it updates the state containing the list when it fires
   async function fetcher() {

        let temp = []

        //reference to firebase
        let panelbase = firebase.database().ref("germs");

        //gets the part that contains the key 'panels' then returns a snapshot
        let snapshot = await panelbase.orderByChild("name").once("value");


            if (snapshot.exists()) {


                //object of objects here
                let objectList = snapshot.val()


                //keys of each
                let keys = Object.keys(objectList)

                //transforms the object into a list of objects
                temp = keys.map(key => {

                    return objectList[key]
                })

                console.log(temp)

                //updates the list of objects with the new one


                await updateNodes([...groupOfNodes, ...temp])





            } else {
                console.log("No data available");
            }

            //error block
        }


    useEffect(() => {
         fetcher()
    }, [])

    const ShowPreviewHandler = (name, nodeArrays)=> {





                    for(let node in nodeArrays) {

                        if(nodeArrays[node].name === name) {
                            console.log(nodeArrays[node])
                            updatePreview(nodeArrays[node])
                            break;
                        }
                    }







    }


    useEffect(() => {
        console.log(preview)
    }, [preview])



    return (
        <div>
            <label htmlFor={`nodeGerms.${index}.buttonList`}>Flowchart Options</label>


            <div>
                <input type =  "text"  onChange={ e=> {(inputChange(e.target.value)); form.setFieldValue('location', input); ShowPreviewHandler(input, groupOfNodes);  }} list = "dropdown" onKeyUp={e=>{(form.setFieldValue("location", input)); ShowPreviewHandler(input, groupOfNodes);}}  />
                <datalist id = "dropdown" >  <select>
                    {groupOfNodes.map((node, index) => (
                        <option key = {index} value={JSON.stringify(node).name} > {(node).name}</option>
                    ))}
                </select></datalist>
                <button type = "button" onClick={()=>{( console.log(preview))}}> Check </button>
            </div>



            <div>
                {preview.buttonList!== undefined? preview.buttonList.join(): "loading"}
            </div>
        </div>

    )
}

export {FormHelper, DropdownHelper}
