import React, { useState } from "react"
import { Card, Alert, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from "./Header"
import { getUserInfo } from "./firestoreUtils"

export default function StudentDashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  let user = getUserInfo()
  async function handleLogout() {
    setError("")

    try {
      await logout().then(
      history.push("/login"))
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <Header></Header>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Student Dashboard</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br></br>
          <strong className="text-center mb-4">Name:</strong> {user.firstname + " " + user.lastname}
          
          <br/>
          <br/>
          <Button className="btn btn-primary w-100" type="logout" onClick={handleLogout}>
              Log out
            </Button>
        </Card.Body>
        
      </Card>
      <div className="w-100 text-center mt-3">
            <Link to = "/" >Homepage</Link>
          </div>
          
    </>
  )
}
