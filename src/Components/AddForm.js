import React, {useState} from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import {DropdownHelper, FormHelper} from "./FormHelper"


const AddForm = ()=> {


    const initialValues = {
        location: "",
        nodeGerms: [{
            name: "",
            image: "",
            buttonList: []

        }],


    }
    //array of objects contained in the initial value object
return(
      <div>
      <h1>Add Form</h1>
      <Formik
      initialValues = {initialValues}

          onSubmit = {(values) => {
              console.log(values)
      }}
      >

          { ({values}) => (

                  <Form>
                      <Field name = "location" id = "location" component = {DropdownHelper}>

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
                                                          name={`nodeGerms.${index}.name`}
                                                          component="div"
                                                          className="field-error"
                                                      />


                                              </div>

                                              <label htmlFor={`nodeGerms.${index}.buttonList`}>List of new Button Names</label>
                                              <FieldArray name = {`nodeGerms[${index}].buttonList`}>


                                                  {
                                                      ({push, remove}) => (

                                                      <Field
                                                          component = {FormHelper}
                                                          name = {`nodeGerms.${index}.buttonList`}
                                                          placeholder = "Rods, Clusters, etc"
                                                          type = "text"
                                                          theArray = {values.nodeGerms[index].buttonList}
                                                          theUpdater = {remove}
                                                          theHandler = {push}

                                                      >



                                                      </Field>
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

                      <button type = "submit">
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


