
import {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Breadcrumb, Navbar, Nav, NavDropdown, Container, Card, Form, ScrollView} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route ,Link, NavLink} from "react-router-dom"
import {getName} from "./firebaseUtils";
import RoutingButton from "./RoutingButtons";
import PrivateRoute from './PrivateRoute';
import React, { useRef, useState} from "react"
import Header from "./Header";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
//import Header from "./Components/Header";//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button



    
export default function CreateExperiment(){
  const text = useState("Experiment Title")
  const text2 = useState("Experiment Code/ ID")
  const [experimentTitle,setExperimentTitle]= useState("")
  const [experimentCode,setExperimentCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  let onChange  = (event) =>{
    const newValue = event.target.value
    setExperimentTitle(newValue);
  }
  let onChange2  = (event) =>{
    const newValue = event.target.value
    setExperimentCode(newValue);
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
          <h1 className="text-center mb-4">Create New Experiment</h1>
          <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           {text}<input  size="50" placeholder="Experiment Title..." onChange={onChange}/> 
        </div>
        <br/>
           <br/>
           <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            {text2}
            <input  placeholder="Experiment Code/ ID ...." onChange={onChange2}/> <br/>
            </div>
            <div className = 'App'>
            <p>Start Date: </p>
                <DatePicker selected={startDate} onChange3={date => setStartDate(date)}/>
                </div>
                <div className = 'App'>
            <p>End Date: </p>
                <DatePicker selected={startDate} onChange3={date => setEndDate(date)}/>
                </div>
                <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Experiment Details/ Instructions </Form.Label>
  <Form.Control as="textarea" rows="3" />
</Form.Group>
                <div>
           <Button disabled={loading} className="btn btn-secondary w-100" type="submit" onSubmit={handleSubmit}>Submit</Button>
           <Button className="btn btn-secondary w-100">Cancel</Button>
           </div>

  



         </div>
       )



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
    
    

                    