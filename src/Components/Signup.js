import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth} from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { addStudent } from "./CreateUser";
import { setUser } from "./firestoreUtils";

// import App from "../App";

export default function Signup() {
 const firstnameRef = useRef();
 const lastnameRef = useRef();
//  const schoolRef = useRef();
 //const courseRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();  

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      
      await signup(emailRef.current.value, passwordRef.current.value)
      await addStudent(emailRef.current.value, firstnameRef.current.value, lastnameRef.current.value)
      setUser(emailRef.current.value)
      // await addAdmin("bsarraj@ccc.edu")
      // await addProfessor("rahaf.barakat84@ggc.edu")
      history.push("/")
    } catch {
      setError("Failed to sign up");
    }
    
    setLoading(false);
    
    
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {/* {currentUser && currentUser.email} */}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" ref={firstnameRef} required maxLength={30} />
              </Form.Group>
              <Form.Group id="name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" ref={lastnameRef} required maxLength={30}/>
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required maxLength={40}/>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required maxLength={30}/>
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  maxLength={30}
                />

             
              </Form.Group >

              {/* Drop down for roles */}
              {/* <DropdownButton id="dropdown-basic-button" title="Role">
                <Dropdown.Item href="#/action-1">Student</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Professor</Dropdown.Item>
              </DropdownButton>

              <br></br> */}
              <Button 
                disabled={loading}
                className="btn btn-secondary w-100"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
    
  );
}
