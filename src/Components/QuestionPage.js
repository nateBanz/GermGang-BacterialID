//takes object and parses inputs: isdone, number of buttons and the text on the buttons
//questionpage takes in an array of names, creates button objects from it.

import React from 'react'
import PropTypes from 'prop-types'
import RoutingButtons from "./RoutingButtons";
//need some styling here to create the look we are going for
const QuestionPage = (props) => {
    //the array of buttons
    let arrays = props.buttonList
    return (arrays.map(list => <div className= "pages">

        <RoutingButtons button = {list}> </RoutingButtons>

    </div>)
    )

}

QuestionPage.defaultProps = {
name: "hello",
image: "nothing here for now",
buttonList: ["Rod", "Cone", "Spheroid"]
}

QuestionPage.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    buttonList: PropTypes.arrayOf(PropTypes.string),}
//buttonInfoObject: {name: string, [Object.typeOf(SpecialButton): {name: string, image: string}]
//database button: {name: string, image: string, ArrayOfButtons : [name: String...]
export default QuestionPage