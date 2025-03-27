import React, { useState } from "react";
import "../styles/realestatesection.css";
import realEstateImage from "../images/Missions.png"; 

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="real-estate-container">
      <div className="real-estate-text">
        <h2>About Us</h2>
        <p>
        Morgan Realty Brokers Property Consultant is a trusted real estate and property management firm dedicated to providing seamless property solutions. We specialize in managing residential and commercial properties, connecting landlords with reliable tenants, and offering expert real estate advisory services.
        </p>

        {/* Extra text that is hidden on mobile & tablet */}
        <div className={`extra-text ${isExpanded ? "show" : ""}`}>
          <p>
          With a deep understanding of Zimbabwe’s real estate market, we help property owners maximize their investments while ensuring tenants find secure and comfortable spaces to call home. Our hands-on approach, professionalism, and commitment to excellence set us apart in the industry.
          </p>
        </div>

        {/* Read More Button - Only Visible on Mobile & Tablet */}
        <button className="read-more" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Image */}
      <div className="real-estate-image">
        <img src={realEstateImage} alt="Real Estate Management" />
      </div>
    </div>
  );
};

export default AboutUs;
