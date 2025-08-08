import React from "react";
import "./terms.css"; // optional styling

export const Terms = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <h1>Terms of Service</h1>
        <p>Welcome to Taara. By accessing or using our website, you agree to the following terms and conditions.</p>

        <h2>1. Use of Our Service</h2>
        <p>
          You agree to use the platform only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the platform.
        </p>

        <h2>2. Account Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content, logos, graphics, and software are the property of Taara or its partners and are protected by copyright and intellectual property laws.
        </p>

        <h2>4. User Conduct</h2>
        <p>
          Users must not upload harmful, abusive, or misleading content. We reserve the right to suspend accounts violating these terms.
        </p>

        <h2>5. Changes to the Terms</h2>
        <p>
          We may update these Terms of Service at any time. Continued use of the site implies acceptance of the revised terms.
        </p>

        <h2>6. Termination</h2>
        <p>
          We reserve the right to terminate or restrict access to users who violate our terms without prior notice.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these terms, please reach out through the <a href="/contact">Contact Page</a>.
        </p>
      </div>
    </div>
  );
};