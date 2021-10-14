import React from 'react'
import {useFormik} from 'formik'

function YoutubForm() {

    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            channel:'',
        }
    })

    console.log('Formik Values', formik.values)
    return (
        <div>
        <label htmlFor="name">Name</label>
        <input 
            type="text" 
            id="name"
            name="name" 
            onChange={formik.handleChange} 
            value={formik.values.name}
         />

        <label htmlFor="email">Email</label>
        <input 
            type="text" 
            id="email"
            name="email" 
            onChange={formik.handleChange} 
            value={formik.values.email}
         />

        <label htmlFor="channel">Channel</label>
        <input 
            type="text" 
            id="channel" 
            name="channel" 
            onChange={formik.handleChange} 
            value={formik.values.channel}
        />
        <br/>
        <button>Submit</button>
        </div>
    )
}
export default YoutubForm
