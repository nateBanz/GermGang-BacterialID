//clicking a button will take you to the next page

// import console from 'console'

//this function takes in a name and returns a firebase object of the germ
import {getName} from "./firebaseUtils";
import PersonTracker from "./PersonTracker";
import {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Breadcrumb} from 'react-bootstrap';






// -props.button- is the name of the current germ button. -props.updateGerm- is a function to update the germ in the parent
const RoutingButton = (props) => {

    const {buttonNameArray, updateArray} = useContext(PersonTracker);

    //cut the identifier off of the name so that it can be displayed properly
    let modifiedName = props.button.slice(0,-4)


try {



    //if clicked, load the new identifier name into the update function passed into this component. Passing anything to update will launch a rerender
    return <Button variant = "secondary" onClick={ async () => {


        //gets the particular germNode object based upon the name of the node
        let fullGerm = await getName(props.button)



        //if the array of buttons exists in the current loaded germNode, update the parent with a new node to the array
        if(fullGerm.buttonList) {

            //update the array with the new germ node if clicked
            updateArray([...buttonNameArray, fullGerm])

        }
        else {

            //otherwise, do nothing. In the future, add styling, take up the whole page with the answer, etc. Up to Robert!
            return undefined
        }


    }}>

        {modifiedName} </Button>


}
catch (Exception) {

    console.log(Exception)
}
}


export default RoutingButton