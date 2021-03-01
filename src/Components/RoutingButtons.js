//clicking a button will take you to the next page by adding to the person object and calling a function that will
// rerender based upon changes to the person object (idea1)
//function to send new props, function to fetch info from database


const RoutingButton = (props) => {
    return <Button> {props.name} </Button>
}

export default RoutingButton