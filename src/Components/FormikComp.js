import React from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


const initialValues = {
    name:'Diana',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social: {
        facebook:'',
        twitter:''
    },
    phoneNumber: [' ', ' ']
}

const onSubmit = values =>{
    console.log('Form Data', values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email formate')
    .required('Required!'),
    channel: Yup.string().required('Required!')
})


function FormikComp() {
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
     >
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field type='text' id='name' name='name' />
              <ErrorMessage name='name' component={TextError}/>
            </div>

            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <Field type='email' id='email' name='email' />
              <ErrorMessage name='email'>
                {
                    (errorMsg)=> {
                        return <div className="error">{errorMsg}</div>
                    }
                }
              </ErrorMessage>

            </div>

            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <Field
                type='text'
                id='channel'
                name='channel'
                placeholder='Youtube channel name'
              />
              <ErrorMessage name='channel' />
            </div>

            <div className='form-control'>
              <label htmlFor='comments'>Comments</label>
              <Field
                as ='textarea'
                id='comments'
                name='comments'
              />
            </div>

            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <Field name='address'>
                  {
                      (props)=>{
                          const {field, form, meta} = props
                          console.log('Render props',props)
                          return (
                        <div>
                            <input type="text" id="address" {...field}/>
                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                        </div>
                          )}
                  }
              </Field>
             
            </div>

            <div className='form-control'>
              <label htmlFor='facebook'>Facebook Profile</label>
              <Field type="text" id='facebook' name='social.facebook'/>
            </div>

            <div className='form-control'>
              <label htmlFor='twitter'>Twitter Profile</label>
              <Field type="text" id='twitter' name='social.twitter'/>
            </div>

            <div className='form-control'>
              <label htmlFor='primaryPh'>Primary Phone Number</label>
              <Field type="text" id='primaryPh' name='phoneNumbers[1]'/>
            </div>

            <div className='form-control'>
              <label htmlFor='secondaryPh'>Secondary Phone Number</label>
              <Field type="text" id='secondaryPh' name='phoneNumbers[0]'/>
            </div>
            <button type='submit'>Submit</button>
        </Form>
        
      
    </Formik>
  )
}

export default FormikComp