import React, { useState } from "react";
import "./faq.css";

const faqData = [
  {
    question: "What is Taara, and how does it empower women?",
    answer:
      "Taara is a platform dedicated to supporting and empowering women by providing access to resources, community support, and essential services. Our mission is to create a safe and inclusive space where women can find help, guidance, and opportunities for personal and professional growth.",
  },
  {
    question: "How can I access shelter or community support services?",
    answer:
      'You can visit our <a href="/shelter">Shelter</a> page to find information about available shelters and community support services. If you need urgent help, please use the contact options provided or reach out to our support team.',
  },
  {
    question: "Are there job opportunities listed on the Taara platform?",
    answer:
      'Yes, we regularly update our <a href="/jobs">Jobs</a> page with new opportunities. You can browse and apply for jobs that match your skills and interests.',
  },
  {
    question: "How can I get legal advice or assistance through Taara?",
    answer:
      'Visit our <a href="/legal">Legal</a> page to access legal resources, advice, and connect with professionals who can assist you with your concerns.',
  },
  {
    question: "How do I contact the Taara team for urgent help?",
    answer:
      'For urgent assistance, please use the contact form on our <a href="/contact">Contact</a> page or email us directly at <a href="mailto:support@taara.org">support@taara.org</a>. We are here to help you 24/7.',
  },
  {
    question: "Is my information safe and confidential on Taara?",
    answer:
      'Absolutely. We prioritize your privacy and ensure that all personal information shared on Taara is kept secure and confidential in accordance with our <a href="/privacy">Privacy Policy</a>.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      <div className="faq-title">Frequently Asked Questions</div>
      <ul className="faq-list">
        {faqData.map((item, idx) => (
          <li
            className={`faq-item${openIndex === idx ? " open" : ""}`}
            key={idx}
          >
            <div
              className="faq-question"
              onClick={() => handleToggle(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') handleToggle(idx);
              }}
            >
              {item.question}
              <span className="arrow">&#9654;</span>
            </div>
            <div
              className="faq-answer"
              id={`faq-answer-${idx}`}
              style={{ display: openIndex === idx ? 'block' : 'none' }}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
