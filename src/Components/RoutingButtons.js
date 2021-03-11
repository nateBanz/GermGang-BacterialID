//clicking a button will take you to the next page
import firebase from 'firebase'
import console from 'console'

//this function takes in a name and returns a firebase object of the germ
import {getName} from "./firebaseUtils";
import PersonTracker from "./PersonTracker";
import {useContext} from "react";




// -props.button- is the name of the current germ button. -props.updateGerm- is a function to update the germ in the parent
const RoutingButton = (props) => {

    const {buttonNameArray, updateArray} = useContext(PersonTracker);

    //cut the identifier of the name so that it can be displayed properly
    let modifiedName = props.button.slice(0,-4)


try {

    //need to use an async onclick to wait until the database retrieves the queried data

    //if clicked, load the new identifier name into the update function passed into this component. Passing anything to update will launch a rerender

    return <button onClick={ async () => {

        //stores the return germ object wrapped in another firebase created object


        //stores the first key of the return data (firebase generated id). Only 1 here (from the use of limit so use index = 0


        //gets the germ object based upon the key
        let fullGerm = await getName(props.button)

        //console.log(fullGerm)**testing


        // console.log(cat) *testing


        //if the array of buttons exists in the current loaded germ identifier name, update the germ identifier state with this new one
        if(fullGerm.buttonList) {

            //console.log(fullGerm.name) **testing

            //update the array with the new germ node if clicked
            updateArray([...buttonNameArray, fullGerm])

            //props.updateGerm(fullGerm) **deprecated
        }
        else {

            //otherwise, do nothing. In the future, add styling, take up the whole page with the answer, etc. Up to Robert!
            return undefined
        }


    }}>





        {props.button} </button>


    //props.updateGerm({name: "cone", image: "noneyet", buttonList: ["hello", "dog"] }) **testing a hardcoded object**

}
catch (Exception) {

    console.log("weird result")
}
}


export default RoutingButton