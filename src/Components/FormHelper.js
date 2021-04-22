import React, {useEffect} from 'react'
import {useState} from 'react'
import firebase from "firebase";

const FormHelper = ({theArray, theUpdater, theHandler, placeholder, form}) => {


    const [input, inputChange] = useState("");
    const [inputArray, arrayChanges] = useState([])

    return (
        <div>
            <div>
                <input placeholder={placeholder} type =  "text" value = {input} onChange={ e=> (inputChange(e.target.value))} />
                <button type = "button" onClick={() => {arrayChanges(inputArray =>([...inputArray, input ]));theHandler(input)}}> Add Button Name </button>
            </div>

            <ul>

                {
                     inputArray.map((buttonsName, index) => (

                        <li key = {index}>
                            <div>
                                <span>{buttonsName}</span>
                            <button type = "button"
                                onClick={() => arrayChanges(inputArray.filter( deleted => deleted !== buttonsName)) }> - </button>
                            </div>
                       </li>



                        )
                    )
                }
            </ul>

        </div>
    )
}

const DropdownHelper = ({form})=> {



    const [groupOfNodes, updateNodes] = useState([])

    const [preview, updatePreview] = useState({buttonList: ["Loading"]})

    //important! This gets the database reference and finds the list of objects. Then, it updates the state containing the list when it fires
   async function fetcher() {

        let temp = []

        //reference to firebase
        let panelbase = firebase.database().ref("germs");

        //gets the part that contains the key 'panels' then returns a snapshot
        let snapshot = await panelbase.orderByChild("name").limitToFirst(30).once("value");


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

    return (
        <div>
            <select onChange={ (e) => {form.setFieldValue('location', JSON.parse(e.target.value).name); console.log(JSON.parse(e.target.value)); updatePreview(JSON.parse(e.target.value))}}>
                {groupOfNodes.map((node, index) => (
                    <option key = {index} value={JSON.stringify(node)}> {node.name}</option>
                ))}
            </select>

            <div>
                {preview.buttonList.join()}
            </div>
        </div>

    )
}

export {FormHelper, DropdownHelper}
