import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

const initialValues = {
  
}
const onSubmit = values =>{
    
}

const validationSchema = Yup.object({
    
})

function FormikComp() {

    console.log('visited fields', formik.touched)
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        <Form>
        <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field 
                type="text" 
                id="name"
                name="name" 
                
            />
            {formik.touched.name && formik.errors.name ? <div className="error"> {formik.errors.name} </div>: null}
         </div>

        <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field 
                type="text" 
                id="email"
                name="email" 
               
            />
            {formik.touched.email && formik.errors.email ? <div className="error"> {formik.errors.email} </div>: null}
        </div>
        
        <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field 
                type="text" 
                id="channel" 
                name="channel" 
               
            />
            {formik.touched.channel && formik.errors.channel ? <div className="error"> {formik.errors.channel} </div>: null}
        </div>
        <br/>
        <button type="submit">Submit</button>
        </Form> 
        </Formik>
    )
}
export default FormikComp
