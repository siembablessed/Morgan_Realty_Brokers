import React, { useState } from "react";
import "../styles/aboutsection.css";
import harareImage from "../images/meet_the_team.png";
import teamData from "../data/teamData"; // Import team data

const AboutSection = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };

  return (
    <div className="about-container">
      <div className="about-text">
        <p>
          Smart property owners and investors trust our expertise, industry knowledge, and deep local connections.
          Our dedication to seamless property management, leasing, and sales makes us a leading real estate firm in Harare.
        </p>
        <button className="about-button" onClick={() => setShowModal(true)}>
          Meet Our Team
        </button>
      </div>
      <div className="about-image">
        <img src={harareImage} alt="Harare cityscape" />
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span className="close-button" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Our Team</h2>
            <div className="team-grid" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
              {teamData.map((member, index) => (
                <div key={index} className="team-card">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.department}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
