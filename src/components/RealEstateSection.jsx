import React, { useState } from "react";
import "../styles/realestatesection.css";
import realEstateImage from "../images/harareimgae.png"; // Update the image path

const RealEstateSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="real-estate-container">
      <div className="real-estate-text">
        <h2>Expert Leasing Solutions for Property Owners & Tenants</h2>
        <p>
          With years of experience in leasing residential and commercial properties, 
          we ensure the right fit for both landlords and tenants. We know that property 
          owners want reliable tenants, and tenants seek a space where they can thrive—
          when both parties win, real estate success follows.
        </p>

        {/* Extra text that is hidden on mobile & tablet */}
        <div className={`extra-text ${isExpanded ? "show" : ""}`}>
          <p>
            Our deep knowledge of Zimbabwe’s property market and our hands-on approach
            make us the trusted partner in leasing. From marketing your property to 
            conducting thorough tenant screenings and handling lease agreements, 
            we streamline the entire process for a stress-free experience.
          </p>
          <p>
            We take pride in matching the right tenants with the right properties, 
            ensuring long-term satisfaction for both landlords and renters. Whether 
            you’re looking to lease out your home, office space, or commercial property, 
            Morgan Realty Brokers provides tailored solutions to meet your needs.
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

export default RealEstateSection;
