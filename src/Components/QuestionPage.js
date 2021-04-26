
//questionpage takes in an array of names, creates button objects from it. Will pass names given to it to the parent

import React from 'react'
import PropTypes, {string} from 'prop-types'
import RoutingButtons from "./RoutingButtons";
import {useState} from 'react';
import {useContext} from "react";
import PersonTracker from "./PersonTracker";
import {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import {Image} from 'react-bootstrap';
import {getName} from "./firebaseUtils";



//need some styling here to create the look we are going for

//takes a parameter, an object defined below with the name of the germ, a picture and the list of germ names.
const QuestionPage = (props) => {


    //array of button objects from the global context.
    const {buttonNameArray, updateArray} = useContext(PersonTracker)

    //see the array being built
    console.log(buttonNameArray)

    //the array of names stored here, gets the most recent name from context
    const arrays = buttonNameArray[buttonNameArray.length-1].buttonList

    const currentName = buttonNameArray[buttonNameArray.length-1].name.slice(0,-4);

    const image = buttonNameArray[buttonNameArray.length-1].image

    const [images, setImages] = useState([])




    async function getImages() {

        let tempImage =[];
        for(let pic of arrays ) {
            console.log(pic)
            let obj = await getName(pic)
            if(obj !== string) {
                tempImage.push(obj.image)
            }
            else {
                tempImage.push("nothing")
            }
        }
        setImages([...tempImage])


}
    useEffect (()=>{getImages().then((r)=>(console.log(images)))},[buttonNameArray])



    //for every name in the array, create a div containing a button that passes in the name of the node.
    return <div className="center-bottom">
        <p className={"p mt-5"}> Click on the navigation buttons below to identify bacteria.</p>
        <h1 className={"h1"}>{currentName}</h1>
        <div className="text-center mt-5">
            <img src= {image} className="mx-auto 100px250"/>
        </div>
             <div className="flex"> {
            (arrays.map((list, index)=> <div className= "pages" key = {index}>

                <RoutingButtons button = {list} image = {images[index]} > </RoutingButtons>

            </div>))}

     </div>
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
    buttonList: PropTypes.arrayOf(PropTypes.string)}


export default QuestionPage
