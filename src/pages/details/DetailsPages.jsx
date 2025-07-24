import React, { useContext, useEffect, useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import {
  AiOutlineDelete,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai";
import { Context } from "../../context/Context";

export const DetailsPages = () => {
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];

  // step 4 for update
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);

  //setp 2
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://taara-backend.onrender.com/posts/" + path
      );
      console.log(res);
      //setp 2
      setPost(res.data);
      //setp 4
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  // step 3
  // file create garne time add garne
  const PublicFlo = "https://taara-backend.onrender.com/images/";
  const { user } = useContext(Context);

  const handleDelete = async () => {
    try {
      console.log(post._id);
      await axios.delete(
        `https://taara-backend.onrender.com/posts/${post._id}`,
        { username: user.username }
      );
      window.location.replace("/");
    } catch (error) {}
  };

  // setp 4
  const handleUpdate = async () => {
    try {
      await axios.put(`https://taara-backend.onrender.com/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.replace("/");
    } catch (error) {}
  };

  return (
    <>
      <section className="singlePage">
        <div className="container">
          <div className="left">
            {post.photo && (
              <img
                src={PublicFlo + post.photo}
                alt={post.title || "Blog post"}
              />
            )}
          </div>
          <div className="right">
            {post.username === user?.username && (
              <div className="buttons">
                <button
                  className="button edit-btn"
                  onClick={() => setUpdate(true)}
                >
                  <BsPencilSquare />
                  Edit
                </button>
                <button className="button delete-btn" onClick={handleDelete}>
                  <AiOutlineDelete />
                  Delete
                </button>
                {update && (
                  <button className="button update-btn" onClick={handleUpdate}>
                    Update Post
                  </button>
                )}
              </div>
            )}

            {update ? (
              <input
                type="text"
                value={title}
                className="updateInput title-input"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title..."
              />
            ) : (
              <h1>{post.title}</h1>
            )}

            <div className="post-meta">
              <div className="author-info">
                <div className="author-avatar">
                  {post.username ? post.username.charAt(0).toUpperCase() : "A"}
                </div>
                <div>
                  <div className="author-name">
                    By{" "}
                    <Link
                      to={`/?user=${post.username}`}
                      className="author-link"
                    >
                      {post.username}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="post-date">
                <AiOutlineCalendar style={{ marginRight: "5px" }} />
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Unknown date"}
              </div>
            </div>

            {update ? (
              <textarea
                value={desc}
                cols="30"
                rows="10"
                className="updateInput desc-textarea"
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Enter blog description..."
              ></textarea>
            ) : (
              <div className="content-description">{post.desc}</div>
            )}

            {post.categories && post.categories.length > 0 && (
              <div className="post-categories">
                <h4>Categories:</h4>
                <div className="category-tags">
                  {post.categories.map((category, index) => (
                    <span key={index} className="category-tag">
                      #{category.name || category}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
