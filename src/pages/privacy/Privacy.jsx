import React from "react";
import "./privacy.css";

export const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <div className="header">
          <h1>Privacy Policy</h1>
          <p className="subtitle">Your privacy is important to us</p>
        </div>

        <div className="intro">
          <p>
            At <span className="brand">Taara</span>, we are committed to protecting your personal information and your right to privacy.
          </p>
        </div>

        <div className="section">
          <h2><span className="number">1</span> Information We Collect</h2>
          <p>We may collect personal details such as your name, email address, location, and any other details you provide through forms on our site.</p>
        </div>

        <div className="section">
          <h2><span className="number">2</span> How We Use Your Information</h2>
          <p>The data we collect is used to:</p>
          <ul>
            <li>Improve your experience on the platform</li>
            <li>Provide support and respond to your queries</li>
            <li>Send important updates or notifications</li>
          </ul>
        </div>

        <div className="section">
          <h2><span className="number">3</span> Data Protection</h2>
          <p>We implement standard security measures to protect your data. However, no digital platform can guarantee 100% security.</p>
        </div>

        <div className="section">
          <h2><span className="number">4</span> Third-Party Sharing</h2>
          <p className="important">We do not share your information with third parties without your explicit consent.</p>
        </div>

        <div className="section">
          <h2><span className="number">5</span> Your Consent</h2>
          <p>By using our website, you consent to our Privacy Policy.</p>
        </div>

        <div className="section">
          <h2><span className="number">6</span> Updates to this Policy</h2>
          <p>We may update our privacy practices. Changes will be posted on this page with a revised date.</p>
        </div>

        <div className="contact-section">
          <h2><span className="number">7</span> Contact Us</h2>
          <p>
            If you have any questions or concerns about this policy, please contact us through the <a href="/contact">Contact Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
};