
import { firestore } from '../firebase';
import { doc, setDoc } from "firebase/firestore/lite"; 
        //call the firestore database
        const db = firestore
        /*
        this function creates a new doc reference for the email, then "sets" the information needed.
        */
        export function addUser(email, role){
            const docRef = db.collection('users').doc(email);
    
            docRef.set({
            UserRole: role,
            UserEmail: email
            });
        }
        
       export function addProfessor(email){
        const docRef = db.collection('users').doc("roles").collection("professors").doc(email);

        docRef.set({
        UserRole: "Professor",
        UserEmail: email
        });
    }

        export function addStudent(email, firstName, lastName){
            const docRef = db.collection('users').doc("roles").collection("students").doc(email);

            docRef.set({
            first: 'Test',
            last: 'Test',
            UserRole: "student",
            UserEmail: email
            });
        }

        export function addAdmin(email, firstName, lastName){
            const docRef = db.collection('users').doc("roles").collection("admins").doc(email);

            docRef.set({
            UserRole: "admin",
            UserEmail: email
            });
        }

    