
import './App.css';
import QuestionPage from "./Components/QuestionPage";
import {useState} from "react";
import firebase from './firebase';
import Header from "./Components/Header";
import * as React from "react";
import PersonTracker from "./Components/PersonTracker"; //context (global variables essentially) that can be used anywhere and trigger a refresh on updates

function App() {
    //set a state to use for updating array
    const [buttonNameArray, updateArray] = useState([{
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
    let practiceArray = [
        {
            name: "Homepage 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Gram Positive 0000", "Gram Negative 0000"]
        },

        //Aerobic Gram-Positive Rods flowchart begins

        {
            name: "Gram Positive 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Gram (+) rod 0000", "Gram Stain Morphology 0000"]
        },

        {
            name: "Gram (+) rod 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Regular shape 0000", "Irregular/pleomorphic shape 0000"]
        },

        {
            name: "Regular shape 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Catalase(+) 0001", "Catalase(-) 0000"]
        },
        {
            name: "Catalase(+) 0001",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Colony size 0000"]
        },

        {
            name: "Colony size 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Small non-hemolytic and small Gram(+) rods 0000", "Small beta-hemolytic, tiny Gram(+) rods 0000", "Large Gram(+) rods and large colony 0000"]
        },

        {
            name: "Small non-hemolytic and small Gram(+) rods 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Corynebacterium spp. 0000"]
        },

        {
            name: "Corynebacterium spp. 0000",
            image: "",
            buttonList: []
        },

        {
            name: "Small beta-hemolytic, tiny Gram(+) rods 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Listeria spp. 0000"]
        },

        {
            name: "Listeria spp. 0000",
            image: "",
            buttonList: []
        },

        {
            name: "Large Gram(+) rods and large colony 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Bacillus spp. 0000"]
        },

        {
            name: "Bacillus spp. 0000",
            image: "",
            buttonList: []
        },

        {
            name: "Catalase(-) 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Small to long sized Gram(+) rods 0000"]
        },

        {
            name: "Small to long sized Gram(+) rods 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Lactobacillus spp. or Erysipelothrix spp. 0000"]
        },


        {
            name: "Lactobacillus spp. or Erysipelothrix spp. 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["H2S Positive 0000", "H2S Negative 0000"]
        },

        {
            name: "H2S Positive 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Possible Erysipelothrix spp. 0000"]
        },

        {
            name: "Possible Erysipelothrix spp. 0000",
            image: "",
            buttonList: []
        },

        {
            name: "H2S Negative 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Possible Lactobacillus spp. 0000"]
        },

        {
            name: "Possible Lactobacillus spp. 0000",
            image: "",
            buttonList: []
        },

        {
            name: "Irregular/pleomorphic shape 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Catalase(-) 0002", "Catalase(+) 0002"]
        },

        {
            name: "Catalase(-) 0002",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Non-motile, non-hemolytic 0001", "Non-motile, hemolytic 0000"]
        },

        {
            name: "Non-motile, non-hemolytic 0001",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Lactobacillus spp. or Erysipelothrix spp. 0000"]
        },

        {
            name: "Lactobacillus spp. or Erysipelothrix spp. 0000",
            image: "",
            buttonList: []
        },

        {
            name: "Non-motile, hemolytic 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Gardnerella spp. 0000"]
        },

        {
            name: "Gardnerella spp. 0000",
            image: "",
            buttonList: []
        },

        {
            name: "Catalase(+) 0002",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Non-motile, non-hemolytic 0002"]
        },

        {
            name: "Non-motile, non-hemolytic 0002",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Corynebacterium spp. 0000"]
        },

        {
            name: "Corynebacterium spp. 0000",
            image: "",
            buttonList: []
        },

        //aerobic gram-positive rods flowchart ends

        {
            name: "Gram Stain Morphology 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Cocci pairs and chains 0000", "Cocci clusters and tetrads 0000"]
        },

        {
            name: "Cocci pairs and chains 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Catalase(+) 0003", "Catalase(-) 0003"]
        },

        {
            name: "Cocci clusters and tetrads 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Catalase(-) 0003", "Catalase(+) 0004"]
        },

        {
            name: "Catalase(+) 0003",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["See Staphylococci ID chart 0000"]
        },

        {
            name: "See Staphylococci ID chart 0000",
            image: "",
            buttonList: []
        },

        {
            name: "Catalase(-) 0003",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["See appropriate Streptococci on BAP flowchart 0000"]
        },

        {
            name: "See appropriate Streptococci on BAP flowchart 0000",
            image: "",
            buttonList: []
        },

        {
            name: "See Staphylococci ID chart 0000",
            image: "",
            buttonList: []
        },
    ];

    //Aerobic gram-positive cocci flowchart ends
    //

//This function will push every object to the firebase.
    function pusher() {
        console.log(practiceArray)

        for (const germNode in practiceArray) {

            germs.push(practiceArray[germNode])


//this needs a bunch of styling. Add a classname and use the index.css for this and/or bootstrap or similar


            return (
                <div>

                    <PersonTracker.Provider value={value}>

                        <div>
                            <Header germ={buttonNameArray[buttonNameArray.length - 1]}></Header>
                        </div>
                        <div>
                            <QuestionPage germ={buttonNameArray[buttonNameArray.length - 1]}></QuestionPage>
                        </div>

                    </PersonTracker.Provider>

                </div>
            );
        }

        export default App;
    }
}
