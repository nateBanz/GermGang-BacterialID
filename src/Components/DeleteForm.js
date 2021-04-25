import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import {DropdownHelper, FormHelper} from "./FormHelper"
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

    async function submitHandlerDelete (name) {

        let node = await getName(name)
        let buttons = node.buttonList
        if(values.toggle)
            Delete(name, buttons, true, []).then((r) =>(alert("Operation complete!"))).catch((e) => (alert("Delete not successful, try again with a different button")))
        else
            Delete(name, buttons, true, values.checkboxes).then((r) =>(alert("Operation complete!"))).catch((e) => (alert("Delete not successful, try again with a different button")))
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
                                </div>
                            </div>


                            <Formik
                                initialValues={initialValues}
                                validationSchema={SignUpSchema}
                                validateOnBlur={true}
                                onSubmit={(values) => {
                                    console.log(values)
                                    submitHandlerDelete(values.location)
                                }}
                            >

                                {({values, errors, touched}) => (


                                    <Form>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <Field name="toggle" id="toggle"  type  = "checkbox"
                                                           className="form-control"/>
                                                        {`${values.toggle}`}

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <Field name="location" id="location" component={DropdownHelper}  arrayUpdater = {updateArrayState}
                                                           className="form-control">
                                                        <ErrorMessage name="location" component="div"
                                                                      className="field-error"/>
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">

                                                    {(arrayState !== null || true) && arrayState.map((piece, index)=>(

                                                        <Field key = {index} name="checkboxes" type="checkbox"
                                                                                className="form-control" value = {piece}>
                                                            {piece}
                                                    </Field>)
                                                    )}




                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col">
                                                <div className="d-flex justify-content-center mt-4 mb-4">
                                                    <button type="submit"
                                                            className="btn btn-primary btn-block font-weight-bold"
                                                            disabled={Formik.isSubmitting || Formik.errors}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

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


