import React, { useContext } from "react";
import "./blog.css";
import { Context } from "../../context/Context";
import { blog } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = ({ posts }) => {
  const { user } = useContext(Context);
  const PublicFlo = "https://taara-backend.onrender.com/images/"
  return (
    <>
      <div className='card-section'>
        {user && (
          <div className="add-post-container">
            <Link to="/create" className="add-post-button">
              ➕ Add New Post
            </Link>
          </div>
        )}

      </div>

      <section className='blog'>
        <div className='container grid3'>
          {Array.isArray(posts) && posts.map((item) => (
            <div className='box boxItems' key={item._id}>
              <div className='img'>
                {item.photo && <img src={PublicFlo + item.photo} alt='post' />}
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  {Array.isArray(item.categories) && item.categories.map((c, index) => (
                    <a href='/' key={index}>#{c.name}</a>
                  ))}
                </div>
                <Link to={`/post/${item._id}`}>
                  <h3>{item.title || "Untitled Post"}</h3>
                </Link>
                <p>{item.desc ? item.desc.slice(0, 180) + "..." : "No description available."}</p>
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
    </>
  );

};