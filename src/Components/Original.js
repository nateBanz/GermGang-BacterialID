import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { getAuth, createUserWithEmailAndPassword} from "firebase-auth"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const auth = getAuth();

  async function handleSubmit(e) {
    e.preventDefault()
    
    try {

      setError("")
      setLoading(true)
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      setError("Account Created")
    } catch {
      setError("Failed to Sign up")
    }

    setLoading(false)
  } 

  return (
      <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="btn btn-secondary w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to = "/ForgotPassword" >Need Account?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        This feature is for admins only
      </div>
        </div>
      </Container>
  );
  }
