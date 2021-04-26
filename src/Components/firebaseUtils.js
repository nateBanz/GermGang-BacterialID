import * as React from "react";
import firebase from "firebase";

async function getName(nameOfGerm) {
  console.log("log this", nameOfGerm);
  //find reference to the part of database containing germs
  let con = firebase.database().ref("germs");
  console.log("con was recieved");
  //takes a slice of this data based upon the parameters (name) and only the first one
  let snap = await con
    .orderByChild("name")
    .limitToFirst(1)
    .equalTo(nameOfGerm)
    .once("value")
    .then((res) => res);

  //takes the value of that slice and return it
  let germ = snap.val();

  let index = Object.keys(germ)[0];

  let finalGerm = germ[index];
  //   console.log(finalGerm);

  return finalGerm;
}
export { getName };
