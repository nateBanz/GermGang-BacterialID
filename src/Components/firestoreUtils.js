import { Console } from "console";
import { firestore } from "../firebase";

//Creates a new class with a unique id, a title, and the professor's email. puts the class in the 'classes' collection in the firestore database. 
export function writeClass(classTitle, email, uuid) {
    
    const db = firestore
      const docRef = db.collection('users').doc(email).collection('classes').doc(classTitle);

      docRef.set({
      ClassTitle: classTitle,
      professor: email,
      ClassID: uuid
      });
    }

export function writeExperiment(expTitle, email, uuid, classID) {
    //if(isProfessor(email)){
    const db = firestore
    //creates a reference to the provided professors class experiment list.
    // essentially in the firestore:  users -> professor@email.com -> classes -> Class(using ID) -> experiments
      const docRef = firestore.collection('users').doc(email).collection('classes').doc().where("ClassID", "==", classID).collection('experiments').doc(expTitle)

      docRef.set({
      ExperimentTitle: expTitle,
      professor: email,
      ExperimentID: uuid
      });
    }

    export async function isStudent(email){
      //gets the snapshot of the firestores 'users'
      const db = firestore;
      const doc = db.collection('users').doc(email);
      let result = await doc.get("UserRole")
      if(result.get("UserRole") === "student"){
        return true
      }
      else{
        return false
      }
      }

    export async function isProfessor(email){
        //gets the snapshot of the firestores 'users'
        const doc = firestore.collection('users').doc(email)
        let result = await doc.get("UserRole")
        if(result.get("UserRole") === "professor"){
          return true
        }
        else{
          return false
        }
        }

    export async function isAdmin(email){
        //gets the snapshot of the firestores 'users'
        const doc = firestore.collection('users').doc(email)
        let result = await doc.get("UserRole")
        if(result.get("UserRole") === "admin"){
          return true
        }
        else{
          return false
        }
        
        }

    export async function updateProfile(oldemail, newemail){
        const doc = firestore.collection('users').doc(oldemail)
        const docRef = firestore.collection('users').doc(newemail);
        let result = await doc.get()
            docRef.set(result);
      



    }
    