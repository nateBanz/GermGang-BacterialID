//takes object and parses inputs: isdone, number of buttons and the text on the buttons
//questionpage takes in an array of names, creates button objects from it.

import React from 'react'
import PropTypes from 'prop-types'
import RoutingButtons from "./RoutingButtons";

const QuestionPage = (props) => {
    return<div>

        <RoutingButtons button = {props.name}> </RoutingButtons>

    </div>
}

QuestionPage.defaultProps = {
    name: 'hello',
}

QuestionPage.prototype = {name: PropTypes.Object}
//buttonInfoObject: {name: string, [Object.typeOf(SpecialButton): {name: string, image: string}]
//database button: {name: string, image: string, ArrayOfButtons : [name: String...]
export default QuestionPage