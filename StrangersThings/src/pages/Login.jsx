import  { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default  function Login({ setToken }) {
    function handleSubmit(e, username , password) {
        e.preventDefault();
        console.log("Login form submitted");
    }
    return (
        <div>
        <h1>Login</h1>
       <AuthForm buttonText="Login" handleSubmit={handleSubmit}/> 
        </div>
    )
}