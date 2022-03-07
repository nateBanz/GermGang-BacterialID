//for testing! Connects the app to firebase
import "firebase-auth";
import firebase from "firebase";
//const APIKEY = require("./secert");

firebase.initializeApp({
    apiKey: "AIzaSyApiE--Kil_974EnweIny4y_m9sFmVv8gQ",
    authDomain: "microbemusketeers.firebaseapp.com",
    databaseURL: "https://microbemusketeers-default-rtdb.firebaseio.com",
    projectId: "microbemusketeers",
    storageBucket: "microbemusketeers.appspot.com",
    messagingSenderId: "979790454601",
    appId: "1:979790454601:web:d5355ce80cdb7a03348498",
    //measurementId: "G-8SKCLJXLN3
});

export const auth = firebase.auth();
export default firebase;
