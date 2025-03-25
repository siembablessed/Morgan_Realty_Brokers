import React, { useState } from "react";
import "../styles/leasingsection.css";
import leasingImage from "../images/keys_traded.png"; // Update with correct path

const LeasingSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="leasing-container">
      <div className="leasing-image">
        <img src={leasingImage} alt="Couple moving in with boxes" />
      </div>
      <div className="leasing-text">
        <h2>Expert Leasing Solutions for Property Owners & Tenants</h2>
        <p>
          With years of experience in leasing residential and commercial properties, we
          ensure the right fit for both landlords and tenants. We know that property owners
          want reliable tenants, and tenants seek a space where they can thrive—when both
          parties win, real estate success follows.
        </p>

        {/* Hidden text on mobile & tablet */}
        <div className={`extra-text ${isExpanded ? "show" : ""}`}>
          <p>
            Our deep knowledge of Zimbabwe’s property market and our hands-on approach
            make us the trusted partner in leasing. From marketing your property to
            conducting thorough tenant screenings and handling lease agreements, we
            streamline the entire process for a stress-free experience.
          </p>
          <p>
            We take pride in matching the right tenants with the right properties, ensuring
            long-term satisfaction for both landlords and renters. Whether you're looking to
            lease out your home, office space, or commercial property, Morgan Realty Brokers
            provides tailored solutions to meet your needs.
          </p>
        </div>

        {/* Read More Button (Only shown on mobile & tablet) */}
        <button className="read-more" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>

        <div className="leasing-buttons">
          <a href="#" className="list-property">List Your Property ⟶</a>
          <button className="find-tenant">Find a Tenant</button>
        </div>
      </div>
    </div>
  );
};

export default LeasingSection;
