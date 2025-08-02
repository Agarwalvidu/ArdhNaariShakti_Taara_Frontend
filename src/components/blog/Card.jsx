import React from "react";
import "./blog.css";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = ({ posts }) => {
  const PublicFlo = "https://taara-backend.onrender.com/images/";

  return (
    <section className="blog">
      <div className="container grid3">
        {posts?.map((item) => (
          <div className="box boxItems" key={item.id}>
            <div className="img">
              {item.photo && (
                <img src={PublicFlo + item.photo} alt={item.title || "Post"} />
              )}
            </div>

            <div className="details">
              <div className="tag">
                <AiOutlineTags className="icon" />
                {item?.categories?.map((c, index) => (
                  <a href="/" key={index}>
                    #{c.name}
                  </a>
                ))}
              </div>

              <Link to={`/post/${item._id}`}>
                <h3>{item?.title || "Untitled Post"}</h3>
              </Link>

              {/* ✅ Fixed this line */}
              <p>{item?.desc ? item.desc.slice(0, 150) + "..." : "No description available"}</p>

              <div className="date">
                <div>
                  <AiOutlineClockCircle className="icon" />
                  <label>
                    {item?.createdAt
                      ? new Date(item.createdAt).toDateString()
                      : "Unknown Date"}
                  </label>
                </div>

                <div>
                  <AiOutlineComment className="icon" />
                  <label>27</label>
                  <AiOutlineShareAlt className="icon" />
                  <label>SHARE</label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
