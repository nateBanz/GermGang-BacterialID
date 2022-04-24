import {useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Container, Card, Form} from 'react-bootstrap';
import React, { useRef, useState} from "react"
import Header from "./Header";
import {newCode} from './RandomIDCode'
import { createAClass } from "./ProfessorObjects";
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { firestore } from '../firebase';
import { getUserInfo, setUserClass } from "./firestoreUtils";

//import Header from "./Components/Header";
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button


    
export default function ViewClass(){
  const codeID = newCode()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const db = firestore
  const [classes,setClasses] = useState ([
  ]);
  let user = getUserInfo()
  let selectedclass = user.selectedClass
  let classTitle = selectedclass.className
  let classCode = selectedclass.classCode
  
  useEffect(() => {
    const getClassesFromFirebase = [];
    const classInfo = db
      .collection('users').doc(currentUser.email).collection('classes').doc(classCode).collection("experiments")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getClassesFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.data().codeID,
            // `id` given to us by Firebase
          });
        });
        setClasses(getClassesFromFirebase);
        setLoading(false);
      });
      console.log(getClassesFromFirebase.length)
      return () => classInfo();
    }, [loading]); // empty dependencies array => useEffect only called once
  //This function checks to see if the user is signed in or if they are a student. if either, redirect to the appropriate page.

    if (user.role === "student" && currentUser != null){
        history.push("/")
    }
    else if(currentUser.email == null){
        history.push("/login")
    };


  
      function handleView(cObj){
        setUserClass(cObj)
        history.push("/ViewClass")
      }

      function handleCancel(){
        history.goBack()
      }
      return(    <>
        <Header></Header>
        
      <br /><Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh", width: "1000px" }}>
        
          <Card style = {{width: "1000px"}}>
            <Card.Body>
            <h1 className="text-center mb-4">View Class</h1>
            <br/>
              {error && <Alert variant="danger">{error}</Alert>}
              <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
         
          </div>
          <br/>
           < label>Classes: </label>
           <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <br/>
         
            <br/>
         <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           <br/>
               <table color="blue" border='1'> 
               <thead>
            <tr>
                 <th>Experiment Name</th>
                 <th>Start Date</th>
                 <th>End Date</th>
                 <th>Description</th>
               </tr>
             </thead>
               <tbody>
               {classes.length > 0 ? (
        classes.map((classess) => <tr><td>{classess.ExperimentTitle}</td><td>{classess.StartDate}</td><td>{classess.EndDate}</td><td>{classess.Details}</td></tr>)
      ) : (
        <h1>no classes yet :(</h1>
      )}
              
               {/* { 
                classes.map(cObj =>(<tr ><td>{cObj.cn}</td><td>{cObj.cc}</td><td><button>View</button></td> </tr>
                )
                )} */}
                </tbody>
              </table>
          </div>
            </div>
            </Card.Body>
          </Card>
        </Container></>
     )
              }