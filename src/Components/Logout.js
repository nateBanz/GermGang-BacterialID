import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signup from "./Signup"

export default function logout(){
    localStorage.clear();
}