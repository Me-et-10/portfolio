// src/components/About.jsx
import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; // Import the image

function About() {
  return (
    <section id="about" className="about section"> {/* Added id for smooth scrolling */}
      <div className="about-content">
        <div className="profile-image">
          <img src={profileImage} alt="Profile of Meet Patankar" />
        </div>
        <div className="about-text"> {/* Added a container for text */}
          <h2>About Me</h2>
          <p>
          Highly motivated and results-oriented Network Security Specialist with proven expertise in configuration management and Network LAN Administration. 
          Possessing strong troubleshooting skills and technical acumen, I excel at identifying and resolving complex network issues. My experience includes designing, implementing, and maintaining network infrastructures, conducting risk assessments, and developing contingency plans. 
          </p>
          <p>
          As a certified Mile2 Penetration Tester, I am adept at identifying vulnerabilities and implementing robust security measures. 
          I am a strong leader and project manager, consistently delivering projects on time and within budget. 
          I am eager to contribute my skills and experience to a growth-oriented company that offers opportunities for advancement and professional development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;