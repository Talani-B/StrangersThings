import { useState } from "react"
import AuthForm from "../components/AuthForm"


export default  function Register({ setToken }) {
    
    return (
        <div>
        <h1>Register</h1>
       <AuthForm buttonText="Register" />
        </div>
    )
}