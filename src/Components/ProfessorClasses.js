import {useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Breadcrumb, Navbar, Nav, NavDropdown, Container, Card, Form} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route ,Link, NavLink} from "react-router-dom"
import {getName} from "./firebaseUtils";
import RoutingButton from "./RoutingButtons";
import PrivateRoute from './PrivateRoute';
import React, { useRef, useState} from "react"
import Header from "./Header";
import {newCode} from './RandomIDCode'
import { createAClass } from "./ProfessorObjects";
import { auth } from "../firebase"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { isStudent } from "./firestoreUtils";
import { firestore } from '../firebase';
import { getUserInfo, setUserClass } from "./firestoreUtils";

//import Header from "./Components/Header";
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button


    
export default function CreateClass(){
  const codeID = newCode()
  const [classTitle,setClassTitle]= useState("")
  const [classCode,setClassCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const db = firestore

  // const cc = db.instance.collection('users').doc(currentUser.email).collection('classes').doc(classCode)
  // const doc = cc.get();

  const [classes,setClasses] = useState ([
    

  ]);
 
  
  useEffect(() => {
    const getClassesFromFirebase = [];
    const classInfo = db
      .collection('users').doc(currentUser.email).collection('classes')
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
      return () => classInfo();
    }, [loading]); // empty dependencies array => useEffect only called once
  //This function checks to see if the user is signed in or if they are a student. if either, redirect to the appropriate page.

  let user = getUserInfo()
    if (user.role === "student" && currentUser != null){
        history.push("/")
    }
    else if(currentUser.email == null){
        history.push("/login")
    };


  let onChange  = (event) =>{
    const newValue = event.target.value
    setClassTitle(newValue);
  }
    async function handleSubmit(e) {
        e.preventDefault()
        if (
          !classTitle
        ) {
          alert("Please fill out class name")
      return
        }

        try {
          let nCObj = {cc: codeID, cn: classTitle};
          let arr = classes.concat(nCObj);
         setClasses(arr);
          
          console.log(classTitle)
          console.log(codeID)
          setError("")
          setLoading(true)
          await createAClass(classTitle, codeID, currentUser.email);
          //history.push("/");
          alert(classTitle + (" created"))
        } 
        catch {
          setError("Failed To Create New Class")
        }
    
        setLoading(true)
      }

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
            <h1 className="text-center mb-4">Create New Class</h1>
            <br/>
              {error && <Alert variant="danger">{error}</Alert>}
              <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           {"Class Title: "}<input id='classTitle'  size="50" placeholder="classTitle" onChange={onChange} maxLength={30}/> 
          </div>
          <br/>

          <div hidden style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          {"Class Code/ID: " + codeID} 
          
          </div>
           <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           <Button disabled={loading} className="btn btn-secondary" type="submit" onClick={handleSubmit}>Submit</Button>
           <br/>
          <Button onClick={handleCancel}>Cancel</Button>
           <br/>
           <br/>
           </div>
           < label>Classes: </label>
           <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <br/>
         
            <br/>
         <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           <br/>
               <table color="blue" border='1'> 
               <thead>
            <tr>
                 <th>Class Name</th>
                 <th>Class Code</th>
                 <th>Action</th>
               </tr>
             </thead>
               <tbody>
               {classes.length > 0 ? (
        classes.map((classess) => <tr> <td>{classess.className}</td><td> {classess.classCode}</td> <td><button onClick={()=>handleView(classess)}>View</button></td></tr>)
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

    //     <div>
    //       <Header> </Header>
    //       <h1 className="text-center mb-4">Create New Class</h1>
    //       <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //       {"Class Title: "}<input id='classTitle'  size="50" placeholder="classTitle" onChange={onChange}/> 
    //      </div>
    //      <br/>

    //      <div hidden style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //        {"Class Code/ID: " + codeID} 
          
    //        </div>
    //        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //       <Button disabled={loading} className="btn btn-secondary" type="submit" onClick={handleSubmit}>Submit</Button>
    //       <br/>
    //       <Button>Cancel</Button>
    //       <br/>
    //       <br/>
    //       </div>
    //       <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //         <br/>
    //       <h1 >Classes</h1>
    //         <br/>
    //       <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //       <br/>
    //           <table color="blue" border='1'> 
    //           <thead>
    //           <tr>
    //             <th>Class Name</th>
    //             <th>Class Code</th>
    //             <th>Action</th>
    //           </tr>
    //         </thead>
    //           <tbody>
              
    //           {
    //             classes.map(cObj =>(<tr ><td>{cObj.cn}</td><td>{cObj.cc}</td><td><button>View</button></td> </tr>
    //             )
    //             )}
    //             </tbody>
    //           </table>
    //       </div>
    //         </div>
    //     </div>
        
        
    // )
              }