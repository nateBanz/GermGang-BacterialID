//takes object and parses inputs: isdone, number of buttons and the text on the buttons
//questionpage takes in an array of names, creates button objects from it.

import React from 'react'
import PropTypes from 'prop-types'
import RoutingButtons from "./RoutingButtons";
import {useState} from 'react';
//need some styling here to create the look we are going for

//takes a parameter, an object defined below with the name of the germ, a picture and the list of germ names.
const QuestionPage = (props) => {
    const [specificGerm, updateGerm] = useState(props);

    console.log(specificGerm)
    //the array of names stored here!

    const arrays = specificGerm.buttonList
    console.log(arrays)

    //for every name in the array, create a div containing a button that passes in the name of the germ.

    return (arrays.map((list, index)=> <div className= "pages" key = {index}>

        <RoutingButtons button = {list} updateGerm = {updateGerm}> </RoutingButtons>

    </div>)
    )

}
//this is what the object passed into props should look like by default
QuestionPage.defaultProps = {
name: "hello",
image: "nothing here for now",
buttonList: ["Rod", "Cone", "Spheroid"]
}
//this is what the object passed into props should look like in general (essentially creating a class definition here for the object i want to pass in)
QuestionPage.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    buttonList: PropTypes.arrayOf(PropTypes.string),}
//buttonInfoObject: {name: string, [Object.typeOf(SpecialButton): {name: string, image: string}]
//database button: {name: string, image: string, ArrayOfButtons : [name: String...]
export default QuestionPage