import React from 'react'
import PersonTracker from "./PersonTracker";
import {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert, Breadcrumb, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route ,Link, NavLink} from "react-router-dom"
import Login from "./Login"
import {getName} from "./firebaseUtils";
import RoutingButton from "./RoutingButtons";
//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button


const Header = (props) => {

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


    return (<div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand onClick={() => {                          //resets when you click the germgang icon
                    reset();
                }}>GermGang</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => {                          //back button for nav bar with on click
                            reset();
                        }}>Reset</Nav.Link>
                        <Nav.Link onClick={() => {                          //back button for nav bar with on click
                            goBack();
                        }}>Back</Nav.Link>
                        <NavDropdown title="Go to" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">Aerobic Gram Positive Rods</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Aerobic Gram Positive Cocci</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Staphylococci ID</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Alpha or Gamma-Hemolytic
                                Streptococci</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Beta-Hemolytic Streptococci</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.1">Gram Negative Rods Non-Stool</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Gram Negative Rods Stool Pathogens</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Escherichia Coli</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">GNR Stool Pathogens Lactose Positive</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">GNR Stool Pathogens Lactose Negative</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Yersinia Pestis</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink to="/login" className="btn btn-primary">Sign in</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )


    //use the getname function here to get a germ object.

}

export default Header