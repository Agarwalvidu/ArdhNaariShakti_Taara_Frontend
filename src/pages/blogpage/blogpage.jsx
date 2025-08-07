import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
// import { Category } from "../../components/category/Category"
import axios from "axios"
import { useLocation } from "react-router-dom"

export const Blogpage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // setp 2
  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const res = await axios.get("https://taara-backend.onrender.com/posts" + search)
        setPosts(res.data)
      } catch (err) {
        console.error("Error fetching posts:", err)
        setError("Unable to load blog posts. Showing default content.")
        setPosts([]) // Set empty array to trigger fallback in Card component
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [search])

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading blog posts...
      </div>
    )
  }

  return (
    <>
      {error && (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          backgroundColor: '#fff3cd', 
          color: '#856404',
          margin: '20px',
          borderRadius: '5px',
          border: '1px solid #ffeaa7'
        }}>
          {error}
        </div>
      )}
      {/* <Category /> */}
      <Card posts={posts} />
    </>
  )
}
