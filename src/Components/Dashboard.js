import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { addProfessor, addAdmin } from "./CreateUser";

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
        if(window.confirm("Do you want to add " + email + " as a professor?")){
          await addProfessor(email);
        }
        
  }

  async function handleSubmit2(){
    console.log(email)
    if(prompt("Do you want to add " + email + " as an Admin? \n This will give them access to editing, deleting, adding the flowchart \n as well as User permissions. \n\n Please re-type the email so we are sure you want to do this.") == email){
        await addAdmin(email);
    }
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
        <label className="w-100">Make professor</label>
        <input onChange={onChange} size = "50"/>
        <button onClick={handleSubmit}>Submit</button>
          
       
      </div>
      
      <div className="w-100 text-center mt-2">
        <label className="w-100"> Make Admin</label>
        <input onChange={onChange} size = "50"/>
        <button onClick={handleSubmit2}>Submit</button>


      </div>

    </>
  )
}