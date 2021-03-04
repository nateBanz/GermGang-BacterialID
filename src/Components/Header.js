import React from 'react'
import PersonTracker from "./PersonTracker";
import {useContext} from "react";
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout








//reset button




const Header = (props) => {

    //button/node objects from the context that are being updated
    const {buttonNameArray, updateArray} = useContext(PersonTracker)  //this is the information needed. The array of buttons names and the update array function

    function goBack() {

        if(buttonNameArray.length > 1) {

            //console.log(buttonNameArray) **testing
            let newArray = [...buttonNameArray]
            newArray.pop()
            updateArray(newArray)
            //console.log(newArray) **testing
            console.log("sliced")
        }

    }

    //use the getname function here to get a germ object.

    return <div>
            <button onClick={()=> {
                goBack();

            }}>Back</button>

    </div>
}

export default Header