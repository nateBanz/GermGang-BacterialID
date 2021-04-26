import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import {DropdownHelper, FormHelper} from "./FormHelper"
import * as Yup from 'yup'
import {Add} from "./firebaseUtils";

const AddForm = () => {


    const initialValues = {
        location: "",
        nodeGerms: [{
            name: "",
            image: "",
            buttonList: []

        }],

    }

    const SignUpSchema = Yup.object().shape({
        location: Yup.string()
            .matches(/.*\d{4}\s*$/gm, "A location is required with a unique ID (4 numbers)")
            .required("Location is required, select from dropdown or type"),

        nodeGerms: Yup.array().of(
            Yup.object().shape({
                name: Yup.string()
                    .matches(/.*\d{4}\s*$/gm, "A name must have a unique ID (4 numbers)")
                    .trim("Can't be empty")
                    .required("A name is required"),
                image: Yup.string(),
                buttonList: Yup.array().of(
                    Yup.string()
                        .matches(/.*\d{4}\s*$/gm, "This name must have a unique ID (4 numbers)")
                        .trim()
                ),
            })
        ),
    });


    //array of objects contained in the initial value object
    return (
        <div className="form-background">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="back-color top10 px-4 py-3 rounded">


                            <div className="row justify-content-bottom text-center">
                                <div className="col">
                                    <h1 className="top30">Add Form</h1>
                                </div>
                            </div>


                            <Formik
                                initialValues={initialValues}
                                validationSchema={SignUpSchema}
                                validateOnBlur={true}
                                onSubmit={(values) => {
                                    console.log(values);
                                    Add(values.nodeGerms, values.nodeGerms[0].name, values.location).then((r) => (alert('added something to firebase')))
                                }}
                            >

                                {({values, errors, touched}) => (


                                    <Form>
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


                                        <FieldArray name="nodeGerms">
                                            {
                                                ({remove, push}) => (

                                                    <div className="row rounded" style={{marginRight: '7px'}}>
                                                        <div className="col">
                                                            {values.nodeGerms.map((nodes, index) => (
                                                                    <div className="row">
                                                                        <div>
                                                                            <button type='button'
                                                                                    className='close'
                                                                                    onClick={() => (remove(index))}>

                                                                                                   <span
                                                                                                       aria-hidden="true">&times;
                                                                                                   </span>

                                                                            </button>


                                                                        </div>

                                                                        <div className="col border rounded"
                                                                             style={{backgroundColor: '#EDECEF'}}>


                                                                            <div className="row ">
                                                                                <div className="col">


                                                                                    <label
                                                                                        htmlFor={`nodeGerms.${index}.name`}
                                                                                        className="col-sm-2 col-form-label invisible ">Name</label>

                                                                                    <Field
                                                                                        name={`nodeGerms.${index}.name`}
                                                                                        placeholder="Name - Ex: Streptococcus"
                                                                                        type="text"
                                                                                        className="form-control round-custom "
                                                                                    />
                                                                                    <ErrorMessage
                                                                                        name={`nodeGerms.${index}.name`}
                                                                                        component="div"
                                                                                        className="field-error"
                                                                                    />

                                                                                </div>


                                                                                <div className="col">
                                                                                    <label
                                                                                        htmlFor={`nodeGerms.${index}.image`}
                                                                                        className="col-sm-2 col-form-label invisible">Image</label>

                                                                                    <Field
                                                                                        name={`nodeGerms.${index}.image`}
                                                                                        placeholder=""
                                                                                        type="file"
                                                                                        className="form-control-file rounded"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                        name={`nodeGerms.${index}.image`}
                                                                                        component="div"
                                                                                        className="field-error"
                                                                                    />

                                                                                </div>
                                                                            </div>

                                                                            <div className="row border rounded top10">
                                                                                <div className="col">
                                                                                    <div
                                                                                        className="row justify-content-md-center">
                                                                                        <div
                                                                                            className="col-md-6 offset-md-3">
                                                                                            <span><label
                                                                                                htmlFor={`nodeGerms.${index}.buttonList`}
                                                                                                className="col-form-label invisible">List of new Button Names</label></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <FieldArray
                                                                                        name={`nodeGerms[${index}].buttonList`}>


                                                                                        {
                                                                                            ({push, remove}) => (
                                                                                                <div className="row">
                                                                                                    <div className="col">

                                                                                                        <Field
                                                                                                            component={FormHelper}
                                                                                                            name={`nodeGerms.${index}.buttonList`}
                                                                                                            placeholder="List of attached buttons - Ex: Rods 1010, Clusters 2102"
                                                                                                            type="text"
                                                                                                            theArray={values.nodeGerms[index].buttonList}
                                                                                                            theUpdater={remove}
                                                                                                            theHandler={push}
                                                                                                            index={index}
                                                                                                            className="form-control"

                                                                                                        />

                                                                                                        <ErrorMessage
                                                                                                            name={`nodeGerms.${index}.buttonList`}
                                                                                                            component="div"
                                                                                                            className="field-error"

                                                                                                        />

                                                                                                    </div>

                                                                                                </div>
                                                                                            )
                                                                                        }

                                                                                    </FieldArray>
                                                                                </div>
                                                                            </div>


                                                                        </div>

                                                                    </div>


                                                                )
                                                            )}
                                                            <div className="col addButton">
                                                                <button
                                                                    type="button"
                                                                    className="secondary float-right btn btn-primary"
                                                                    onClick={() => push({
                                                                        name: '',
                                                                        image: '',
                                                                        buttonList: []
                                                                    })}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                )}
                                        </FieldArray>

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



export default AddForm
