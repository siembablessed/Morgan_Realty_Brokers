import React, { useState } from "react";
import "../styles/homesetcionnew.css";
import House1 from "../images/house.jpg";
import Housekitchen from "../images/kitchen.jpg";
import Housedinning from "../images/Dinning.jpg";

const properties = [
  {
    id: 1,
    title: "Madokero Apartment",
    price: "$1200/mo",
    location: "Modekero Area, Westgate",
    size: "1200 sqft",
    bedrooms: 2,
    bathrooms: 2,
    images: [House1, Housekitchen, Housedinning],
  },
  {
    id: 2,
    title: "Acadia Mansion",
    price: "$1500/mo",
    location: "Acadia, Zimbabwe",
    size: "2000 sqft",
    bedrooms: 3,
    bathrooms: 2,
    images: [House1, Housekitchen, Housedinning],
  },
];

const HomeSection = () => {
  const [isPropertyPopupOpen, setIsPropertyPopupOpen] = useState(false);
  const [isDetailsPopupOpen, setIsDetailsPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openPropertyPopup = () => {
    setIsPropertyPopupOpen(true);
  };

  const closePropertyPopup = () => {
    setIsPropertyPopupOpen(false);
  };

  const openDetailsPopup = (property) => {
    setSelectedProperty(property);
    setIsDetailsPopupOpen(true);
    setActiveImage(0);
    closePropertyPopup();
  };

  const closeDetailsPopup = () => {
    setIsDetailsPopupOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="home-section">
      <div className="text-section">
        <h1>Trusted Property Management & Real Estate Experts</h1>
        <p>
          Managing, leasing, and selling properties with expertise and care.
          From owners to tenants, we ensure seamless real estate solutions.
        </p>
        <span className="explore-link" onClick={openPropertyPopup}>
          Explore Available Properties →
        </span>
      </div>

      <div className="parallax-section"></div>

      {isPropertyPopupOpen && (
        <div className="property-popup-overlay active" onClick={closePropertyPopup}>
          <div className="property-popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Select a Property</h2>
            <div className="property-list">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="property-card"
                  onClick={() => openDetailsPopup(property)}
                >
                  <img src={property.images[0]} alt={property.title} />
                  <h3>{property.title}</h3>
                  <p>{property.price}</p>
                </div>
              ))}
            </div>
            <span className="popup-close" onClick={closePropertyPopup}>Close</span>
          </div>
        </div>
      )}

      {isDetailsPopupOpen && selectedProperty && (
        <div className="popup-overlay active" onClick={closeDetailsPopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="property-gallery">
              <img src={selectedProperty.images[activeImage]} alt="property" />
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
              <h2>{selectedProperty.title}</h2>
              <p>📍 Location: {selectedProperty.location}</p>
              <p>📏 Size: {selectedProperty.size}</p>
              <p>🛏️ Bedrooms: {selectedProperty.bedrooms}</p>
              <p>🛁 Bathrooms: {selectedProperty.bathrooms}</p>
              <p>💰 Price: {selectedProperty.price}</p>
            </div>
            <span className="popup-close" onClick={closeDetailsPopup}>Close</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSection;
