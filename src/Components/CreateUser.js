
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { firestore } from '../firebase';
//import { doc, setDoc } from "firebase/firestore/lite"; 


    export default function CreateUser(){
        const currentUser = useAuth()
        const history = useHistory();
        addStudent()
        history.push("/")
    }
        //call the firestore database
        const db = firestore
        
        /*
        this function creates a new doc reference for the email provided and sets the information in the doc to include the pertinent information
        */
        export function addUser(email, role){
            const docRef = db.collection('users').doc(email);
    
            docRef.set({
            UserRole: role,
            UserEmail: email
            });
        }
        
        /*
        This function creates a "professor" collection in the "users" collection.
        Isn't necessary if all the users are going to be in the same firebase doc.
        */
       export function addProfessor(email){
        const docRef = db.collection('users').doc("roles").collection("professors").doc(email);

        docRef.set({
        UserRole: "Professor",
        UserEmail: email
        });
    }


        /*
        This function creates a "student" collection in the "users" collection.
        Isn't necessary if all the users are goign to be in the same firebase doc.
        */
        export function addStudent(email, firstName, lastName){
            const docRef = db.collection('users').doc("roles").collection("student").doc(email);
            docRef.set({
            first: firstName,
            last: lastName,
            UserRole: "student",
            UserEmail: email,
            });
        }

        /*
        This funciton creates a "student collection in the "users" collection.
        Isn't necessary if all the users are going to be in the same firebase doc.
        */
        export function addAdmin(email){
            const docRef = db.collection('users').doc("roles").collection("admins").doc(email);

            docRef.set({
            UserRole: "admin",
            UserEmail: email
            });
        }

    