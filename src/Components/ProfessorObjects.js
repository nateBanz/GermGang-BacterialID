import { firestore } from '../firebase'; 


        //call the firestore database
        const db = firestore
        

        /*
        this function creates a new doc reference for the email, then "sets" the information needed.
        */
        export function createAClass(className, classCode,uid){
            const docRef = db.collection('users').doc(uid).collection('classes').doc(classCode);
    
            docRef.set({
            className: className,
            classCode: classCode
            });
        }

        export function createAnExperiment(title, startDate, endDate, Details, uid){
           
            const docRef = db.collection('users').doc(uid).collection('experiments');
              
            docRef.set({
            ExperimentTitle: title,
            StartDate: startDate,
            EndDate: endDate,
            Details: Details
            });
        }
