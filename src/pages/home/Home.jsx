import React, { useEffect, useState } from "react"
import { Category } from "../../components/category/Category"
import { About } from "../../components/HomeCards/index.js"
import { ButterflyPage } from "../../components/butterfly/butterfly.jsx"
import { FlipCard } from "../../components/donation/Donation.jsx"
import axios from "axios"
import { useLocation } from "react-router-dom"

export const Home = () => {
  return (
    <>
      {/* Hero Section with Butterfly Animation */}
      <ButterflyPage />
      
      {/* Category/Features Section */}
      <Category />
      
      {/* Services Section */}
      <About />
      
      {/* Donation Section */}
      <FlipCard />
    </>
  )
}
