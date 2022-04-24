import {useContext} from "react";
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
import { getUserInfo, isStudent, setUserClass } from "./firestoreUtils";


//import Header from "./Components/Header";
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button


    
export default function CreateClass(){
  const codeID = newCode()
  const [classTitle,setClassTitle]= useState("")
  const [classCode,setClassCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [classes,setClasses] = useState([]);
  let cObj = {}
 
  //This function checks to see if the user is signed in or if they are a student. if either, redirect to the appropriate page.
  checkUser()
  async function checkUser(){
    let allow = await isStudent(currentUser.email)
    
    if (allow){
  history.push("/StudentDashboard")
  }
  else if(currentUser.email == null){
      history.push("/login")
  }
  }

  let onChange  = (event) =>{
    const newValue = event.target.value
    setClassTitle(newValue);
  }

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
          let nCObj = {className: classTitle, classCode: codeID, professor: currentUser.email}; //nCObj stands for "New Class Object"
          let arr = classes.concat(nCObj);
          setClasses(arr);
          console.log(classTitle)
          console.log(codeID)
          setError("")
          setLoading(true)
          await createAClass(classTitle, codeID, currentUser.email);
          //alert("Class created.")
          //history.push("/");
        } 
        catch {
          setError("Failed To Create New Class")
        }
        setLoading(false)
      }

      function handleCancel(){
        alert("cancelled")
      }

      function handleView(cObj){
        setUserClass(cObj)
        history.push("/ViewClass")
      }


      return(    <>
        <Header></Header>
        
      <br />
      <Container className="d-flex align-items-center justify-content-center"
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
               {
                classes.map(cObj =>(<tr><td>{cObj.className}</td><td>{cObj.classCode}</td><td><Button onClick={() => handleView(cObj)}>View</Button></td></tr>))
                }
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