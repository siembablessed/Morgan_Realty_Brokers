import React, { useState } from "react";
import "../styles/homesetcionnew.css";
import House1 from "../images/house.jpg"
import HouseKitchen from "../images/kitchen.jpg"
import HouseDinning from "../images/Dinning.jpg"

const properties = [
  {
    id: 1,
    title: "Tynwald 2 Bedrooms",
    price: "$1200/mo",
    location: "Tynwald North Area",
    size: "1200 sqft",
    bedrooms: 2,
    bathrooms: 2,
    images: [HouseDinning, HouseKitchen, House1]
  },
  {
    id: 2,
    title: "Cozy Family House",
    price: "$1500/mo",
    location: "Suburban Area",
    size: "2000 sqft",
    bedrooms: 3,
    bathrooms: 2,
    images: [House1, HouseKitchen, HouseDinning]
  }
];

const HomeSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const handlePopup = (property) => {
    setSelectedProperty(property);
    setIsPopupOpen(true);
    setActiveImage(0);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="home-section">
      <div className="text-section">
        <h1>Trusted Property Management & Real Estate Experts</h1>
        <p>
          Managing, leasing, and selling properties with expertise and care.
          From owners to tenants, we <br /> ensure seamless real estate solutions.
        </p>
        <span
          className="explore-link"
          onClick={() => handlePopup(properties[0])}
        >
          Explore Available Properties →
        </span>
      </div>

      <div className="parallax-section"></div>

      {isPopupOpen && selectedProperty && (
        <div className="popup-overlay active" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProperty.title}</h2>
            <div className="property-card">
              <div className="property-gallery">
                <img
                  src={selectedProperty.images[activeImage]}
                  alt="property"
                />
                <div className="property-carousel">
                  {selectedProperty.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setActiveImage(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="property-details">
                <p>📍 Location: {selectedProperty.location}</p>
                <p>📏 Size: {selectedProperty.size}</p>
                <p>🛏️ Bedrooms: {selectedProperty.bedrooms}</p>
                <p>🛁 Bathrooms: {selectedProperty.bathrooms}</p>
                <p>💰 Price: {selectedProperty.price}</p>
              </div>
            </div>
            <span className="popup-close" onClick={closePopup}>
              Close
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSection;
