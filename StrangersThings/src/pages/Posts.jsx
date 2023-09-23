import { useState, useEffect } from 'react';
import { fetchPosts } from "../API";
import { Link } from 'react-router-dom';

export default  function Posts({token}) {
    const [posts, setPosts]= useState([]);
    const [username, setUsername]= useState('')
   const [text, setText]= useState('');
   useEffect(() =>{
      console.log("hello")
      async function fetchSetPosts(){
         const response = await fetchPosts()
         console.log(response)
         setPosts(response.data.posts)
         console.log(posts)
      }
      fetchSetPosts()
   }, [])

    
    return (
       <div>
        <h1> Posts </h1>
        {posts && posts.map((post,i)=>(
         <div key={i}>
         <div>{post.description}</div>   
         <div>{post.price}</div> 
         <div>{post.location}</div>     
         <div>{post.title}</div>
         <Link to="/products">Products</Link>
</div>
        )) }

      
     <button>Add</button>
     <button>Edit</button>
     <button>Delete</button>
        </div>
    
    )
}