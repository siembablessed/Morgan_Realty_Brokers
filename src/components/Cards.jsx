import { useEffect, useState } from "react";
import "../styles/PropertyCards.css";
import Cardone from "../images/card1_new.png";
import Cardtwo from "../images/card2_new.png";
import Cardthree from "../images/Card3.png";

const PropertyCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".cards-container");
      if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      id: 1,
      image: Cardone,
      title: "Property Management",
      description:
        "We handle everything from maintenance and rent collection to legal compliance, ensuring property owners maximize their investments stress-free.",
      buttonText: "Get Started",
    },
    {
      id: 2,
      image: Cardtwo,
      title: "Tenant Leasing",
      description:
        "We help property owners find reliable tenants and ensure renters enjoy smooth leasing experiences.",
      buttonText: "Find a Tenant",
    },
    {
      id: 3,
      image: Cardthree,
      title: "Property Sales & Investments",
      description:
        "Looking to buy or sell? We provide expert guidance for smooth transactions and profitable investments.",
      buttonText: "View Listings",
    },
  ];

  return (
    <div className={`cards-container ${isVisible ? "show" : ""}`}>
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="card-button">{card.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCards;