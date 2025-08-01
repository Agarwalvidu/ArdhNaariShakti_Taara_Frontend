import React, { useState } from "react";
import "./jobs.css";

export const Jobs = () => {
  const [sortOrder, setSortOrder] = useState("newest");

  const jobData = [
    {
      company: "KM Trans Logistics",
      role: "Product Manager",
      date: "February 6, 2024",
      description:
        "Conducting market research and analysis to identify opportunities and understand customer needs. Defining product vision, strategy, and roadmap, in alignment with company goals. Collaborating with cross-functional teams, such as engineering, design, and sales, to bring products to market. Managing the product lifecycle, from ideation to launch and post-launch evaluation. Monitoring product performance and making data-driven decisions to drive growth and profitability.",
      image:
        "https://www.nicepng.com/png/detail/258-2585308_job-search-skills-girl-using-laptop-png.png",
      link:
        "https://www.naukri.com/job-listings-product-manager-k-m-trans-logistic-pvt-ltd-new-delhi-4-to-8-years-230223502826?src=seo_srp&sid=17074837228937459&xp=1&px=1",
    },
    {
      company: "V-Logis",
      role: "Regional Sales Executive - North",
      date: "January 23, 2024",
      description:
        "We are seeking a highly motivated Sales executive with 2+ years extensive experience in the 3PL (Third-Party Logistics) industry. The ideal candidate should possess in-depth knowledge of understanding customer requirements and providing customized solutions. Strong leadership and decision-making skills. Excellent strategic and analytical skills. Good communication and collaboration skills.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      link:
        "https://www.naukri.com/job-listings-regional-sales-executive-north-v-logis-a-division-of-v-trans-i-ltd-delhi-ncr-2-to-5-years-180124006333?src=seo_srp&sid=17074882612544554&xp=2&px=1",
    },
    {
      company: "Reckitt",
      role: "R&D Sr. Officer, Health Operations",
      date: "January 18, 2024",
      description:
        "Focusing on one category – Health, Home or Hygiene - you’ll find new ways to improve our products. Working with experts from different teams, you’ll make sure we remain competitive, compliant and safe. Ultimately, you’ll ensure they continue to solve real problems and improve the lives of millions of people globally.",
      image:
        "https://adash.com/img/vibration-diagnostics/what-is-vibration-meter-analyzer.jpg",
      link:
        "https://careers.reckitt.com/job/Gurugram-R&D-Sr_-Officer%2C-Health-Operations-Hary-NA/1023776101/?jobPipeline=Indeed",
    },
    {
      company: "Tanaq Management Services LLC",
      role: "Data Analyst",
      date: "January 16, 2024",
      description:
        "We are seeking a Data Analyst to join our team in support of a project for the Centers for Disease Control and Prevention. The Data Analyst will apply their analytical skills to validate, clean, analyze, and disseminate data to gather public health insight.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*2fBIH8UQ8qij8fE7.jpg",
      link:
        "https://recruiting.paylocity.com/recruiting/jobs/Details/2257371/Tanaq-Management-Services-LLC/Data-Analyst?source=Indeed_Feed",
    },
    {
      company: "Meta",
      role: "UX Researcher, Qualitative",
      date: "January 15, 2024",
      description:
        "Our UX Research team is designing for the global diversity of human needs, requiring deep behavioral understanding. Researchers tackle complex challenges and collaborate on new product ideas that impact billions globally.",
      image:
        "https://www.testingtime.com/app/uploads/2022/03/UX-Designer-vs.-UX-Researcher-scaled.jpg",
      link:
        "https://www.metacareers.com/jobs/638857250931296/",
    },
    {
      company: "Meta",
      role: "Employment Investigator",
      date: "January 12, 2024",
      description:
        "Responsible for conducting prompt, thorough investigations including research, interviews, and collaborating with Employment Law and HR. Expected to manage cross-regional investigations as well.",
      image:
        "https://www.idissindia.com/detective-agency/pre-and-post-employment-verificationlog-agency-in-chennai.png",
      link:
        "https://www.metacareers.com/jobs/355075494150397/",
    },
  ];

  const sortedJobs = [...jobData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="container">
      <div className="filter-container">
        <label htmlFor="sortOrder" className="filter-label">
          Sort by Date:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="filter-select"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="jobs-grid">
        {sortedJobs.map((job, idx) => (
          <div className="card-wrapper fade-in" key={idx}>
            <div className="single-blog">
              <div className="image-wrapper zoom-hover">
                <img src={job.image} alt={`job${idx}`} />
              </div>
              <div className="content-wrapper">
                <h4>{job.company}</h4>
                <div className="blog-meta">
                  <p className="blog-meta date-posted">
                    <span>Date Posted: {job.date}</span>
                  </p>
                </div>
                <h2>{job.role}</h2>
                <p className="blog-text">{job.description}</p>
                <p>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                    className="read-more-btn"
                  >
                    Apply Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
