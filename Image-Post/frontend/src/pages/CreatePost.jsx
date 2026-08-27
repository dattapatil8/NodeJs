import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreatePost = () => {
 const navigate=useNavigate()

  const submitHandel=async(e)=>{
    e.preventDefault()
 
 const formData= new FormData(e.target)
    axios.post("http://localhost:3000/create-post",formData)
    .then((res)=>{
      console.log(res)
    navigate('/feed-section')
    })
    .catch((err)=>{
      console.log(err)
      alert("Alert error catchimg")
    })



  }
  return (
    <div>
      <section className='Create-Post'>
        <h1>Create Post</h1>
        <form onSubmit={submitHandel}>
            <input type='file' name='image' accept='image/*'/>
            <input type='text' name='caption' placeholder='enter caption' required/><br></br>
            <button type='submit'>Submit</button>

        </form>
      </section>
    </div>
  )
}

export default CreatePost
