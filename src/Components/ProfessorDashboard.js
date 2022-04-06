import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { BrowserRouter as Router, Route} from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import { Container } from "react-bootstrap"
import Login from "./Login"
import firebase from "firebase"


const db = firebase.firestore()

const makeAdmin = () => {
  console.log("#professor-email" + "is a professor")
}

export default function ProfessorDashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  

  return (
    <>
      <Card>

        <Card.Body>
          <h2 className="text-center mb-4">Professor Dashboard</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br></br>
          <strong>Name:</strong> {currentUser.name}

          <Link to="/update-profile" className="btn btn-secondary w-100 mt-3">
            Update Profile
          </Link>

        </Card.Body>
      </Card>

      {/* <div className="w-100 text-center mt-3">
      <input type="email" placeholder="User email" id="professor-email" size = "50" required />
    <button type="button" onClick={makeAdmin}>Make Professor</button>
      </div> */}

      
      <div className="w-100 text-center mt-3">
            <Link to = "/" >Homepage</Link>
          </div>
    </>
  )
}
