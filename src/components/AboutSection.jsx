import React from "react";
import "../styles/aboutsection.css";
import harareImage from "../images/meet_the_team.png"; // Update with the correct path

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <p>
          Smart property owners and investors trust our expertise, industry knowledge, and deep local connections.
          Our dedication to seamless property management, leasing, and sales makes us a leading real estate firm in Harare.
        </p>
        <button className="about-button">Meet Our Team</button>
      </div>
      <div className="about-image">
        <img src={harareImage} alt="Harare cityscape" />
      </div>
    </div>
  );
};

export default AboutSection;
