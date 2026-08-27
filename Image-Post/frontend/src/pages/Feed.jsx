import React, { useState,useEffect } from 'react'
import axios from 'axios'
const feed = () => {

    const[post,setPost]=useState([
        {
            _id:"1",
            image:"https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
             caption:"Butifull-image"
        }
       ])

     useEffect(()=>{

      axios.get("http://localhost:3000/posts")
       .then((res)=>{
        setPost(res.data.posts)
       })

       },[])
  return (
    <div>
      
      <section className='feed-section'>
    {
        post.length > 0 ?(
            post.map((post)=>(
       <div key={post._id} className='post-card'>
        <img src={post.image} alt={post.caption}/>
        <p>{post.caption}</p>
       </div>
            ))
        ) :(
            <h1>No posts available</h1>
        )
    }
      </section>
    </div>
  )
}

export default feed
