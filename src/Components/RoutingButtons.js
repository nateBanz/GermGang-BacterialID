//clicking a button will take you to the next page by adding to the person object and calling a function that will
// rerender based upon changes to the person object (idea1)
//function to fetch info from database here!
import PropTypes from 'prop-types'
function fetchFirebaseData () {
    //need to figure out a way to create custom global object type
    return new Object({name: "cone", image: "noneyet", buttonList: ["hello"] })
}
const RoutingButton = (props) => {
    return <button onClick = { () =>
        props.updateGerm({name: "cone", image: "noneyet", buttonList: ["hello", "dog"] })
    }> {props.button} </button>
}


export default RoutingButton