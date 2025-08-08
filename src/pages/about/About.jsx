import React from "react";
import "./about.css"; 

export const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to our platform – a community-driven space dedicated to helping people find support, shelter, and opportunities.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to bridge the gap between those in need and those willing to help. Whether it’s finding a job, accessing a safe shelter, or discovering helpful resources – we’re here to support you every step of the way.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>Job listings for skill development and employment.</li>
          <li>Shelter recommendations for those in crisis.</li>
          <li>Blogs and resources to support mental well-being and practical guidance.</li>
          <li>A gallery to showcase inspiring stories, moments, and contributions.</li>
          <li>Direct contact and support options for further help.</li>
        </ul>

        <h2>Why We Started</h2>
        <p>
          This platform was born from the idea that small actions can create big impacts. We believe everyone deserves a second chance, a helping hand, and a safe space to rebuild.
        </p>

        <h2>Join Us</h2>
        <p>
          Whether you’re here to seek help, contribute, or just explore – thank you for being part of our growing community.
        </p>
      </div>
    </div>
  );
};