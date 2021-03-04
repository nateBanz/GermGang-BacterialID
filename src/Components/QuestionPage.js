
//questionpage takes in an array of names, creates button objects from it. Will pass names given to it to the parent

import React from 'react'
import PropTypes, {string} from 'prop-types'
import RoutingButtons from "./RoutingButtons";
import {useState} from 'react';
import {useContext} from "react";
import PersonTracker from "./PersonTracker";
import {useEffect} from "react";


//need some styling here to create the look we are going for

let Person = {
    name: string
}
//takes a parameter, an object defined below with the name of the germ, a picture and the list of germ names.
const QuestionPage = (props) => {

    //const [specificGerm, updateGerm] = useState(props); **deprecated

    //console.log(specificGerm) **testing

    //array of button objects from the global context.
    const {buttonNameArray, updateArray} = useContext(PersonTracker)

    //console.log(buttonNameArray.length) **testing

    //specificGerm = buttonNameArray[buttonNameArray.length-1] **deprecated

    //the array of names stored here!
    const arrays = buttonNameArray[buttonNameArray.length-1].buttonList


    //for every name in the array, create a div containing a button that passes in the name of the node.
    return <div> {

        (arrays.map((list, index)=> <div className= "pages" key = {index}>

        <RoutingButtons button = {list}  > </RoutingButtons>

    </div>))}

    </div>


}
//this is what the object passed into props should look like by default
QuestionPage.defaultProps = {
name: "Homepage",
image: "nothing here for now",
buttonList: ["Gram Positive", "Gram Negative"]
}

//this is what the object passed into props should look like in general (essentially creating a class definition here for the object i want to pass in)
QuestionPage.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    buttonList: PropTypes.arrayOf(PropTypes.string),}

//database button: {name: string, image: string, ArrayOfButtons : [name: String...]
export default QuestionPage