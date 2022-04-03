
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
import { useHistory } from "react-router-dom";
import { isProfessor, writeClass, isStudent } from "./firestoreUtils";
import { useAuth } from "../contexts/AuthContext";
//import Header from "./Components/Header";
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button





export default function CreateClass(){
  const {currentUser} = useAuth()
  const history = useHistory()
  const codeID = newCode()
  const classTitle = useRef();
  const [classCode,setClassCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
    
    
  
  //This function checks to see if the user is signed in or if they are a student. if either, redirect to the appropriate page.
    checkUser()
    async function checkUser(){
      
      if (await isStudent(currentUser.email)){
    history.push("/StudentDashboard")
    }
    else if(currentUser.email == null){
        history.push("/login")
    }
    }

    //function that handles the cancel button
    async function handleCancel(){
      history.push("/")
    }

    //function that handles the submit button. calls the writeClass function to create a class in the professors file.
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
    
          setError("")
          setLoading(true)
          if (!(await isStudent(currentUser.email))){
          await writeClass(classTitle.current.value, currentUser.email, codeID);
          }
        
          history.push("/")
        } 
        catch {
          setError("Failed To Create New Class:" + classTitle.current.value + " " + currentUser.email + " " + codeID)
        }
    
        setLoading(false)
      }
    //   return(
    //     <div >
    //       <Header> </Header>
    //       <Card>
    //         <Card.Body>
       
    //       <h1 className="text-center mb-4">Create New Class</h1>
    //      <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //       {"Class Title: "}<input  size="50" placeholder="classTitle"/> 
    //      </div>
    //       <br/>
    //       <br/> 
    //       <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //        </div>
    //        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //        {"Class Code/ID: " + codeID}
    //        <br/>
    //        <br/>
    //        </div>
    //       <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //       <Button disabled={loading} className="btn btn-secondary" type="submit" onSubmit={handleSubmit}>Submit</Button>
    //       <br/>
    //       <Button>Cancel</Button>
    //       <br/>
    //       <br/>
    //       </div>
    //       </Card.Body>
    //       </Card>
    //     </div>
        
    // )

     
    return (
      <>
        <Header></Header>
        
      <br /><Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh", width: "1000px" }}>

          <Card style = {{width: "1000px"}}>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <h2>Create New Class</h2>
                <Form.Group>
                  <Form.Label>Class Title:</Form.Label>
                  <Form.Control type="text" ref={classTitle} required maxLength={"50"} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Class code: {codeID}</Form.Label>
                  <br />
                  <Form.Label>(Give this code to Students you want to join this Class)</Form.Label>
                </Form.Group>
                <Button className="btn btn-secondary w-100" type="submit">
                  Submit
                </Button>
                <br/>
                <Button className="btn btn-secondary w-100" type="cancel" onClickCapture={handleCancel}>
                 Cancel
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container></>
     )

    }
    //use the getname function here to get a germ object.


                    