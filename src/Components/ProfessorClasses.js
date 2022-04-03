
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
//import Header from "./Components/Header";
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button



    
export default function CreateClass(){
  const codeID = newCode()
  const [classTitle,setClassTitle]= useState("")
  const [classCode,setClassCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  let onChange  = (event) =>{
    const newValue = event.target.value
    setClassTitle(newValue);
  }
  let onChange2  = (event) =>{
    const newValue = event.target.value
    setClassCode(newValue);
  }

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
    
          setError("")
          setLoading(true)
         // await createAClass(classTitle.current.value, classCode.current.value)
        
       // history.push("/dashboard")
        } 
        catch {
          setError("Failed To Create New Class")
        }
    
        setLoading(false)
      }
      return(
        <div >
          <Header> </Header>
          <Card>
            <Card.Body>
       
          <h1 className="text-center mb-4">Create New Class</h1>
         <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          {"Class Title: "}<input  size="50" placeholder="classTitle" onChange={onChange}/> 
         </div>
          <br/>
          <br/> 
          <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           </div>
           <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           {"Class Code/ID: " + codeID}
           <br/>
           <br/>
           </div>
          <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <Button disabled={loading} className="btn btn-secondary" type="submit" onSubmit={handleSubmit}>Submit</Button>
          <br/>
          <Button>Cancel</Button>
          <br/>
          <br/>
          </div>
          </Card.Body>
          </Card>
        </div>
        
    )

     
    // return (
      
    //  <Container  className="d-flex align-items-center justify-content-center"
    //  style={{ minHeight: "100vh" }}>
     
    //         <Card>
    //             <Card.Body>
    //             {error && <Alert variant="danger">{error}</Alert>}
    //       <Form onSubmit={handleSubmit}>
    //         <h2>Create New Class</h2>
    //         <Form.Group >
    //           <Form.Label>Class Title</Form.Label>
    //           <Form.Control type="input" onChange={onChange} required />
    //         </Form.Group>
    //         <Form.Group >
    //           <Form.Label ref={classCode}>Class Code/ID</Form.Label>
    //           <Form.Control type="input" required />
    //           <h1>Give this code to Students you want to join this Class</h1>
    //         </Form.Group>
    //         <Button className="btn btn-secondary w-100" type="submit">
    //           Submit
    //         </Button>
    //         <Button >
    //           Cancel
    //         </Button>
    //         </Form>
    //         </Card.Body>
    //         </Card>

        
         
    //     </Container>
    // )

    }
    //use the getname function here to get a germ object.


                    