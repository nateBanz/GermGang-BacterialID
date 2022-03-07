import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
  


export default function CreateExperiment(){
    const text = useState("Email:")
  const text1 = useState("Password:")
  const text2 = useState("Experiment Code/ ID:")

return(
    <div >
      <Header> </Header>
     <h1 className="text-center mb-4">Professor Sign Up</h1>
     <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
      {text}<input  size="50" placeholder="Email" onChange={onChange}/> 
   </div>
   <br/>
      <br/>
      <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
      {text1}<input  size="50" placeholder="Password" onChange={onChange}/> 
      </div>
      <br/>
      <br/>
      <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
      {text2}<input  size="50" placeholder="Confirm Password" onChange={onChange}/> 
      </div>
      <br/>
      <Button disabled={loading} className="btn btn-secondary w-100" type="submit" onSubmit={handleSubmit}>Submit</Button>
      </div>
      )
}