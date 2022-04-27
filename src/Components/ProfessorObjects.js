import { firestore } from '../firebase'; 
import RandomExperimentCode from './RandomIDCode';


        //call the firestore database
        const db = firestore
        

        /*
        this function creates a new doc reference for the email, then "sets" the information needed.
        */
        export function createAClass(className, classCode,email){
            const docRef = db.collection('users').doc(email).collection('classes').doc(classCode);
    
            let newClass= {
                className: className,
            classCode: classCode
            }
            docRef.set({
            className: className,
            classCode: classCode,
            professor: email
            });
            return newClass;
        }

        export function createAnExperiment(title, startDate, endDate, Details, email, expcode, clscode){
           
            console.log("createExperiment cls: " + clscode)
            console.log("createExperiment exp:" + expcode)
            const docRef = db.collection('users').doc(email).collection("classes").doc(clscode).collection('experiments').doc(expcode);
              
            docRef.set({
            ExperimentTitle: title,
            StartDate: startDate,
            EndDate: endDate,
            Details: Details
            });
        }
