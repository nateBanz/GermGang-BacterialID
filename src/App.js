
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
            buttonList: ["Gram Positive", "Gram Negative"]
        },

        //Aerobic Gram-Positive Rods flowchart begins

        {
            name: "Gram Positive 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Gram (+) rod", "Gram Stain Morphology"]
        },

        {
            name: "Gram (+) rod 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Regular shape", "Irregular/pleomorphic shape"]
        },

        {
            name: "Regular shape 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Catalase(+) gp1", "Catalase(-) gp1"]
        },
        {
            name: "Catalase(+) 0001",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Colony size"]
        },

        {
            name: "Colony size 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Small non-hemolytic and small Gram(+) rods", "Small beta-hemolytic, tiny Gram(+) rods", "Large Gram(+) rods and large colony"]
        },

        {
            name: "Small non-hemolytic and small Gram(+) rods 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Corynebacterium spp."]
        },

        {
            name: "Small beta-hemolytic, tiny Gram(+) rods 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Listeria spp."]
        },

        {
            name: "Large Gram(+) rods and large colony 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Bacillus spp."]
        },

        {
            name: "Catalase(-) gp1 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Small to long sized Gram(+) rods"]
        },

        {
            name: "Small to long sized Gram(+) rods 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Lactobacillus spp. or Erysipelothrix spp."]
        },

        {
            name: "Lactobacillus spp. or Erysipelothrix spp. 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["H2S Positive", "H2S Negative"]
        },

        {
            name: "H2S Positive 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Possible Erysipelothrix spp."]
        },

        {
            name: "H2S Negative 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Possible Lactobacillus spp."]
        },

        {
            name: "Irregular/pleomorphic shape 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Catalase(-) gp2", "Catalase(+) gp2"]
        },

        {
            name: "Catalase(-) 0002",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Non-motile, non-hemolytic gp1", "Non-motile, hemolytic"]
        },

        {
            name: "Non-motile, non-hemolytic 0001",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Lactobacillus spp. or Erysipelothrix spp."]
        },

        {
            name: "Non-motile, hemolytic 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Gardnerella spp."]
        },

        {
            name: "Catalase(+) 0002",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Non-motile, non-hemolytic gp2"]
        },

        {
            name: "Non-motile, non-hemolytic 0002",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Corynebacterium spp."]
        },

        //aerobic gram-positive rods flowchart ends

        {
            name: "Gram Stain Morphology 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Cocci pairs and chains", "Cocci clusters and tetrads"]
        },

        {
            name: "Cocci pairs and chains 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Catalase(+) gp3", "Catalase(-) gp3"]
        },

        {
            name: "Cocci clusters and tetrads 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Catalase(-) gp3", "Catalase(+) gp4"]
        },

        {
            name: "Catalase(+) 0003",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["See Staphylococci ID chart"]
        },

        {
            name: "Catalase(-) 0003",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["See appropriate Streptococci on BAP flowchart"]
        },

        {
            name: "Catalase(+) 0004",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["See Staphylococci ID chart"]
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
