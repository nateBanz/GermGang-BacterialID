import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Header";


export default function ProfessorSignUp(){
    const text = useState("Email:")
  const text1 = useState("Password:")
  const text2 = useState("Experiment Code/ ID:")
  const [email,setEmail]= useState("")
  const [password,setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  let onChange  = (event) =>{
    const newValue = event.target.value
    setEmail(newValue);
  }
  let onChange2  = (event) =>{
    const newValue = event.target.value
    setPassword(newValue);
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
      setError("Failed To Sign Up Professor")
    }

    setLoading(false)
  }

return(
    <div >
      <Header> </Header>
     <h1 className="text-center mb-4">Professor Sign Up</h1>
     <div  style={{display: 'flex', justifyContent:'center', alignItems:'right'}}>
      {text}<input  size="50" placeholder="Email" onChange={onChange}/> 
   </div>
   <br/>
      <br/>
      <div  style={{display: 'flex', justifyContent:'center', alignItems:'right'}}>
      {text1}<input  size="46" placeholder="Password" onChange={onChange2}/> 
      </div>
      <br/>
      <br/>
      <div  style={{display: 'flex', justifyContent:'center', alignItems:'right'}}>
      {text2}<input  size="35" placeholder="Confirm Password" /> 
      </div>
      <br/>
      <Button disabled={loading} className="btn btn-secondary w-100" type="submit" onSubmit={handleSubmit}>Submit</Button>
      </div>
      )
}