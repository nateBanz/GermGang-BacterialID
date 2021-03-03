//clicking a button will take you to the next page by adding to the person object and calling a function that will
// rerender based upon changes to the person object (idea1)
//function to fetch info from database here!
import firebase from 'firebase'
import console from 'console'

//probably async here in the future

let fetchFirebaseData = async (nameOfGerm) => {
    //find object containing the germ by name

    let con = firebase.database().ref("germs");
    let snap = await con.orderByChild("name").limitToFirst(1).equalTo(nameOfGerm).once('value');
    let germ = snap.val();
    return germ;

}
//props.button is the name of the current germ button. props.updateGerm is a function to update the germ in the parent
const RoutingButton = (props) => {



try {

    return <button onClick={ async () => {

        let constant = await fetchFirebaseData(props.button)
        let cat = Object.keys(constant)[0];
        let fullGerm = constant[cat]

        console.log(fullGerm)


        // console.log(cat)

       // console.log(constant[cat[0]])

        if(fullGerm.buttonList) {
            //console.log(fullGerm.name)
            props.updateGerm(fullGerm)
        }
        else {
            return undefined
        }




    }}>





        {props.button}</button>
    //prop.updateGerm is a function that changes the germ set in the parent. Use fetch function to return a new germ object from database
    //based on the name of the button (germ).

    //props.updateGerm({name: "cone", image: "noneyet", buttonList: ["hello", "dog"] }) **testing a hardcoded object**

}
catch (Exception) {
    console.log("weird result")
}
}


export default RoutingButton