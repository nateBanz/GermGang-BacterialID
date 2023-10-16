import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState} from "react"
import Header from "./Header";
import DatePicker from 'react-datepicker';
import {newCode} from "./RandomIDCode";
import 'react-datepicker/dist/react-datepicker.css'
import { createAnExperiment } from "./ProfessorObjects";
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { isStudent, getUserInfo, setUserClass } from './firestoreUtils';
import {Button, Alert, Breadcrumb, Navbar, Nav, NavDropdown, Container, Card, Form} from 'react-bootstrap';
import { firestore } from '../firebase';
import {useContext, useEffect} from "react";

//import Header from "./Components/Header";//you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button



    
export default function CreateExperiment(){
  const text = useState("Experiment Title")
  const text2 = useState("Experiment Code/ ID")
  const expcode= newCode()
  const [experimentTitle,setExperimentTitle]= useState("")
  const [experimentCode,setExperimentCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const history = useHistory()
  let [classExperiment,setClassExperiment]= useState("");
  const [experimentDetails,setExperimentDetails]= useState("");
  const { currentUser, logout } = useAuth()
  const db = firestore
  const [classes,setClasses] = useState ([
  ]);
  const [changeClass, setchangeClass] = useState()
  
  useEffect(() => {
    const getClassesFromFirebase = [];
    const classInfo = db
      .collection('users').doc(currentUser.email).collection('classes')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getClassesFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.data().codeID,
            // `id` given to us by Firebase
          });
        });
        setClasses(getClassesFromFirebase);
        setLoading(false);
      });
      return () => classInfo();
    }, [loading]);

  //This function checks to see if the user is signed in or if they are a student. if either, redirect to the appropriate page.
  let user = getUserInfo()
  let selectedClass = user.selectedClass
  classExperiment = selectedClass.classCode
    if (user.role == "student" && currentUser != null){
        history.push("/")
    }
    else if(currentUser.email == null){
        history.push("/login")
    };
  const divstyle = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center', 
    padding: '10px'

  }

  let onChange  = (event) =>{
    const newValue = event.target.value
    setExperimentTitle(newValue);
  }

 
  let onChange4 = (event) =>{
    const newValue = event.target.value
    setExperimentDetails(newValue);
  }

  function setClass(exp, userclass){
    setClassExperiment(exp)
    setUserClass(userclass)
    user = getUserInfo()

  }
    async function handleSubmit(e) {
        e.preventDefault()
        if (
          !experimentTitle
          ^
          !startDate
          ^
          !endDate
        ) {
          alert("You are missing some information")
      return
        }
        try {
    
          setError("")
          setLoading(true)
          console.log(experimentTitle);
          console.log(experimentDetails);
          console.log(experimentCode);
          console.log(startDate);
          console.log(endDate);
          console.log(classExperiment);
          
         await createAnExperiment(experimentTitle, startDate.toLocaleDateString(), endDate.toLocaleDateString(), experimentDetails, currentUser.email, expcode, selectedClass.classCode) 
         alert("Created Experiment")
            
        history.goBack()
        } 
        catch {
          setError("Failed To Create New Class")
        }
    
        setLoading(false)
      }

      function handleCancel(){
        history.goBack()
      }

      function handleChange(){
        if(changeClass){
          setchangeClass(false)
        }
        else{
          return setchangeClass(true)
        }
      }




       return(
        <>
        <Header></Header>
        
      <br /><Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh", width: "1000px" }}>
        
          <Card style = {{width: "1000px"}}>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            </div>
            <Card.Body>
            <h1 className="text-center mb-4">Create New Experiment</h1>
            <h2 className="text-center mb-4">Class: {classExperiment}</h2>
            <br/>
          <div  style={divstyle}>
           {"Experiment Title:       "}<input wrapperClassname='Textwrap' size="50" placeholder="Experiment Title..." onChange={onChange} maxLength={50} padding-left/> 
           </div>
        <br/>
           <div hidden style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            {"Experiment Code/ID: " + expcode}<br/>
            </div>
            <div  className = 'App'>
            <p>Start Date: </p>
                <DatePicker wrapperClassName='datepicker' border='0' selected={startDate} onChange={date =>setStartDate(date)}/>
            </div>
            <div className = 'App'>
            <p>End Date: </p> 
                <DatePicker selected={endDate} onChange={date => setEndDate(date)}/>
                </div>
        <br/>
        <Button className="btn btn-secondary w-100" onClick={handleChange}>Change Class?</Button>
        <div className='' hidden={changeClass}>
        
        <h1> List of Current Classes</h1>
      
       <div > 
         Select a Class
         <br/>
       {classes.length > 0 ? (
       classes.map((classess) =>  <React.Fragment>
      
       <input onChange={e => setClass(e.target.value, classess)} value={classess.classCode} selected={classExperiment} name="classExperiment" key={classess.className} id={classess.id} type="radio" /> {classess.className} <br/>
   </React.Fragment> ) 
     ) : (
       <h1></h1>
     )}
     </div>
      </div>
      
                <Form.Group  onChange={onChange4} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Experiment Details/ Instructions </Form.Label>
                <Form.Control  className="textarea w-100"as="textarea" rows="3"maxLength={500}/>
                </Form.Group>
           <div style={divstyle}>
           <Button disabled={loading} className="btn btn-secondary w-50" type="submit" onClick={handleSubmit}>Submit</Button>
           </div>
           <div style={divstyle}>
           <Button className="btn btn-secondary w-50" onClick={handleCancel}>Back</Button>
           </div>
            </Card.Body>
          </Card>
        </Container></>
     )
     
     

    }