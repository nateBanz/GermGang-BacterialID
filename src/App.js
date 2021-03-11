
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

    //Aerobic Gram-Positive Rods flowchart begins

    let child1 =  {
        name: "Gram Positive",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Gram (+) rod", "Gram Stain Morphology"]
    }

    let child2 =  {
        name: "Gram (+) rod",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Regular shape", "Irregular/pleomorphic shape"]
    }

    let child3 = {
        name: "Regular shape",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Catalase(+) gp1", "Catalase(-) gp1"]
    }

    let child4 = {
        name: "Catalase(+) gp1",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Colony size"]
    }

    let child5 = {
        name: "Colony size",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Small non-hemolytic and small Gram(+) rods" , "Small beta-hemolytic, tiny Gram(+) rods" , "Large Gram(+) rods and large colony"]
    }

    let child6 = {
        name: "Small non-hemolytic and small Gram(+) rods",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Corynebacterium spp."]
    }

    let child7 = {
        name: "Small beta-hemolytic, tiny Gram(+) rods",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Listeria spp."]
    }

    let child8 = {
        name: "Large Gram(+) rods and large colony",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Bacillus spp."]
    }

    let child9 = {
        name: "Catalase(-) gp1",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Small to long sized Gram(+) rods"]
    }

    let child11 = {
        name: "Small to long sized Gram(+) rods",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Lactobacillus spp. or Erysipelothrix spp."]
    }

    let child12 = {
        name: "Lactobacillus spp. or Erysipelothrix spp.",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["H2S Positive" , "H2S Negative"]
    }

    let child13 = {
        name: "H2S Positive",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Possible Erysipelothrix spp."]
    }

    let child14 = {
        name: "H2S Negative",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Possible Lactobacillus spp."]
    }

    let child15 = {
        name: "Irregular/pleomorphic shape",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Catalase(-) gp2" , "Catalase(+) gp2"]
    }

    let child16 = {
        name: "Catalase(-) gp2",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Non-motile, non-hemolytic gp1" , "Non-motile, hemolytic"]
    }

    let child17 = {
        name: "Non-motile, non-hemolytic gp1",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Lactobacillus spp. or Erysipelothrix spp."]
    }

    let child18 = {
        name: "Non-motile, hemolytic",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Gardnerella spp."]
    }

    let child19 = {
        name: "Catalase(+) gp2",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Non-motile, non-hemolytic gp2"]
    }

    let child20 = {
        name: "Non-motile, non-hemolytic gp2",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Corynebacterium spp."]
    }

    //aerobic gram-positive rods flowchart ends

    let child21 =  {
        name: "Gram Stain Morphology",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Cocci pairs and chains", "Cocci clusters and tetrads"]
    }

    let child22 =  {
        name: "Cocci pairs and chains",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Catalase(+) gp3", "Catalase(-) gp3"]
    }

    let child23 =  {
        name: "Cocci clusters and tetrads",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["Catalase(-) gp3", "Catalase(+) gp4"]
    }

    let child24 =  {
        name: "Catalase(+) gp3",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["See Staphylococci ID chart"]
    }

    let child25 =  {
        name: "Catalase(-) gp3",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["See appropriate Streptococci on BAP flowchart"]
    }

    let child26 =  {
        name: "Catalase(+) gp4",
        image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
        buttonList: ["See Staphylococci ID chart"]
    }

    //Aerobic gram-positive cocci flowchart end


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
