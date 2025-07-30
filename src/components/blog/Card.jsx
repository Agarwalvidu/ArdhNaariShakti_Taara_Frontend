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
  // create file garnebelema
  const PublicFlo = "https://taara-backend.onrender.com/images/";
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {posts.map((item) => (
            <div className="box boxItems" key={item.id}>
              {/* first ma yo  <div className='img'>{item.photo && <img src={item.cover} alt='' />}</div>*/}
              <div className="img">
                {item.photo && (
                  <img src={PublicFlo + item.photo} alt={item.title} />
                )}
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  {item.categories.map((c, index) => (
                    <a href="/" key={index}>
                      #{c.name}
                    </a>
                  ))}
                </div>
                <Link to={`/post/${item._id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p>{(item.desc && item.desc.length > 0) ? item.desc.slice(0, 150) + '...' : 'No description available'}</p>
                <div className="date">
                  <div>
                    <AiOutlineClockCircle className="icon" />
                    <label htmlFor="">
                      {new Date(item.createdAt).toDateString()}
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
