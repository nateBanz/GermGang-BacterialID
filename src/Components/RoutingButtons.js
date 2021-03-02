//clicking a button will take you to the next page by adding to the person object and calling a function that will
// rerender based upon changes to the person object (idea1)
//function to fetch info from database here!
import PropTypes from 'prop-types'
function fetchFirebaseData (germ) {
    console.log(germ);
}
const RoutingButton = (props) => {
    console.log(props.button)
    return <button onClick = { () => fetchFirebaseData(props.button)}> {props.button} </button>
}

RoutingButton.propTypes = {
    name: PropTypes.string,
}
export default RoutingButton