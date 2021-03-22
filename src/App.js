
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



        { name: "Gram Negative 0000",
        image: "",
        buttonList: ["Non Stool 0000, Stool 0000"]},

        { name: "Non Stool 0000",
        image: "",
        buttonList: ["Lactose(+) 0000", "Lactose(-) 0000"]},

        //lactose + start

        { name: "Lactose(+) 0000",
            image: "",
            buttonList: ["Indole 0000"]},

        { name: "Indole 0000",
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

        //Positive side

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

        //Lactose - start

        {name: "Lactose(-) 0000",
            image: "",
            buttonList: ['Oxidase (+) 0000','Oxidase (-) 0000']},

        {name: "Oxidase (+) 0000",
            image: "",
            buttonList: ['Colony metallic. Odor of Grapes 0000']},

        {name: "Colony metallic. Odor of Grapes 0000",
            image: "",
            buttonList: ['No 0001','Yes 0002']},

        {name: "No 0001",
            image: "",
            buttonList: ["B. cepacia, B. pseudomallei, Pasteurella, Others (Refer to your laboratory's BT rule out charts 0000"]},

        {name: "B. cepacia, B. pseudomallei, Pasteurella, Others (Refer to your laboratory's BT rule out charts 0000",
            image: "",
            buttonList: []},

        {name: "Yes 0002",
            image: "",
            buttonList: ['P. aeruginosa 0000']},

        {name: "P. aeruginosa 0000",
            image: "",
            buttonList: []},

        {name: "Oxidase (-) 0000",
            image: "",
            buttonList: ['Swarming on BAP 0000']},

        {name: 'Swarming on BAP 0000',
            image: "",
            buttonList: ['No 0002','Yes 0003']},

        {name: "No 0002",
            image: "",
            buttonList: ['Indole 0001']},

        {name: 'Indole 0001',
            image: "",
            buttonList: ['(-) 0001','(+) 0001']},

        {name: '(-) 0001',
            image: "",
            buttonList: ["Serratia, Citrobacter, Enterobacter, S. maltophilia, Acinetobacter, Others ~ B. mallei, Y. pestis (Refer to your laboratory's BT rule out charts 0000"]},

        {name: "Serratia, Citrobacter, Enterobacter, S. maltophilia, Acinetobacter, Others ~ B. mallei, Y. pestis (Refer to your laboratory's BT rule out charts 0000",
            image: "",
            buttonList: []},

        {name: "(+) 0001",
            image: "",
            buttonList: ['E.coli (Use E.coli ID Chart) 0000']},

        {name: "E.coli (Use E.coli ID Chart) 0000",
            image: "",
            buttonList: []},

        {name: "Yes 0003",
            image: "",
            buttonList: ['Proteus spp. 0000']},

        {name: "Proteus spp. 0000",
            image: "",
            buttonList: []},


        //end

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
