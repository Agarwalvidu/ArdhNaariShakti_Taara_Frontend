import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
// import { Category } from "../../components/category/Category"
import axios from "axios"
import { useLocation } from "react-router-dom"
//importing css file and react-router-dom for form
import './style.css'
import { useNavigate } from "react-router-dom"

export const Blogpage = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate() //initializing navigate

  // setp 2
  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  //function to handle Create Blog button click
  const handleCreateBlog = () =>{
    navigate('/createblog')
  }
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("https://taara-backend.onrender.com/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
    <>
      {/*Adding a button for create blog */}
      <button className="CreateBlog" onClick={handleCreateBlog}>Create Blog</button>
      {/* <Category /> */}
      <Card posts={posts} />
    </>
  )
}
