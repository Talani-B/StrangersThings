import { useState } from 'react';

export default  function Posts() {
    const [posts, setPosts]= useState([]);
    const [username, setUsername]= useState('')


    
    return (
       <div>
        <h1> Posts </h1>
     <form>
        <textarea 
       name="username" 
        cols="30" 
        rows="10"></textarea>

     </form>
     <button>Add</button>
     <button>Edit</button>
     <button>Delete</button>
        </div>
    
    )
}