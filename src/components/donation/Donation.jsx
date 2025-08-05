
import React, { useState } from "react";
import "./Donation.css";
import { HiHeart, HiChatBubbleLeftRight, HiStar, HiSparkles } from "react-icons/hi2";

export const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <div className="feedback-content">
          <div className="feedback-text">
            <div className="feedback-badge">
              <HiHeart />
              <span>Your Voice Matters</span>
            </div>
            
            <h2 className="feedback-title">
              Share Your <span className="gradient-text">Feedback</span>
            </h2>
            
            <p className="feedback-description">
              Your thoughts and suggestions help us improve and better serve the transgender community. 
              Together, we can create a more inclusive and supportive environment for everyone.
            </p>
            
            <div className="feedback-features">
              <div className="feature-item">
                <HiStar className="feature-icon" />
                <span>Improve Services</span>
              </div>
              <div className="feature-item">
                <HiChatBubbleLeftRight className="feature-icon" />
                <span>Better Support</span>
              </div>
              <div className="feature-item">
                <HiSparkles className="feature-icon" />
                <span>Community Growth</span>
              </div>
            </div>
            
            <a 
              href="https://forms.gle/NQakmZ8aQbkDFiD56" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary feedback-btn"
            >
              <HiHeart />
              Submit Feedback
            </a>
          </div>
          
          <div className="feedback-visual">
            <div 
              className={`flip-card ${isFlipped ? 'flipped' : ''}`}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="card-content">
                    <HiHeart className="card-icon" />
                    <h3>We Value Your Voice</h3>
                    <p>Your feedback helps us grow and serve better.</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content">
                    <HiSparkles className="card-icon" />
                    <h3>Let's Make a Difference</h3>
                    <p>Together, we can create positive change.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
