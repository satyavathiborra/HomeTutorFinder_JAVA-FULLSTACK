import React from 'react';
import { Search, Star, Users } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="text-center">
          <h1 className="hero-title">
            Find Your Perfect <span className="highlight">Tutor</span>
          </h1>
          <p className="hero-subtitle">
            Connect with qualified tutors for personalized learning experiences. Choose from a wide range of subjects and expertise levels.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon-wrapper">
              <Search className="feature-icon" />
            </div>
            <h3 className="feature-title">Easy Search</h3>
            <p className="feature-description">Find tutors based on subject, location, and availability</p>
          </div>
          <div className="feature-item">
            <div className="icon-wrapper">
              <Star className="feature-icon" />
            </div>
            <h3 className="feature-title">Verified Tutors</h3>
            <p className="feature-description">All tutors are thoroughly vetted and qualified</p>
          </div>
          <div className="feature-item">
            <div className="icon-wrapper">
              <Users className="feature-icon" />
            </div>
            <h3 className="feature-title">Perfect Match</h3>
            <p className="feature-description">Find the right tutor that matches your learning style</p>
          </div>
        </div>
        <section class="courses-section">
  <div class="courses-grid">
    
    <div class="course-category">
      <h3>Certifications by Issuer</h3>
      <ul>
        <li>Amazon Web Services (AWS) Certifications</li>
        <li>Six Sigma Certifications</li>
        <li>Microsoft Certifications</li>
        <li>Cisco Certifications</li>
        <li>Tableau Certifications</li>
        <li>See all Certifications</li>
      </ul>
    </div>

    <div class="course-category">
      <h3>Web Development</h3>
      <ul>
        <li>Web Development</li>
        <li>JavaScript</li>
        <li>React JS</li>
        <li>Angular</li>
        <li>Java</li>
      </ul>
    </div>

    <div class="course-category">
      <h3>IT Certifications</h3>
      <ul>
        <li>Amazon AWS</li>
        <li>AWS Certified Cloud Practitioner</li>
        <li>AZ-900: Microsoft Azure Fundamentals</li>
        <li>AWS Certified Solutions Architect - Associate</li>
        <li>Kubernetes</li>
      </ul>
    </div>

    <div class="course-category">
      <h3>Leadership</h3>
      <ul>
        <li>Leadership</li>
        <li>Management Skills</li>
        <li>Project Management</li>
        <li>Personal Productivity</li>
        <li>Emotional Intelligence</li>
      </ul>
    </div>

    <div class="course-category">
      <h3>Certifications by Skill</h3>
      <ul>
        <li>Cybersecurity Certification</li>
        <li>Project Management Certification</li>
        <li>Cloud Certification</li>
        <li>Data Analytics Certification</li>
        <li>HR Management Certification</li>
        <li>See all Certifications</li>
      </ul>
    </div>

    <div class="course-category">
      <h3>Data Science</h3>
      <ul>
        <li>Data Science</li>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>ChatGPT</li>
        <li>Deep Learning</li>
      </ul>
    </div>

    <div class="course-category">
      <h3>Communication</h3>
      <ul>
        <li>Communication Skills</li>
        <li>Presentation Skills</li>
        <li>Public Speaking</li>
        <li>Writing</li>
        <li>PowerPoint</li>
      </ul>
    </div>

    <div class="course-category">
      <h3>Business Analytics & Intelligence</h3>
      <ul>
        <li>Microsoft Excel</li>
        <li>SQL</li>
        <li>Microsoft Power BI</li>
        <li>Data Analysis</li>
        <li>Business Analysis</li>
      </ul>
    </div>

  </div>
</section>

      </div>
    </div>
  );
}
