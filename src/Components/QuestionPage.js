
//questionpage takes in an array of names, creates button objects from it. Will pass names given to it to the parent

import React from 'react'
import PropTypes, {string} from 'prop-types'
import RoutingButtons from "./RoutingButtons";
import {useState} from 'react';
import {useContext} from "react";
import PersonTracker from "./PersonTracker";
import {useEffect} from "react";


//need some styling here to create the look we are going for

//takes a parameter, an object defined below with the name of the germ, a picture and the list of germ names.
const QuestionPage = (props) => {


    //array of button objects from the global context.
    const {buttonNameArray, updateArray} = useContext(PersonTracker)

    //see the array being built
    console.log(buttonNameArray)

    //the array of names stored here, gets the most recent name from context
    const arrays = buttonNameArray[buttonNameArray.length-1].buttonList

    //see the names of the new nodes here
    console.log(arrays)


    //for every name in the array, create a div containing a button that passes in the name of the node.
    return <div> {

        (arrays.map((list, index)=> <div className= "pages" key = {index}>

        <RoutingButtons button = {list}  > </RoutingButtons>

    </div>))}

    </div>


}
//this is what the object passed into props should look like by default
QuestionPage.defaultProps = {
name: "Homepage 0000",
image: "nothing here for now",
buttonList: ["Gram Positive 0000", "Gram Negative 0000"]
}

//this is what the object passed into props should look like in general (essentially creating a class definition here for the object i want to pass in)
QuestionPage.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    buttonList: PropTypes.arrayOf(PropTypes.string),}


export default QuestionPage
