
import './App.css';
import QuestionPage from "./Components/QuestionPage";
import {useState} from "react";
import firebase from './firebase';
import Header from "./Components/Header";
import * as React from "react";
import PersonTracker from "./Components/PersonTracker"; //context (global variables essentially) that can be used anywhere and trigger a refresh on updates

function App() {
    //set a state to use for updating array
   const [buttonNameArray, updateArray]= useState([{
       name: "Homepage",
       image: "nothing here for now",
       buttonList: ["Gram Positive", "Gram Negative"]
   }])


    //capture the values in an object
    const value = {buttonNameArray, updateArray}

    console.log(buttonNameArray) //testing





  //TODO : This needs to be a function that executes once with our entire datastore. Once we do this, one person should run it. Can be placed somewhere else. Just put here for testing the push
    // Everyone should add to this, and this will be removed once everything is in!
    //Be careful! When testing, this will push ALOT to the database. Make sure to clear it every couple of button clicks.
    //This should be done first


    //create a firebase object that contains the entire formatted database
    const germBase = firebase.database().ref();

    //get or create a reference to the germs child/object in the database
    const germs = germBase.child("germs");

    //create an object. All objects should look like this

    let germ = {
        name: "Homepage",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Gram Positive", "Gram Negative"]
    }


    let child1 =  {
        name: "Gram Positive",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["rod", "cone"]
    }

    let child2 =  {
        name: "Gram Negative",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["cat", "dog"]
    }

    let child3 =  {
        name: "rod",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []
    }

    let child4 =  {
        name: "cone",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []
    }

    let child5 =  {
        name: "cat",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []
    }

    let child6 =  {
        name: "dog",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []
    }

//EZEKIEL ADDITION
    let gst1 =  {
        name: "Gram Stain Morphology ",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Cocci pairs and chains", "Cocci clusters and tetrads"]
    }

    let gst2 =  {
        name: "Cocci pairs and chains",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Catalase(+)", "Catalase(-)"]
    }

    let gst3 =  {
        name: "Cocci clusters and tetrads",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Catalase(-)", "Catalase(+)"]
    }

    let gst =  {
        name: "Catalase(+)",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["See Staphylococci ID Chart"]
    }

    let gst5 =  {
        name: "Catalase(-)",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["See appropraite Streptococci on BAP Flowchart"]
    }

   germs.push(gst1);
   germs.push(gst2);
   germs.push(gst3);
   germs.push(gst4);
   germs.push(gst5);
//ENDING


    //push this object to the database. Makes it easy to add/update from a gui if we make this a function that can run in the header! Maybe a good candidate to be moved there
    germs.push(germ);
    germs.push(child1);
    germs.push(child2);
    germs.push(child3);
    germs.push(child4);
    germs.push(child5);
    germs.push(child6);




//this needs a bunch of styling. Add a classname and use the index.css for this and/or bootstrap or similar


    return (
  <div>

      <PersonTracker.Provider value = {value} >

          <div>
              <Header germ = {buttonNameArray[buttonNameArray.length -1]} ></Header>
          </div>
          <div>
              <QuestionPage germ = {buttonNameArray[buttonNameArray.length -1]} ></QuestionPage>
          </div>

      </PersonTracker.Provider>

  </div>
  );
}

export default App;
