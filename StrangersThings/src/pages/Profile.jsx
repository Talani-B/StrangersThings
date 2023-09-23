import { useState } from "react";

export default  function Profile({ token }) {
     const [username, setUsername] = useState('')
     const [messages, setMessages] = useState([])
    return (
        <div>
        <h1>Profile</h1>
        <button>Create New Message</button>
        <input name = "message"></input> 
       <form>
        <h2>Recent Messages</h2> 

       </form>
       <form>
        <h2>Sent Messages</h2>
       </form>
       </div>

        
    )
}