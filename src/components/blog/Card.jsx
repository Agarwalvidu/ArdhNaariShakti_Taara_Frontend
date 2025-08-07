import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = ({ posts }) => {
  const PublicFlo = "http://localhost:5000/images/"
  
  // Fallback data in case posts is undefined or empty
  const fallbackPosts = [
    {
      id: 1,
      title: "Welcome to Ardh Naari Shakti Tara",
      desc: "A community-focused platform built to support and uplift transgender and marginalized individuals by offering centralized access to vital services and information.",
      photo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      createdAt: new Date().toISOString(),
      categories: [{ name: "Community" }]
    },
    {
      id: 2,
      title: "Supporting Transgender Rights",
      desc: "Our mission is to create a world where everyone — regardless of their gender identity — can thrive with access to healthcare, education, legal assistance, shelter, and job opportunities.",
      photo: "https://communityshares.com/wp-content/uploads/2021/01/outreach-photo.jpg",
      createdAt: new Date().toISOString(),
      categories: [{ name: "Rights" }]
    },
    {
      id: 3,
      title: "Building Inclusive Communities",
      desc: "The platform aims to bridge the gap between people and the resources they need to live with dignity and equality.",
      photo: "https://a.storyblok.com/f/245693/568x379/832e1914cf/volunteers.jpg",
      createdAt: new Date().toISOString(),
      categories: [{ name: "Inclusion" }]
    }
  ];

  // Use posts if available and valid, otherwise use fallback data
  const displayPosts = posts && Array.isArray(posts) && posts.length > 0 ? posts : fallbackPosts;

  return (
    <section className='blog'>
      <div className='container grid3'>
        {displayPosts.map((item) => (
          <div className='box boxItems' key={item.id || item._id}>
            <div className='img'>
              {item.photo && <img src={item.photo} alt='post' />}
            </div>
            <div className='details'>
              <div className='tag'>
                <AiOutlineTags className='icon' />
                {Array.isArray(item.categories) && item.categories.map((c, index) => (
                  <a href='/' key={index}>#{c.name}</a>
                ))}
              </div>
              <Link to={`/post/${item._id || item.id}`}>
                <h3>{item.title || "Untitled Post"}</h3>
              </Link>
              <p>{item.desc ? (item.desc.length > 180 ? item.desc.slice(0, 180) + "..." : item.desc) : "No description available."}</p>
              <div className='date'>
                <AiOutlineClockCircle className='icon' />
                <label>{item.createdAt ? new Date(item.createdAt).toDateString() : "Date not available"}</label>
                <AiOutlineComment className='icon' /> <label>27</label>
                <AiOutlineShareAlt className='icon' /> <label>SHARE</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
