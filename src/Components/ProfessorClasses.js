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
import { createAClass } from "./professorObjects";
import { auth } from "../firebase"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

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
  const form = document.querySelector('form');
  function onAddClass(e){
    e.preventDefault();
    alert("thisword");
  }
  

  let onChange  = (event) =>{
    const newValue = event.target.value
    setClassTitle(newValue);
  }
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          console.log(classTitle)
          console.log(codeID)
          setError("")
          setLoading(true)
          await createAClass(classTitle, codeID);
          const classTitleSet = document.getElementById("classTitle").value;
          const classCodeSet = document.getElementById("classCode").value;
          history.push("/");
        } 
        catch {
          setError("Failed To Create New Class")
        }
    
        setLoading(false)
      }
      return(       
        <div>
          <Header> </Header>
          <form>
          <h1 className="text-center mb-4">Create New Class</h1>
         <div  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          {"Class Title: "}<input id='classTitle'  size="50" placeholder="classTitle" onChange={onChange}/> 
         </div>
          <br/>
          <br/> 
          <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           </div>
           <div hidden style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
           <input>{"Class Code/ID: " + codeID} </input>
           <br/>
           <br/>
           </div>
          <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <Button disabled={loading} className="btn btn-secondary" type="submit" onClick={handleSubmit}>Submit</Button>
          <br/>
          <Button>Cancel</Button>
          <br/>
          <br/>
          </div>
          </form> 
          <div style={{display: 'flex', justifyContent:'center', alignItems:'center', color:'gray'}}>
          <table width='600' border='1px'>
      <thead>
        <tr>
          <th>Class Name</th>
          <th>Class Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    </div>
        </div>
        
    )}