import React from 'react'
import {useState} from 'react'


const FormHelper = ({theArray, theUpdater, theHandler, placeholder}) => {


    const [input, inputChange] = useState("");
    const [inputArray, arrayChanges] = useState([])

    return (
        <div>
            <div>
                <input placeholder={placeholder} type =  "text" value = {input} onChange={ e=> (inputChange(e.target.value))} />
                <button type = "button" onClick={() => arrayChanges([...inputArray, input ])}> Add Button Name </button>
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
    <button type = "button" onClick={
        () => console.log(inputArray, input)}> ~List~</button>
        </div>
    )
}

export default FormHelper
