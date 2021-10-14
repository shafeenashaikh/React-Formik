import React from 'react'
import {useFormik} from 'formik'

function YoutubForm() {

    const formik = useFormik({})
    return (
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name"/>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"/>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel"/>
        <br/>
        <button>Submit</button>
        </div>
    )
}
export default YoutubForm
