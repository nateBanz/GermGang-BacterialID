import react from 'react' 
import { getDatabase, ref, set } from "firebase/database";
import firebase from 'firebase'


export default function RandomExperimentCode(){
    
}

export function newCode(){
    const short = require('short-uuid')
    const translator = short();
    const code = translator.new()
    return code
}
/*export function writeExperiment(expTitle, uuid) {
        const db = firebase.database().ref("experiments");
      
        // A post entry.
        const expData = {
          title: expTitle,
          ID: uuid
        };
      
        // Get a key for a new Post.
        const newExperimentKey = push(child(ref(db), 'experiments')).key;
      
        // Write the new experiments's data
        const updates = {};
        updates['/experiments' + newExperimentKey] = postData;
      
        return update(ref(db), updates);
    }*/

