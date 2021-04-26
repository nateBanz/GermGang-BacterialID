import React, {useEffect} from 'react'
import {useState} from 'react'
import firebase from "firebase";
//helps get the form information
const FormHelper = ({ theHandler, placeholder, form,}) => {

    //states for text input and array of inputs
    const [input, inputChange] = useState("");
    const [inputArray, arrayChanges] = useState([])

    //deletes an array element
    function deleteArrayElement(nameer) {

        //find the index of the name you need to remove and remove it

        let index = inputArray.indexOf(nameer)
        let copyArray = inputArray.slice()
        copyArray.splice(index, 1)
        arrayChanges(copyArray)

        //sets the field value with the new array

        form.setFieldValue(`nodeGerms.${index}.buttonList`, copyArray)


    }

    return (
        <div className= "form-group">

            <div className="input-group mb-3">
                <input placeholder={placeholder} type =  "text" value = {input} onChange={ e=> (inputChange(e.target.value))} className= "form-control" />
                <div className="input-group-append">
                    <button type = "button" className= "btnLight" disabled = {input === undefined || input == null || input === ""} onClick={() => {arrayChanges(inputArray =>([...inputArray, input ]));theHandler(input)}}> Add Button Name </button>
                </div>
            </div>

            <div className= "row">

                <div className= "col">
                    <ul className= "list-group">
                        <div className= "row">

                            {
                                inputArray.map((buttonsName, index) => (
                                        <div className = "col ">
                                            <li key = {index} className= "list-group-item d-flex align-items-center" style={{width: "100px"}}>

                                                <span>{buttonsName}</span>
                                                <button className="badge " type = "button"
                                                        onClick={() => {deleteArrayElement(buttonsName)}}> - </button>

                                            </li>

                                        </div>
                                    )
                                )
                            }
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    )
}

const DropdownHelper = ({form, index})=> {

    //states of current input, buttons and the preview for the page

    const [input, inputChange] = useState(null);
    const [groupOfNodes, updateNodes] = useState([])
    const [preview, updatePreview] = useState({buttonList: ["The preview will show up here"], name: '', image: ''})

    //This gets the database reference and finds the list of objects. Then, it updates the state containing the list when it fires
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

        }

        else {
            console.log("No data available");
        }

        //error block
    }


    useEffect(() => {
        fetcher()
    }, [])

    //this is for the selection of the dropdown. If the selection, sent to this function, matches with the array of object
    //get the object and return it

    const ShowPreviewHandler = (name, nodeArrays)=> {

        for(let node in nodeArrays) {

            if(nodeArrays[node].name === name) {

                updatePreview(nodeArrays[node])
                break;
            }
        }

    }

    useEffect(() => {
        console.log(preview)
    }, [preview])


//part of the form that includes the dropdown

    return (
        <div className= "row">
            <div className= "col">
                <div className= "form-group">
                    <label htmlFor={`nodeGerms.${index}.buttonList`} className= "col-form-label invisible">Where do you want the button to go?</label>

                    <div className= "row align-items-center">

                        <div className= "col">

                            <div>

                                <input type =  "text"  onChange={ e=> {(inputChange(e.target.value)); form.setFieldValue('location', input); ShowPreviewHandler(input, groupOfNodes);  }} list = "dropdown" onKeyUp={e=>{(form.setFieldValue("location", input)); ShowPreviewHandler(input, groupOfNodes);}} className= "form-control" placeholder='Button placement?' />
                                <datalist id = "dropdown" >  <select>
                                    {groupOfNodes.map((node, index) => (
                                        <option key = {index} value={JSON.stringify(node).name} > {(node).name}</option>
                                    ))}
                                </select></datalist>


                            </div>

                        </div>


                        <div className= "col">
                            <div className= "row">
                                <div className= "col justify-content-center pt-4 pl-4">
                                    <span>{preview.buttonList!== undefined? preview.buttonList.join(): "loading"}</span>
                                    <label htmlFor={`nodeGerms.${index}.buttonList`} className= "col-sm-12 col-form-label invisible .d-none">Buttons from selection</label>



                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

//same code as the dropdown ~ the difference here is that the preview handler returns a list of checkboxes to delete

const DropdownHelperForDelete = ({form, arrayUpdater })=> {

    //states for the input, grouping of objects, and the preview

    const [input, inputChange] = useState(null);
    const [groupOfNodes, updateNodes] = useState([])
    const [preview, updatePreview] = useState({buttonList: [""], name: '', image: ''})

    //This gets the database reference and finds the list of objects. Then, it updates the state containing the list when it fires
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

                //if the list of buttons exists, update the array state

                let arrayPiece = (nodeArrays[node]).buttonList
                arrayPiece !== undefined || false ? arrayUpdater([...arrayPiece])  : alert("No attached buttons here")
                break;
            }
        }


    }


    useEffect(() => {
        console.log(preview)
    }, [preview])



    return (
        <div className= "row">
            <div className= "col">
                <div className= "form-group">
                    <label htmlFor={"deletelabel"} className= "col-form-label invisible">Where do you want to Delete?</label>

                    <div className= "row align-items-center">

                        <div className= "col sm-12">

                            <div >

                                <input type =  "text"  onChange={ e=> {(inputChange(e.target.value)); form.setFieldValue('location', input); ShowPreviewHandler(input, groupOfNodes);  }} list = "dropdown" onKeyUp={e=>{(form.setFieldValue("location", input)); ShowPreviewHandler(input, groupOfNodes);}} className= "form-control" placeholder='Button placement?' />
                                <datalist id = "dropdown" >  <select>
                                    {groupOfNodes.map((node, index) => (
                                        <option key = {index} value={JSON.stringify(node).name} > {(node).name}</option>
                                    ))}
                                </select></datalist>


                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}


export {FormHelper, DropdownHelper, DropdownHelperForDelete}
