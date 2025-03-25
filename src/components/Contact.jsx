import React from "react";
import "../styles/contact.css";
import Contact_Image from "../images/Form.png"

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <h1>Get in touch with an expert</h1>
          <p>
            Connect with us and experience the most reliable,<br /> adaptable, and
            results-driven real estate and property <br /> management services in
            Zimbabwe.
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="NAME" required />
          <input type="email" placeholder="EMAIL ADDRESS" required />
          <input type="tel" placeholder="PHONE NUMBER" required />
          <textarea placeholder="MESSAGE" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={Contact_Image} alt="Real Estate Desk" />
      </div>
    </section>
  );
};

export default ContactSection;
