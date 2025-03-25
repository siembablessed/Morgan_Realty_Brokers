import React from "react";
import "../styles/footer.css"; 
import LogoImage from "../images/LOGO.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Socials */}
        <div className="footer-section">
          <img src={LogoImage} alt="Morgan Realty Brokers" className="footer-logo" />
          <p className="footer-title">Follow us on</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Address & Contact */}
        <div className="footer-section">
          <h3 className="footer-heading">Address</h3>
          <p>149 The Chase, Mt Pleasant</p>
          <h3 className="footer-heading">Contact Us</h3>
          <p>Call Us: <span className="footer-bold">+263 776066503 / 0783318558</span></p>
          <p>example@gmail.com</p>
        </div>

        {/* Information */}
        <div className="footer-section">
          <h3 className="footer-heading">Information</h3>
          <ul className="footer-links">
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Tenant Resources</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Helpful Links</h3>
          <ul className="footer-links">
            <li><a href="#">Property Management</a></li>
            <li><a href="#">Tenant Leasing</a></li>
            <li><a href="#">Property Sales</a></li>
            <li><a href="#">Maintenance Services</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; 2025 Morgan Realty Brokers
      </div>
    </footer>
  );
};

export default Footer;
