import React, { useContext, useState } from "react";
import "./create.css";
import { Context } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // Show "Submitted!" on button click

    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("https://taarabackend.onrender.com/api/upload", data);
      } catch (err) {
        console.error(err);
      }
    }

    try {
      await axios.post("https://taarabackend.onrender.com/api/posts", newPost);
      setSuccess(true);
      setTimeout(() => navigate("/"), 1500); // Redirect after 1.5s
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create flexCenter">
      <form onSubmit={handleSubmit} className="form flexColStart">
        <h1 className="form-title">Create a New Post</h1>
        <h3 className="form-subtitle">Share your story with the world</h3>

        {submitted && <p className="submitted-msg">✅ Submitted!</p>}
        {success && <p className="success-msg">🎉 Post created successfully!</p>}

        <div className="inputfile flexCenter">
          <label htmlFor="fileInput">Choose file</label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <input
          type="text"
          placeholder="Enter a title..."
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Write your thoughts here..."
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <button className="button" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Create;