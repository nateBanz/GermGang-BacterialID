import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import {DropdownHelperForDelete} from "./FormHelper"
import * as Yup from 'yup'
import {Delete} from "./firebaseUtils"
import {getName} from "./firebaseUtils";

const DeleteForm = () => {
    const [arrayState, updateArrayState] = useState([])


    const initialValues = {
        toggle: true,
        location: "",
        checkboxes: [],

    }

    const SignUpSchema = Yup.object().shape({
        location: Yup.string()
            .matches(/.*\d{4}\s*$/gm, "A location is required with a unique ID (4 numbers)")
            .required("Location is required, select from dropdown or type"),

    });

    async function submitHandlerDelete (name, toggle,checkboxes) {

        let node = await getName(name)
        let buttons = node.buttonList
        if(toggle)
            Delete(name, buttons, true, []).then((r) =>(alert("Operation complete!"))).catch((e) => (alert("Delete not successful, try again with a different button")))
        else
            Delete(name, buttons, true, checkboxes).then((r) =>(alert("Operation complete!"))).catch((e) => (alert("Delete not successful, try again with a different button")))
    }

    //array of objects contained in the initial value object
    return (
        <div className="form-background">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="back-color top10 px-4 py-3 rounded">


                            <div className="row justify-content-bottom text-center">
                                <div className="col">
                                    <h1 className="top30">Delete Form</h1>
                                    <hr/>
                                </div>
                            </div>


                            <Formik
                                initialValues={initialValues}
                                validationSchema={SignUpSchema}
                                validateOnBlur={true}
                                onSubmit={(values) => {
                                    console.log(values)
                                    //submitHandlerDelete(values.location,values.toggle,values.checkboxes)
                                }}
                            >

                                {({values, errors, touched}) => (


                                    <Form>
                                        <div className="row">
                                            <div className="col-sm-6 mx-auto d-flex justify-content-center">
                                                <div className="form-check form-check-inline top30 ml-3">
                                                    <label className="form-check-label"
                                                           htmlFor="inlineCheckbox1">

                                                        <Field name="toggle" id="toggle"  type  = "checkbox"
                                                               className="check-custom2 toggle-switch2"/>

                                                        {values.toggle ? "Deleting all of the Button" : "Deleting inside the Button"}

                                                        <span className="check-toggle2 form-check"></span>

                                                    </label>





                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <Field name="location" id="location" component={DropdownHelperForDelete}  arrayUpdater = {updateArrayState}
                                                           className="form-control">
                                                        <ErrorMessage name="location" component="div"
                                                                      className="field-error"/>
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">


                                                {(arrayState !== null || true) && arrayState.map((piece, index)=>(
                                                    <div key = {index} className="form-check form-check-inline">


                                                        <label className="form-check-label"
                                                               htmlFor="inlineCheckbox1"> {piece}

                                                            <Field name="checkboxes" type="checkbox"
                                                                   className="check-custom toggle-switch" value = {piece}/>

                                                            <span className="check-toggle"></span>

                                                        </label>
                                                    </div>
                                                ))}




                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col">
                                                <div className="d-flex justify-content-center mt-4 mb-4">
                                                    <button type="submit"
                                                            className="btn1 btn1-primary btn-block font-weight-bold"
                                                            disabled={Formik.isSubmitting || Formik.errors}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                    </Form>

                                )

                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


export default DeleteForm