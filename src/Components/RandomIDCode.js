import react from 'react' 
import { getDatabase, ref, set } from "firebase/database";
import firebase from 'firebase'
import { firestore } from '../firebase';
import { isProfessor } from './firestoreUtils';


export default function RandomExperimentCode(){
    
}

export function newCode(){
    const short = require('short-uuid')
    const translator = short();
    const code = translator.new()
    return code
}
/*
*/

