import React from "react";
import "../styles/homesetcionnew.css"; // Import the CSS file

const HomeSection = () => {
  return (
    <div className="home-section">
      {/* White Section with Text */}
      <div className="text-section">
        <h1>Trusted Property Management & Real Estate Experts</h1>
        <p>
          Managing, leasing, and selling properties with expertise and care.
          From owners to tenants, we <br /> ensure seamless real estate solutions.
        </p>
        <a href="/properties" className="explore-link">
          Explore Available Properties →
        </a>
      </div>

      {/* Full-Width Parallax Background Section */}
      <div className="parallax-section"></div>
    </div>
  );
};

export default HomeSection;
