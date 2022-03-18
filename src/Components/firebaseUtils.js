
import firebase from "firebase"


//---Gets the name of the button and return an object from firebase

async function getName(nameOfGerm) {

    //find reference to the part of database containing germs
    let con = firebase.database().ref("germs");

    //takes a slice of this data based upon the parameters (name) and only the first one
    let snap = await con.orderByChild("name").limitToFirst(1).equalTo(nameOfGerm).once('value');

    //takes the value of that slice and return it
    let germ = snap.val();

    //if there is a firebase object that exist, get the key, and return an object
    if(germ) {

        let index = Object.keys(germ)[0]
        let finalGerm = germ[index]
        return finalGerm;

        }
    // if nothing exists, just returns a message that states that
    else {

        return "Nothing here"
    }

}

//Can either update the name of a button across the entire database (including inner lists) or the image

async function Update(name = '', newName= '', newImage = '' ,toggle = '') {

    let con = firebase.database().ref("germs");

    //if the toggle is in the default state
    if(toggle) {

        //uses a location that matches the  string and returns a snapshot

        con.orderByChild("name").startAt(name).endAt(name + '~').once('value').then( function (snapshot) {

            snapshot.forEach(function (childSnap) {

                //updates the name of the object that was found

                childSnap.child("name").ref.set(newName)
            })


        })

        //also, get a list of all buttons

        con.orderByChild("name").once("value").then( function (snapshot) {

            snapshot.forEach(function (childSnap) {

                //for each element in a list, get the value of the buttonlist child, see if anything == the old name

                let cat = childSnap.child("buttonList")
                let array = (cat.val()?cat.val().slice() : [])
                let index = array.indexOf(name)

                //if there is a match, update it to a new name parameter

                if(index !==-1) {
                    console.log(array)
                    array[index] = newName
                    cat.ref.update(array)
                }

            })
        })

        console.log("all the names were updated to " + newName)
    }

    //if the toggle is false, get a location, change the object image value
    else {
        con.orderByChild("name").startAt(name).endAt(name + '~').once('value').then( function (snapshot) {

            snapshot.forEach(function (childSnap) {

                childSnap.child("image").ref.set(newImage)
            })


        })
    }

}

async function Add(arrayOfNodes = [], name = "", location = "") {

    let con = firebase.database().ref("germs");

    //call the pusher function to add buttons to the database with an array of objects and a location

    pusher(arrayOfNodes, con, name, location)

    //let anyone inspecting know how many records are in the database now
    con.once("value").then(function(snapshot) {

        console.log("There are "+snapshot.numChildren()+ " records");
    })

}

//Function used to delete either a button or an element within a button (doesnt affect individual objects)

async function Delete(location = "" ,buttons = [], onlyNode = true, name = [] ){

    let error = ''
    let con = firebase.database().ref("germs");

    //if onlynode is true, default, delete the entire button object

    if(onlyNode) {

        //finds the name of the specific button

        con.orderByChild("name").startAt(location).endAt(location + '~').once('value').then(function (snapshot) {

            if (validate(snapshot.val())) {

                snapshot.forEach(function (childSnap) {

                    childSnap.ref.remove()

                })
            } else if (validate() === false && buttons === []) {
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

                //gets a inner list of buttons for all the element in firebase.
                let cat = childSnap.child("buttonList")
                let array = (cat.val()?cat.val().slice() : [])

                for(let nm of  name){
                    //get the index of the name you want to delete and get rid of it
                    let index = array.indexOf(nm)
                    array.slice(index,1)

                }

                //update the ref with the new array
                cat.ref.update(array)
            })
        })

    }

}


//function for validation. if theres only one element, you dont have to worry about duplicates to delete
function validate (objectNodes = {} ) {

    //keys of each
    return Object.keys(objectNodes).length === 1


}

//makes sure the arrays are equal by element. Leetcode solution

function validateArrayEquality(a, b) {

    if (a.length !== b.length)
    { return false; }

    const counts = new Map();

    for (const v of a) {

        //updates the map if a value doesnt exist in it already with 1's
        const count = counts.get(v) || 0;
        counts.set(v, count + 1);
    }
    for (const v of b) {

        //iterates through the second array and checks every value in the map (first array)
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

            let cat = childSnap.child("buttonList")
            let array = (cat.val()?cat.val().slice() : [])
            array.push(name)
            cat.ref.update(array)
        })
    })

    if(array!== []) {

        for (const germNode in array) {

            con.push(array[germNode])
        }
    }
}



    

export {getName, Update, Add, Delete }
