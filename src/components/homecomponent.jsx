import { useEffect, useState } from "react";
import "../styles/homepage.css";
import heroImage from "../images/Rectangle 2.png";

const RealEstateSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".real-estate-section");
      if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`real-estate-section ${isVisible ? "show" : ""}`}>
      <div className="text-content">
        <h2 className="heading">Trusted Property Management & Real Estate Experts</h2>
        <p className="description">
          Managing, leasing, and selling properties with expertise and care. From owners to tenants, we ensure seamless real estate solutions.
        </p>
        <a href="#" className="explore-link">Explore Available Properties →</a>
      </div>
      <div className="image-container">
        <img src={heroImage} alt="City buildings" className="real-estate-image" />
      </div>
    </section>
  );
};

export default RealEstateSection;