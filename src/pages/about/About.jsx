import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="main-title">About Us</h1>
          <p className="hero-text">
            Welcome to our platform – a community-driven space dedicated to helping people find support, shelter, and opportunities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="section">
          <div className="section-header">
            <div className="icon">🎯</div>
            <h2>Our Mission</h2>
          </div>
          <p>
            We aim to bridge the gap between those in need and those willing to help. Whether it's finding a job, accessing a safe shelter, or discovering helpful resources – we're here to support you every step of the way.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="section">
          <div className="section-header">
            <div className="icon">✨</div>
            <h2>What We Offer</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Job Opportunities</h3>
              <p>Job listings for skill development and employment</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Safe Shelter</h3>
              <p>Shelter recommendations for those in crisis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Resources & Blogs</h3>
              <p>Mental well-being support and practical guidance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Community Gallery</h3>
              <p>Inspiring stories, moments, and contributions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Direct Support</h3>
              <p>Contact and support options for further help</p>
            </div>
          </div>
        </div>

        {/* Why We Started Section */}
        <div className="section">
          <div className="section-header">
            <div className="icon">💡</div>
            <h2>Why We Started</h2>
          </div>
          <div className="quote-box">
            <p>
              "This platform was born from the idea that small actions can create big impacts. We believe everyone deserves a second chance, a helping hand, and a safe space to rebuild."
            </p>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="section">
          <div className="section-header">
            <div className="icon">🌟</div>
            <h2>Join Us</h2>
          </div>
          <div className="cta-box">
            <p>
              Whether you're here to seek help, contribute, or just explore – thank you for being part of our growing community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};