import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


import reportWebVitals from './reportWebVitals';
import AddForm from "./Components/AddForm";
import UpdateForm from "./Components/UpdateForm";
import DeleteForm from "./Components/DeleteForm";


ReactDOM.render(

    //<App />
    //< AddForm/>
    //<UpdateForm/>
    <DeleteForm/>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
window.React1 = require('react');
