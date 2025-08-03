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

export const Card = ({ posts = [] }) => {
  // create file garnebelema
  const PublicFlo = "https://taara-backend.onrender.com/images/";
  
  // If no posts are provided, return null or a placeholder
  if (!posts || posts.length === 0) {
    return (
      <section className="blog">
        <div className="container grid3">
          <div className="box boxItems">
            <div className="details">
              <h3>No posts available</h3>
              <p>Check back later for new content!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {posts.map((item) => (
            <div className="box boxItems" key={item.id || item._id}>
              {/* first ma yo  <div className='img'>{item.photo && <img src={item.cover} alt='' />}</div>*/}
              <div className="img">
                {item.photo && (
                  <img src={PublicFlo + item.photo} alt={item.title || 'Blog post'} />
                )}
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  {item.categories && item.categories.length > 0 ? (
                    item.categories.map((c, index) => (
                      <a href="/" key={index}>
                        #{c.name || c}
                      </a>
                    ))
                  ) : (
                    <a href="/">#general</a>
                  )}
                </div>
                <Link to={`/post/${item._id || item.id}`}>
                  <h3>{item.title || 'Untitled Post'}</h3>
                </Link>
                <p>
                  {item.desc 
                    ? (item.desc.length > 150 ? item.desc.slice(0, 150) + '...' : item.desc)
                    : 'No description available'
                  }
                </p>
                <div className="date">
                  <div>
                    <AiOutlineClockCircle className="icon" />
                    <label htmlFor="">
                      {item.createdAt 
                        ? new Date(item.createdAt).toDateString()
                        : 'Unknown date'
                      }
                    </label>
                  </div>
                  <div>
                    <AiOutlineComment className="icon" />
                    <label htmlFor="">27</label>
                    <AiOutlineShareAlt className="icon" />
                    <label htmlFor="">SHARE</label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
