import React from "react";
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import {DropdownHelper} from "./FormHelper"
import * as Yup from 'yup'
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import {getName} from "./firebaseUtils";
import{Update} from "./firebaseUtils";

const UpdateForm = () => {

    const { currentUser, logout } = useAuth()
    const history = useHistory()
    if (currentUser.email != "bsarraj@ccc.edu" && currentUser != null){
        history.push("/")
    }
    

    const initialValues = {
        toggle: true,
        location: "",
        name: '',
        image: ''

    }

    const SignUpSchema = Yup.object().shape({
        location: Yup.string()
            .matches(/.*\d{4}\s*$/gm, "A location is required with a unique ID (4 numbers)")
            .required("Location is required, select from dropdown or type"),
        image: Yup.string()
            .matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/gm, "Must be a valid image file path"),
    });

    function submitHandlerUpdate(location, newName, newImage, bool) {

        Update(location, newName,newImage, bool).then((r)=>(alert("Successfully updated all items"))).catch(e =>(alert('Refresh and try again, could not update.')))

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
                                    <h1 className="top30">Update</h1>
                                    <hr/>
                                </div>
                            </div>


                            <Formik
                                initialValues={initialValues}
                                validationSchema={SignUpSchema}
                                validateOnBlur={true}
                                onSubmit={(values) => {

                                    console.log(values)
                                    submitHandlerUpdate(values.location, values.name, values.image,values.toggle)

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
                                                               className="check-custom3 toggle-switch3"/>

                                                        {values.toggle ? "Update Name" : "Update Image"}

                                                        <span className="check-toggle3 form-check3"></span>

                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <Field name="location" id="location" component={DropdownHelper}
                                                           className="form-control">
                                                        <ErrorMessage name="location" component="div"
                                                                      className="field-error"/>
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                        {values.toggle ?(
                                        <div className="row ">

                                            <div className="col">


                                                <label
                                                    htmlFor={`name`}
                                                    className="col-sm-2 col-form-label invisible ">Name</label>

                                                <Field
                                                    name= "name"
                                                    placeholder="New name - Ex: Escherichia coli 1000"
                                                    type="text"
                                                    className="form-control round-custom"
                                                />
                                                <small id="emailHelp" className="form-text text-muted ml-3">Name + space + unique 4 digit ID</small>
                                            </div>
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="field-error"
                                            />

                                        </div>
                                        ): null}

                                        {!values.toggle?
                                            (
                                                <div className="col">
                                                    <label
                                                        htmlFor={'image update'}
                                                        className="col-sm-2 col-form-label invisible">Image</label>

                                                    <Field
                                                        name="image"
                                                        placeholder="Must be a common file type"
                                                        type="text"
                                                        className="form-control-file rounded"
                                                    />
                                                    <ErrorMessage
                                                        name="image"
                                                        component="div"
                                                        className="field-error"
                                                    />

                                                </div>
                                            ) : null
                                        }


                                        <div className="row">
                                            <div className="col">
                                                <div className="d-flex justify-content-center mrt4 mb-4">
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


export default UpdateForm
