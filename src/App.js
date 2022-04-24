import './App.css';
import QuestionPage from "./Components/QuestionPage";
import {useState} from "react";
import Header from "./Components/Header";
import * as React from "react";
import PersonTracker from "./Components/PersonTracker"; //context (global variables essentially) that can be used anywhere and trigger a refresh on updates




function App() {
    //set a state to use for updating array
   const [buttonNameArray, updateArray]= useState([{
       name: "Homepage 0000",
       image: "https://images-ext-1.discordapp.net/external/i9Sm7SJlP_Cud2bLMpml0JfaX7QfZi86JvG43TC6hU8/https/www.verywellhealth.com/thmb/-jD_krAWs3AEusH0FN_Mpm3pB3I%3D/2823x2117/smart/filters%3Ano_upscale%28%29/microphotograph-of-example-of-staining-bacteria-using-gram-method--at-x1250-magnification-173288072-ab648ac296f846faaa075a7101f06024.jpg?width=1248&height=936",
       buttonList: ["Gram Positive 0000", "Gram Negative 0000"]
   }])


    //capture the values in an object
    const value = {buttonNameArray, updateArray}

    console.log(buttonNameArray) //testing

    //create a firebase object that contains the entire formatted database
    //const germBase = firebase.database().ref();

    //get or create a reference to the germs child/object in the database
    // const germs = germBase.child("germs");


//if you need to reset the database, copy the external file here and uncomment out the REMOVE function . Reload the webpage once and comment back out.
//then comment in PUSHER, reload once, and comment back out.

    //pusher()
    //germBase.remove()


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
