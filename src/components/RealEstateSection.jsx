import React, { useState } from "react";
import "../styles/realestatesection.css";
import realEstateImage from "../images/property_leased.png"; // Update the image path

const RealEstateSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="real-estate-container">
      <div className="real-estate-text">
        <h2>Your Trusted Partner in Real Estate & <br /> Property Management</h2>
        <p>
        Whether buying, selling, or leasing, property owners and investors trust us 
        for expert guidance in Zimbabwe’s dynamic real estate market. With deep industry 
        knowledge, a strong local network, and a commitment to excellence, we help our clients 
        make informed decisions that maximize their investments
        </p>

        {/* Extra text that is hidden on mobile & tablet */}
        <div className={`extra-text ${isExpanded ? "show" : ""}`}>
          <p>
          We offer a full-service approach to property management, leasing, and sales—ensuring 
          smooth transactions, reliable tenant placements, and high returns. From marketing your 
          property to handling legal compliance and maintenance, we take care of the details so you can 
          focus on what matters most.
          </p>
          <p>
          With Morgan Realty Brokers, you gain a dedicated team of professionals who understand the market, 
          anticipate challenges, and deliver customized solutions for your real estate needs.
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
