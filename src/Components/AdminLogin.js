import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard.js"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from "../App"
import DeleteForm from "./DeleteForm";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import UpdatePassword from "./UpdatePassword";
import StudentDashboard from "./StudentDashboard";
import ProfessorClasses from "./ProfessorClasses"
import CreateExperiment from "./CreateExperiment"
import ProfessorSignUp from "./ProfessorSignUp"

export default function AdminLogin() {
    
    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
            <div className="w-100">
                <Router>
                    <AuthProvider>
                        <Switch>
                            <Route exact path = "/" component ={App}/>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute path="/update-profile" component={UpdateProfile} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Signup} />
                            <Route path="/forgotpassword" component={ForgotPassword} />
                            <Route path="/updatePassword" component={UpdatePassword} />
                            <Route path="/add-form" component={AddForm} />
                            <Route path="/delete-form" component={DeleteForm} />
                            <Route path="/update-form" component={UpdateForm} />
                            <Route path="/studentdashboard" component={StudentDashboard} />
                            <Route path="/professorClasses" component={ProfessorClasses} />
                            <Route path="/createExperiment" component={CreateExperiment} />
                            <Route path="/professorSignUp" component ={ProfessorSignUp}/>
                            
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>
    )
}
