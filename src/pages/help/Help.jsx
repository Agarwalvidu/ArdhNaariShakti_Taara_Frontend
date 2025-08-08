import React from "react";
import "./help.css"; 

export const Help = () => {
  return (
    <div className="help-page">
      <div className="container">
        <h1>Help Center</h1>
        <p>
          Welcome to the Help Center. We're here to assist you with any issues, questions, or guidance you may need while using our platform.
        </p>

        <h2>Frequently Asked Questions (FAQs)</h2>
        <ul>
          <li>
            <strong>How do I find shelters or jobs?</strong><br />
            Go to the respective pages via the navigation bar. Use filters to refine your search by location or category.
          </li>
          <li>
            <strong>How can I contact someone for support?</strong><br />
            Visit the <a href="/contact">Contact</a> page to reach out directly through our form or find official contact details.
          </li>
          <li>
            <strong>Can I contribute or volunteer?</strong><br />
            Yes! Please get in touch via the Contact page and mention how you'd like to help.
          </li>
          <li>
            <strong>Is my personal information safe?</strong><br />
            Absolutely. We value your privacy and do not share your data without consent. See our <a href="/privacy">Privacy Policy</a>.
          </li>
        </ul>

        <h2>Still Need Help?</h2>
        <p>
          If your question wasn’t answered above, feel free to reach out. We aim to respond within 24–48 hours.
        </p>
        <p>
          👉 Visit the <a href="/contact">Contact Page</a> to send us your query.
        </p>
      </div>
    </div>
  );
};