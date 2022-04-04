import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { addProfessor } from "./CreateUser";
import Header from "./Header";


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [email, setEmail]= useState("");
  let onChange  = (event) =>{
    const newValue = event.target.value
    setEmail(newValue);
  }
    if (currentUser.email !== "bsarraj@ccc.edu" && currentUser != null){
        history.push("/StudentDashboard")
    }
    else if(currentUser.email == null){
        history.push("/login")
    };

  // async function handleLogout() {
  //   setError("")

  //   try {
  //     await logout()
  //     history.push("/login")
  //   } catch {
  //     setError("Failed to log out")
  //   }
  // }
  async function handleSubmit(){
    console.log(email)
        await addProfessor(email);
  }

  return (
    <>
      <Card>
        <Header>
          
        </Header>
        <Card.Body>
          <h2 className="text-center mb-4">Admin Controls</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Nav>
            <NavLink hidden={currentUser.email == null} to="/update-profile" className="btn btn-secondary w-100 mt-3">
            Update Profile
            </NavLink>  
            <NavLink hidden={currentUser.email !== "bsarraj@ccc.edu"} to="/add-form" className="btn btn-secondary w-100 mt-3">
            Add Form
            </NavLink>  
            <NavLink hidden={currentUser.email !== "bsarraj@ccc.edu"} to="/update-form" className="btn btn-secondary w-100 mt-3">
            Update Form
            </NavLink>  
            <NavLink hidden={currentUser.email !== "bsarraj@ccc.edu"} to="/delete-form" className="btn btn-secondary w-100 mt-3">
            Delete Form
            </NavLink>  
          </Nav>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <input onChange={onChange} size = "50"/>
        <button onClick={handleSubmit}>Make Professor</button>
      
          
       
      </div>
    </>
  )
}