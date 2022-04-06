
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState} from "react"
import Header from "./Header";
import DatePicker from 'react-datepicker';
import {newCode} from "./RandomIDCode";
import 'react-datepicker/dist/react-datepicker.css'
import { createAnExperiment } from "./ProfessorObjects";
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { isStudent } from './firestoreUtils';
import {Button, Alert, Breadcrumb, Navbar, Nav, NavDropdown, Container, Card, Form} from 'react-bootstrap';


//import Header from "./Components/Header";//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button



    
export default function CreateExperiment(){
  const text = useState("Experiment Title")
  const text2 = useState("Experiment Code/ ID")
  const expcode= newCode()
  const [experimentTitle,setExperimentTitle]= useState("")
  const [experimentCode,setExperimentCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const history = useHistory()
 

  const [experimentDetails,setExperimentDetails]= useState("");
  const { currentUser, logout } = useAuth()
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
  const divstyle = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center', 
    padding: '10px'

  }

  let onChange  = (event) =>{
    const newValue = event.target.value
    setExperimentTitle(newValue);
  }

 
  let onChange4 = (event) =>{
    const newValue = event.target.value
    setExperimentDetails(newValue);
  }

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
    
          setError("")
          setLoading(true)
          console.log(experimentTitle);
          console.log(experimentDetails);
          console.log(experimentCode);
          console.log(startDate);
          console.log(endDate)
         await createAnExperiment(experimentTitle, startDate, endDate, experimentDetails, currentUser.email, expcode)        
       // history.push("/dashboard")
        } 
        catch {
          setError("Failed To Create New Class")
        }
    
        setLoading(false)
      }
       return(
        <>
        <Header></Header>
        
      <br /><Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh", width: "1000px" }}>
        
          <Card style = {{width: "1000px"}}>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            </div>
            <Card.Body>
            <h1 className="text-center mb-4">Create New Experiment</h1>
            <br/>
          <div  style={divstyle}>
           {"Experiment Title:       "}<input wrapperClassname='Textwrap' size="50" placeholder="Experiment Title..." onChange={onChange} padding-left/> 
           </div>
        <br/>
           <div hidden style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            {"Experiment Code/ID: " + expcode}<br/>
            </div>
            <div  className = 'App'>
            <p>Start Date: </p>
                <DatePicker wrapperClassName='datepicker' border='0' selected={startDate} onChange={date =>setStartDate(date)}/>
            </div>
            <div className = 'App'>
            <p>End Date: </p> 
                <DatePicker selected={endDate} onChange={date => setEndDate(date)}/>
                </div>
        <br/>
                <Form.Group  onChange={onChange4} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Experiment Details/ Instructions </Form.Label>
                <Form.Control  className="textarea w-100"as="textarea" rows="3"/>
                </Form.Group>
           <div style={divstyle}>
           <Button disabled={loading} className="btn btn-secondary w-50" type="submit" onClick={handleSubmit}>Submit</Button>
           </div>
           <div style={divstyle}>
           <Button className="btn btn-secondary w-50">Cancel</Button>
           </div>
            </Card.Body>
          </Card>
        </Container></>
     )
      //    <div>
      //      <Header> </Header>
      //      <Card>
      //        <Card.Body>
        //   <h1 className="text-center mb-4">Create New Experiment</h1>
        //   <div  style={divstyle}>
        //    {"Experiment Title:       "}<input wrapperClassname='Textwrap' size="50" placeholder="Experiment Title..." onChange={onChange} padding-left/> 
        //    </div>
        // <br/>
        //    <div hidden style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        //     {"Experiment Code/ID: " + expcode}<br/>
        //     </div>
        //     <div  className = 'App'>
        //     <p>Start Date: </p>
        //         <DatePicker wrapperClassName='datepicker' border='0' selected={startDate} onChange={date =>setStartDate(date)}/>
        //     </div>
        //     <div className = 'App'>
        //     <p>End Date: </p> 
        //         <DatePicker selected={endDate} onChange={date => setEndDate(date)}/>
        //         </div>
        // <br/>
        //         <Form.Group  onChange={onChange4} controlId="exampleForm.ControlTextarea1">
        //         <Form.Label>Experiment Details/ Instructions </Form.Label>
        //         <Form.Control  className="textarea w-100"as="textarea" rows="3"/>
        //         </Form.Group>
        //    <div style={divstyle}>
        //    <Button disabled={loading} className="btn btn-secondary w-50" type="submit" onClick={handleSubmit}>Submit</Button>
        //    </div>
        //    <div style={divstyle}>
        //    <Button className="btn btn-secondary w-50">Cancel</Button>
        //    </div>
      //      </Card.Body>
      //     </Card>
      //     </div>
      //  )



    //  return(
    //      <div >
    //        <Header> </Header>
    //        <h1 className="text-center mb-4">Create New Class</h1>
    //       <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //       {text}<input  size="50" placeholder="classTitle" onChange={onChange}/> 
    //        </div>
    //        <br/>
    //      <br/> 
    //        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //        {text2}  
    //         </div>
    //         <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    //         <input placeholder="class ID" onChange={onChange2}/> <br/>
    //         </div>
    //         <br/>
    //        <div>
    //        <Button disabled={loading} className="btn btn-secondary w-100" type="submit" onSubmit={handleSubmit}>Submit</Button>
    //        <Button className="btn btn-secondary w-100">Cancel</Button>
    //        </div>
    //      </div>
    //    )
     

    }
    
    

                    