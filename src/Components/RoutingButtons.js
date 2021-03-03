//clicking a button will take you to the next page
import firebase from 'firebase'
import console from 'console'
import {getName} from "./firebaseUtils";


//returns a promise query data. Takes in the name of the current germ.
let fetchFirebaseData = async (nameOfGerm) => {

    //find reference to the part of database containing germs
    let con = firebase.database().ref("germs");

    //takes a slice of this data based upon the parameters (name) and only the first one
    let snap = await con.orderByChild("name").limitToFirst(1).equalTo(nameOfGerm).once('value');

    //takes the value of that slice and return it
    let germ = snap.val();
    return germ;

}
// -props.button- is the name of the current germ button. -props.updateGerm- is a function to update the germ in the parent
const RoutingButton = (props) => {

try {

    //need to use an async onclick to wait until the database retrieves the queried data

    //if clicked, load the new identifier name into the update function passed into this component. Passing anything to update will launch a rerender

    return <button onClick={ async () => {

        //stores the return germ object wrapped in another firebase created object
        let constant = await getName(props.button)

        //stores the first key of the return data (firebase generated id). Only 1 here (from the use of limit so use index = 0
        let cat = Object.keys(constant)[0];

        //gets the germ object based upon the key
        let fullGerm = constant[cat]

        //console.log(fullGerm)**testing


        // console.log(cat) *testing


        //if the array of buttons exists in the current loaded germ identifier name, update the germ identifier state with this new one
        if(fullGerm.buttonList) {

            //console.log(fullGerm.name) **testing

            props.updateGerm(fullGerm)
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