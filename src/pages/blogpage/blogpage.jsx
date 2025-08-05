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
      try {
        setLoading(true)
        setError(null)
        const res = await axios.get("https://taara-backend.onrender.com/posts" + search)
        setPosts(res.data || [])
      } catch (err) {
        console.error("Error fetching posts:", err)
        setError("Failed to load posts. Please try again later.")
        setPosts([])
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
        fontSize: 'var(--text-lg)',
        color: 'var(--text-secondary)'
      }}>
        Loading posts...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh',
        flexDirection: 'column',
        gap: 'var(--space-md)'
      }}>
        <p style={{ 
          fontSize: 'var(--text-lg)', 
          color: 'var(--text-secondary)',
          textAlign: 'center'
        }}>
          {error}
        </p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: 'var(--space-sm) var(--space-lg)',
            background: 'var(--primary-color)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <>
      {/* <Category /> */}
      <Card posts={posts} />
    </>
  )
}
