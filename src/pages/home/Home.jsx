import React, { useEffect, useState } from "react"
// import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import { About } from "../../components/HomeCards/index.js"
import { ButterflyPage } from "../../components/butterfly/butterfly.jsx"
import { FlipCard } from "../../components/donation/Donation.jsx"
import axios from "axios"
import { useLocation } from "react-router-dom"
import DailyAffirmation from "../../components/dailyAffirmation/DailyAffirmation.jsx"

export const Home = () => {
  // const [posts, setPosts] = useState([])

  // // setp 2
  // const { search } = useLocation()
  // // const location = useLocation()
  // //console.log(location)

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await axios.get("http://localhost:5000/posts" + search)
  //     setPosts(res.data)
  //   }
  //   fetchPost()
  // }, [search])
  return (
    <>
      <Category />
      <DailyAffirmation />
      <About/>
      <ButterflyPage/>
      <FlipCard/>
      {/* <Card posts={posts} /> */}
    </>
  )
}
