import React, { useState } from 'react'
import PersonTracker from "./PersonTracker";
import {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Breadcrumb, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route ,Link, NavLink, useHistory} from "react-router-dom"
import Login from "./Login"
import {getName} from "./firebaseUtils";
import RoutingButton from "./RoutingButtons";
import StudentDashboard from './StudentDashboard';
import PrivateRoute from './PrivateRoute';
import Logout from "./Logout"
import { useAuth } from "../contexts/AuthContext"
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button


const Header = (props) => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    let user = JSON.parse(localStorage.getItem('currentUser'))
    

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }
    


    //button/node objects from the context that are being updated
    const {buttonNameArray, updateArray} = useContext(PersonTracker)  //this is the information needed. The array of buttons names and the update array function

    function goBack() {

        if (buttonNameArray.length > 1) {

            //create a copy
            let newArray = [...buttonNameArray]

            //remove the last thing from the copy
            newArray.pop()

            //update the global array with the copy
            updateArray(newArray)

            //test to make sure it fires
            console.log("sliced")
        }

    }



  /*  function LoggedStatus(props){
        const auth = 
        if (isLoggedIn) {
          return
          <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand onClick={() => {                          //resets when you click the germgang icon
                  reset();
              }}>Germgang</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link onClick={() => {                          //back button for nav bar with on click
                          reset();
                      }}>Reset</Nav.Link>
                      <Nav.Link onClick={() => {                          //back button for nav bar with on click
                          goBack();
                      }}>Back</Nav.Link>
                  </Nav>
                  <Nav>
                      <NavLink to="./StudentDashboard" className= "btn btn-primary">Dashboard</NavLink>
                  </Nav>
                  <Nav>
                      <NavLink to="./login" className="btn btn-secondary">Sign up</NavLink>
                  </Nav>
                  
              </Navbar.Collapse>
          </Navbar>
      </div>;

        }
      return

      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand onClick={() => {                          //resets when you click the germgang icon
              reset();
          }}>Germgang</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link onClick={() => {                          //back button for nav bar with on click
                      reset();
                  }}>Reset</Nav.Link>
                  <Nav.Link onClick={() => {                          //back button for nav bar with on click
                      goBack();
                  }}>Back</Nav.Link>
              </Nav>
              <Nav>
                  <NavLink to="./login" className="btn btn-secondary">Sign up</NavLink>
              </Nav>
              
          </Navbar.Collapse>
      </Navbar>
  </div>;
      }
      ReactDOM.render(
        <LoggedStatus isLoggedIn={false} />,
        document.getElementById('root')
      )
    }
*/

    function reset() {

        if (buttonNameArray.length > 1) {

            //create a copy
            let newArray = [...buttonNameArray]

            //remove the last thing from the copy
            newArray.splice(1)

            //update the global array with the copy
            updateArray(newArray)

            //test to make sure it fires
            console.log("sliced and reset")
        }
    }


    return (
       
    <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand onClick={() => {                          //resets when you click the germgang icon
                    reset();
                }}>Germgang</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => {                          //back button for nav bar with on click
                            reset();
                        }}>Reset</Nav.Link>
                        <Nav.Link onClick={() => {                          //back button for nav bar with on click
                            goBack();
                        }}>Back</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavLink hidden={currentUser == null} to="./StudentDashboard" className= "btn btn-primary">Dashboard</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink hidden={currentUser} to="./login" className="btn btn-secondary">Sign In</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink hidden={currentUser == null} to="./Logout" className="btn btn-secondary" onClick={handleLogout}>Log Out</NavLink>  
                    </Nav>
                    <Nav>
                        <NavLink hidden={currentUser == null} to="./professorClasses" className= "btn btn-primary">ProfessorClasses</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink hidden={currentUser == null} to="./createExperiment" className= "btn btn-primary">CreateExperiment</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )

    


    //use the getname function here to get a germ object.


                    }
export default Header