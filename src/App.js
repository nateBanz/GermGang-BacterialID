
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





  //TODO : This needs to be a function that executes once with our entire datastore. Once we do this, one person should run it.
    // Everyone should add to this, and this will be removed once everything is in!
    //Be careful! When testing, this will push ALOT to the database. Make sure to clear it every couple of button clicks.
    //This should be done first


    //create a firebase object that contains the entire formatted database
    const germBase = firebase.database().ref();

    //get or create a reference to the germs child/object in the database
    const germs = germBase.child("germs");

    //create an object. All objects should look like this


    //Growth on Mac section
    let gramNegativeMac = [

        //lactose + start

        { name: "Gram Negative 0000",
        image: "",
        buttonList: ["Non Stool 0000, Stool 0000"]},

        { name: "Non Stool 0000",
        image: "",
        buttonList: ["Lactose(+) 0000", "Lactose(-) 0000"]},

        { name: "Lactose(+) 0000",
            image: "",
            buttonList: ["indole 0000"]},

        { name: "indole 0000",
            image: "",
            buttonList: ["(-) 0000", "(+) 0000"]},

        { name: "(-) 0000",
            image: "hasimage",
            buttonList: ["Colony mucoid. Odor of fresh bread? 0000"]},

        { name: "Colony mucoid. Odor of fresh bread? 0000",
            image: "",
            buttonList: ["No 0000", "Yes 0000"]},

        { name: "No 0000",
            image: "image",
            buttonList: ["Enterobacter, Providencia, Citrobacter, Cronobacter, Others 0000"]},

        { name: "Yes 0000",
            image: "image",
            buttonList: ["Klebsiella, Rare Enterobacter 0000"]},

        //see a chart?
        { name: "(+) 0000",
            image: "",
            buttonList: ["Colony mucoid. Odor of fresh bread? 0001", "Non-Mucoid E.Coli 0000"]},

        { name: "Colony mucoid. Odor of fresh bread? 0001",
            image: "",
            buttonList: ["Yes 0001"]},

        { name: "Yes 0001",
            image: "",
            buttonList: ["Kiebsiella, Rare Enterobacter"]},

        { name: "Non-Mucoid E.Coli 0000",
            image: "",
            buttonList: ["Rare Citrobacter or other Enteric GNR 0000"]},

        { name: "Rare Citrobacter or other Enteric GNR 0000",
            image: "",
            buttonList: []},

        { name: "Klebsiella, Rare Enterobacter 0000",
            image: "",
            buttonList: []},

        { name: "Enterobacter, Providencia, Citrobacter, Cronobacter, Others 0000",
            image: "",
            buttonList: []},

        { name: "Rare Citrobacter or other Enteric GNR 0000",
            image: "",
            buttonList: []},

        //end

        {name: "Stool 0000",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []},
        {name: "cone",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []},
        {name: "cat",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []},
        {name: "dog",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: []}

        ];

    //testing object rather than just the contents
    let practice2 = [
        child1, child2, child3, child4
    ]

    //This function will push every object to the firebase.
    function pusher() {

        for (const germNode in practiceArray) {

            germs.push(practiceArray[germNode])

        }

        console.log('test')

        for (const germNode in practice2) {

            germs.push(practice2[germNode])

        }
    }

    //push this object to the database. Makes it easy to add/update from a gui if we make this a function that can run in the header! Maybe a good candidate to be moved there
    pusher()



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
E
      </PersonTracker.Provider>

  </div>
  );
}

export default App;
