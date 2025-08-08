import React from "react";
import "./privacy.css"; 

export const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>
          At Taara, we are committed to protecting your personal information and your right to privacy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect personal details such as your name, email address, location, and any other details you provide through forms on our site.</p>

        <h2>2. How We Use Your Information</h2>
        <p>
          The data we collect is used to:
          <ul>
            <li>Improve your experience on the platform</li>
            <li>Provide support and respond to your queries</li>
            <li>Send important updates or notifications</li>
          </ul>
        </p>

        <h2>3. Data Protection</h2>
        <p>We implement standard security measures to protect your data. However, no digital platform can guarantee 100% security.</p>

        <h2>4. Third-Party Sharing</h2>
        <p>We do not share your information with third parties without your explicit consent.</p>

        <h2>5. Your Consent</h2>
        <p>By using our website, you consent to our Privacy Policy.</p>

        <h2>6. Updates to this Policy</h2>
        <p>We may update our privacy practices. Changes will be posted on this page with a revised date.</p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this policy, please contact us through the <a href="/contact">Contact Page</a>.
        </p>
      </div>
    </div>
  );
};