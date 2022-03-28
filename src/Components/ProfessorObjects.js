import { firestore } from '../firebase'; 
        //call the firestore database
        const db = firestore
        /*
        this function creates a new doc reference for the email, then "sets" the information needed.
        */
        export function createAClass(className, classCode,email){
            const docRef = db.collection('classes').doc(classCode);
    
            docRef.set({
            AssociatedProfessor: email, 
            className: className,
            classCode: classCode
            });
        }