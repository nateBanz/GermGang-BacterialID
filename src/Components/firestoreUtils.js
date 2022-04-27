import { firestore } from "../firebase";
import CreateUser from "./CreateUser";


  

  export async function setUser(email){
    let fname = ""
    let lname = ""
    let userrole = "student"
    let userclass = {
      className: "",
      classCode: "",
      professor: ""
    }
// call the document of the user
    const doc = firestore.collection('users').doc(email)
        let result = await doc.get(email)
        //pull necessary information
        fname = result.get("first")
        lname = result.get("last")
        let useremail = result.get("UserEmail")
        userrole = result.get("UserRole")

        //user object
        const user = {
          firstname: fname,
          lastname: lname,
          email: useremail,
          role: userrole,
          selectedClass: userclass
          }
       // alert("Given email: " + email + "\nfname: " + fname + "\n lname: " + lname + "\n useremail: " + useremail + " \n userrole: " + userrole)
  
  window.sessionStorage.setItem("user", JSON.stringify(user))
  //alert(localStorage.getItem("user"))
  return user;

}
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
    //creates a reference to the provided professors class experiment list.
    // essentially in the firestore:  users -> professor@email.com -> classes -> Class(using ID) -> experiments
      const docRef = firestore.collection('users').doc(email).collection('classes').doc().where("ClassID", "==", classID).collection('experiments').doc(expTitle)


      let newClass = {
        ExperimentTitle: expTitle,
        professor: email,
        ExperimentID: uuid
      }

      docRef.set({
      ExperimentTitle: expTitle,
      professor: email,
      ExperimentID: uuid
      });
      return newClass
    }


    export function getUserInfo(){
      let result = window.sessionStorage.getItem("user") // pull signed in user from session storage.
      let user = JSON.parse(result)
      return user;
    }

    export function setUserClass(userclass){
     let user = getUserInfo()
     //alert("Set user's selected class as: " + user.email)
     user.selectedClass = userclass
     //alert(user.selectedClass.className)
     window.sessionStorage.setItem("user", JSON.stringify(user))
    }

    export async function getUserClass(){
      let user = getUserInfo()
      return user.selectedClass;
     }

    export async function isStudent(email){
      //gets the snapshot of the firestores 'users'
      const db = firestore;
      const doc = db.collection('users').doc(email);
      let result = await doc.get()
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
        if(result.get("UserRole") === "Professor"){
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
    