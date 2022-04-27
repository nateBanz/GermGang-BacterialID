import React, { useState, useEffect } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import firebase from "firebase"
import Header from "./Header"
import { getUser, getUserInfo, isProfessor } from "./firestoreUtils"
import userEvent from "@testing-library/user-event"
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore"
import { firestore } from "../firebase"


export default function ViewExperiments() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const db = firestore
  const mockData = ['a', 'b', 'c']



  let user = getUserInfo()
  let currentclass = user.selectedClass
  let className = currentclass.className
  let classCode = currentclass.classCode


  const viewUsers = (e, i) => {
    console.log('hello')
  }


  return (
    <>
    <Header></Header>
    <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh", width: "1000px" }}>
          <Card style = {{width: "1500px"}}>

        <Card.Body className="w-100">
          <h2 className="text-center mb-4">View Experiments</h2>     
        </Card.Body>
        <Card.Body className="w-100">
          <button onClick={viewUsers}>Hello</button>
        </Card.Body>
      </Card>
</Container>
          
          <div className="w-100 text-center mt-3">
            <Link to = "/" >Homepage</Link>
          </div>
    </>
  )
}