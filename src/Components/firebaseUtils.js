import * as React from "react";
import firebase from "firebase";

async function getName(nameOfGerm) {

    //find reference to the part of database containing germs
    let con = firebase.database().ref("germs");

    //takes a slice of this data based upon the parameters (name) and only the first one
    let snap = await con.orderByChild("name").limitToFirst(1).equalTo(nameOfGerm).once('value');

    //takes the value of that slice and return it
    let germ = snap.val();

    if(germ) {

        let index = Object.keys(germ)[0]

        let finalGerm = germ[index]

        return finalGerm;

        }
    else {
        return "Nothing here"
    }

}

async function Update(name = '', newName= '', newImage = '' ,toggle = '') {
    //given image
    //Something to report if a piece of info doesnt exist

    let con = firebase.database().ref("germs");

    if(toggle) {

        con.orderByChild("name").startAt(name).endAt(name + '~').on('value', function (snapshot) {

            snapshot.forEach(function (childSnap) {
                childSnap.child("name").ref.set(newName)
            })


        })

        con.orderByChild("name").once("value").then( function (snapshot) {
            snapshot.forEach(function (childSnap) {


                let cat = childSnap.child("buttonList")

                let array = (cat.val()?cat.val().slice() : [])




                let index = array.indexOf(name)

                if(index !==-1) {
                    console.log(array)
                    array[index] = newName
                    cat.ref.update(array)
                }






            })
        })

        console.log("all the names were updated to " + newName)
    }

    else {
        con.orderByChild("name").startAt(name).endAt(name + '~').on('value', function (snapshot) {

            snapshot.forEach(function (childSnap) {
                childSnap.child("image").ref.set(newImage)
            })


        })
    }

}

async function Add(arrayOfNodes = [], name = "", location = "") {

    let con = firebase.database().ref("germs");

    //you need to create the objects first.

    //push the array of object to firebase


    pusher(arrayOfNodes, con, name, location)

    con.once("value").then(function(snapshot) {
        console.log("There are "+snapshot.numChildren()+ " records");
    })

}

async function Delete(location = "" ,buttons = [], onlyNode = true, name = [] ){

    let error = ''


    let con = firebase.database().ref("germs");

    if(onlyNode) {
        con.orderByChild("name").startAt(location).endAt(location + '~').once('value').then(function (snapshot) {

            if (validate(snapshot.val())) {
                snapshot.forEach(function (childSnap) {
                    childSnap.ref.remove()
                })
            } else if (validate() === false && buttons === []) {

                // this ultimately should return a div or text that says, could not complete
                error = "cannot complete this operation"
                console.log("cannot complete this operation")

            }

            //if validate returns false (more than one return object so non-unique) and buttons names exist
            else {
                snapshot.forEach((childSnap) => {

                    if (validateArrayEquality(childSnap.val().buttonList, buttons)) {

                        childSnap.ref.remove()

                    } else

                        error = "not found, try again"

                    console.log(error) //these need to show up in the dom


                })
            }

        })
    }
    else {
        con.orderByChild("name").limitToFirst(1).equalTo(location).once('value').then( function (snapshot) {
            snapshot.forEach(function (childSnap) {
                console.log(location)
                console.log(childSnap.val())
                let cat = childSnap.child("buttonList")
                console.log(cat.val())
                let array = (cat.val()?cat.val().slice() : [])
                console.log(array)
                for(let nm of  name){

                    let index = array.indexOf(nm)
                    array.slice(index,1)

                }

                console.log(array)

                cat.ref.update(array)
            })
        })

    }

}

function validate (objectNodes = {} ) {

    //keys of each
    return Object.keys(objectNodes).length === 1


}

//note: leetcode solution :)

function validateArrayEquality(a, b) {

    if (a.length !== b.length)

    { return false; }

    const counts = new Map();

    for (const v of a) {

        const count = counts.get(v) || 0;

        counts.set(v, count + 1);
    }
    for (const v of b) {

        const count = counts.get(v);

        if (!count) {   // undefined or 0, both mean arrays are not the same

            return false;
        }

        counts.set(v, count - 1);
    }
    return true;
}

//takes an array of objects and a connection to firebase and pushes the objects to the firebase ref

function pusher (array = [], con, name, location) {

    con.orderByChild("name").limitToFirst(1).equalTo(location).once('value').then( function (snapshot) {
        snapshot.forEach(function (childSnap) {
            console.log(location)
            console.log(childSnap.val())
            let cat = childSnap.child("buttonList")
            console.log(cat.val())
            let array = (cat.val()?cat.val().slice() : [])
            console.log(array)
            array.push(name)
            console.log(array)

            cat.ref.update(array)
        })
    })

    if(array!== []) {

        for (const germNode in array) {

            con.push(array[germNode])
        }
    }
}

export {getName, Update, Add, Delete}
