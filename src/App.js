import logo from './logo.svg';
import './App.css';
import QuestionPage from "./Components/QuestionPage";
import {useState} from "react";
import firebase from './firebase';

function App() {


  //This needs to be a function that executes once with our entire datastore. Once we do this, one person should run it.

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




    //push this object to the database. Makes it easy to add/update from a gui if needed
    germs.push(germ);
    germs.push(child1);
    germs.push(child2);
    germs.push(child3);
    germs.push(child4);
    germs.push(child5);
    germs.push(child6);



  return (
      <div>

   <QuestionPage></QuestionPage>


</div>
  );
}

export default App;
