import {useState } from 'react';
import AuthForm from '../components/AuthForm';

export default  function Login({ setToken }) {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    function handleSubmit() {
        e.preventDefault();
        console.log("Login form submitted");
    }
    

    return (
        <form onSubmit={(e) => handleSubmit()}>
        <label htmlFor="username">Username</label>
        <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="password"
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <button type="submit">buttonText</button>
    </form>
    )
}