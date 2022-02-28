import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminLogin from "./Components/AdminLogin";
import AddForm from "./Components/AddForm";
import Signup from './Components/Signup';
import Login from './Components/Login';



ReactDOM.render(
  <React.StrictMode>
  <AdminLogin />
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
