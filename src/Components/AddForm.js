import React, {useState} from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import {DropdownHelper, FormHelper} from "./FormHelper"
import * as Yup from 'yup'
import {Add} from "./firebaseUtils";

const AddForm = ()=> {


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
return(
      <div>
      <h1>Add Form</h1>
      <Formik
      initialValues = {initialValues}
      validationSchema={SignUpSchema}
          onSubmit = {(values) => {
              console.log(values);
              Add(values.nodeGerms, values.nodeGerms[0].name, values.location).then((r) => (alert('added something to firebase')))
      }}
      >

          { ({values, errors, touched}) => (

                  <Form>
                      <Field name = "location" id = "location" component = {DropdownHelper}>
                         <ErrorMessage name = "location"/>
                      </Field>
                      <FieldArray name = "nodeGerms">
                          {
                              ({remove, push}) => (

                                  <div>
                                      {values.nodeGerms.map((nodes , index) => (
                                          <div>
                                              <div>
                                                  <label htmlFor={`nodeGerms.${index}.name`}>Name</label>

                                                  <Field
                                                      name={`nodeGerms.${index}.name`}
                                                      placeholder="Ex: Streptococcus"
                                                      type="text"
                                                  />
                                                  <ErrorMessage
                                                      name={`nodeGerms.${index}.name`}
                                                      component="div"
                                                      className="field-error"
                                                  />


                                              </div>
                                              <div>
                                                <label htmlFor={`nodeGerms.${index}.image`}>Image</label>

                                                      <Field
                                                          name={`nodeGerms.${index}.image`}
                                                          placeholder=""
                                                          type="file"
                                                      />
                                                      <ErrorMessage
                                                          name={`nodeGerms.${index}.image`}
                                                          component="div"
                                                          className="field-error"
                                                      />


                                              </div>

                                              <label htmlFor={`nodeGerms.${index}.buttonList`}>List of new Button Names</label>
                                              <FieldArray name = {`nodeGerms[${index}].buttonList`}>


                                                  {
                                                      ({push, remove}) => (
                                                          <div>

                                                      <Field
                                                          component = {FormHelper}
                                                          name = {`nodeGerms.${index}.buttonList`}
                                                          placeholder = "Rods, Clusters, etc"
                                                          type = "text"
                                                          theArray = {values.nodeGerms[index].buttonList}
                                                          theUpdater = {remove}
                                                          theHandler = {push}
                                                          index = {index}

                                                      />

                                                      <ErrorMessage
                                                          name={`nodeGerms.${index}.buttonList`}
                                                          component="div"
                                                          className="field-error"

                                                      />

                                                      </div>
                                                      )
                                                  }

                                              </FieldArray>




                                              <div>
                                                  <button type = 'button'
                                                  className= 'secondary'
                                                  onClick={() => (remove(index))}>

                                                      X

                                                  </button>
                                              </div>



                                          </div>



                                          )


                                      )}
                                      <div>
                                          <button
                                              type="button"
                                              className="secondary"
                                              onClick={() => push({ name: '', image: '' , buttonList: []})}
                                          >
                                              Add Button
                                          </button>
                                      </div>
                                  </div>


                              )}
                      </FieldArray>

                      <button type = "submit" disabled={Formik.isSubmitting || Formik.errors} >
                          Submit
                      </button>



                  </Form>
              )

          }
      </Formik>
  </div>

)
}
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


export default AddForm


