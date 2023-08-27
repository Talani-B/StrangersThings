import { useState } from "react";

export default  function Profile({ token }) {
     const [user,setUsername] = useState('')
     const [messages,setMessages] = useState([])
    return (
        <div>
        <h1>Profile</h1>
        <button>Create New Message</button>
       <form>
        <h2>Recent Messages</h2> 

       </form>
       <form>
        <h2>Sent Messages</h2>
       </form>
       </div>

        
    )
}