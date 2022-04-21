import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import firebase from "firebase"
import Header from "./Header"
import { getUser, getUserInfo, isProfessor } from "./firestoreUtils"
import userEvent from "@testing-library/user-event"

export default function ViewClass() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()



  let user = getUserInfo()
  let currentclass = user.selectedClass
  let className = currentclass.className
  let classCode = currentclass.classCode


  return (
    <>
    <Header></Header>
    <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh", width: "1000px" }}>
          <Card style = {{width: "1500px"}}>

        <Card.Body className="w-100">
          <h2 className="text-center mb-4">View Class</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <h3 className="text-cetner mb-4">{className}</h3>
          <NavLink hidden={currentUser == null} to="./createExperiment" className= "btn btn-primary w-100">CreateExperiment</NavLink>
          
        </Card.Body>
      </Card>
</Container>
          
          <div className="w-100 text-center mt-3">
            <Link to = "/" >Homepage</Link>
          </div>
    </>
  )
}