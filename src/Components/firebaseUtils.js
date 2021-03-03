import * as React from "react";
import firebase from "firebase";

async function getName(nameOfGerm) {

    //find reference to the part of database containing germs
    let con = firebase.database().ref("germs");

    //takes a slice of this data based upon the parameters (name) and only the first one
    let snap = await con.orderByChild("name").limitToFirst(1).equalTo(nameOfGerm).once('value');

    //takes the value of that slice and return it
    let germ = snap.val();
    return germ;

}
export {getName}