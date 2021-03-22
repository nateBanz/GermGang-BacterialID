
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
       name: "Homepage 0000",
       image: "nothing here for now",
       buttonList: ["Gram Positive 0000", "Gram Negative 0000"]
   }])


    //capture the values in an object
    const value = {buttonNameArray, updateArray}

    console.log(buttonNameArray) //testing

    //create a firebase object that contains the entire formatted database
    const germBase = firebase.database().ref();

    //get or create a reference to the germs child/object in the database
    const germs = germBase.child("germs");

    //create an object. All objects should look like this
    let gramPositiveAerobic = [
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


]

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

        {
            name: "Colony size 0000",
            image: "kisspng-computer-icons-home-clip-art-black-home-icon-5ab0be31073f68.5448178115215324650297.jpg",
            buttonList: ["Small non-hemolytic and small Gram(+) rods 0000", "Small beta-hemolytic, tiny Gram(+) rods 0000", "Large Gram(+) rods and large colony 0000"]
        },
        {name: "Yes 0002",
            image: "",
            buttonList: ['P. aeruginosa 0000']},

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
        {name: "P. aeruginosa 0000",
            image: "",
            buttonList: []},

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
        {name: "Oxidase (-) 0000",
            image: "",
            buttonList: ['Swarming on BAP 0000']},

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

        {name: "Stool 0000",
            image: "",
            buttonList: ['Lac(-) on MAC 0000', 'Lac(+) on MAC 0000']},

        {name: "Lac(-) on MAC 0000",
            image: "",
            buttonList: ["Oxidase (-) 0001", "Oxidase (+) 0001"]},

        {name: "Oxidase (-) 0001",
            image: "",
            buttonList: ['Possible Salmonella, Shigella, Yersinia enterocolitica, pathogenic E.Coli, or Proteus spp. 0000']},

        {name: "Possible Salmonella, Shigella, Yersinia enterocolitica, pathogenic E.Coli, or Proteus spp. 0000",
            image: "",
            buttonList: ['Swarming on BAP 0001']},

        {name: 'Swarming on BAP 0001',
            image: "",
            buttonList: ['No 0003','Yes 0004']},

        {name: "No 0003",
            image: "",
            buttonList: ["Indole 0002"]},

        {name: "Indole 0002",
            image: "",
            buttonList: ['(+) 0002','(-) 0002']},

        {name: "(+) 0002",
            image: "",
            buttonList: ["Potential pathogenic E.coli ~ See GNR Stool Pathogens Lactose Positive Flowchart and follow ID for E.coli 0000"]},

        {name: "Potential pathogenic E.coli ~ See GNR Stool Pathogens Lactose Positive Flowchart and follow ID for E.coli 0000",
            image: "",
            buttonList: []},

        {name: "(-) 0002",
            image: "",
            buttonList: ["Refer to GNR Stool Pathogens Lactose Negative Flowchart 0000"]},

        {name: "Refer to GNR Stool Pathogens Lactose Negative Flowchart 0000",
            image: "",
            buttonList: []},

        {name: "Yes 0004",
            image: "",
            buttonList: ["Proteus spp. 0000"]},

        {name: "Lac(+) on MAC 0000",
            image: "",
            buttonList: ["See GNR Stool Pathogens Lactose Positive Flowchart 0000"]},

        {name: "See GNR Stool Pathogens Lactose Positive Flowchart 0000",
            image: "",
            buttonList: []},

        {name: "Oxidase (+) 0001",
            image: "",
            buttonList: ["Growth on TCBS 0000"]},

        {name: "Growth on TCBS 0000",
            image: "",
            buttonList: ['Yellow 0000','Green 0000','None 0000']},

        {name: "Yellow 0000",
            image: "",
            buttonList: ["Possible Vibrio Cholerae or V. alginolyticus"]},

        {name: "Possible Vibrio Cholerae or V. alginolyticus",
            image: "",
            buttonList: []},

        {name: "Green 0000",
            image: "",
            buttonList: ["Possible Vibrio parahemolyticus 0000"]},

        {name: "Possible Vibrio parahemolyticus 0000",
            image: "",
            buttonList: ["Refer to GNR Stool Pathogens Lactose Negative Flowchart 0000"]},

        {name: 'None 0000',
            image: "",
            buttonList: ["Yellow Colonies on HE"]},

        {name: "Yellow Colonies on HE",
            image: "",
            buttonList: ["Oxidase (+) 0002"]},

        {name: "Oxidase (+) 0002",
            image: "",
            buttonList: ["Possible Aeromonas"]},



        //end

        ];


    //This function will push every object to the firebase.
    function pusher() {

        for (const germNode in gramNegativeMac) {

            germs.push(gramNegativeMac[germNode])
        }


        for (const germX in gramPositiveAerobic) {

            germs.push(gramPositiveAerobic[germX])

        }
    }

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

      </PersonTracker.Provider>

  </div>
  );
}

export default App;
