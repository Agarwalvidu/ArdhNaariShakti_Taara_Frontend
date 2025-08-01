
import "./Donation.css";

export const FlipCard = () => {
  return (
    <div className="donation-wrapper">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/images/category/card_image.jpg" alt="Feedback Illustration" />
          </div>
          <div className="flip-card-back">
            <h2>We Value Your Voice</h2>
            <p>Your feedback helps us grow and serve better.</p>
            <p>Let’s make a difference together!</p>
          </div>
        </div>
      </div>

      <div className="donation-text-block">
        <h1>Share Your Feedback</h1>
        <p className="donation-description">
          Your thoughts matter. Help us improve and support the transgender community through your valuable suggestions. Together, we can make an impact in areas like healthcare, education, and legal rights.
        </p>
        <a href="https://forms.gle/NQakmZ8aQbkDFiD56" target="_blank" rel="noopener noreferrer">
          <button className="feedback-btn">Submit Feedback</button>
        </a>
      </div>
    </div>
  );
};
