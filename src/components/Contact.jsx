import "../styles/contact.css"
const ContactSection = () => {
    return (
      <div className="contact-section">
        <div className="contact-text">
          <h2>Get in touch with an expert</h2>
          <p>
            Connect with us and experience the most reliable, adaptable, and results-driven real estate and property management services in Zimbabwe.
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div>
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder=" "></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactSection;
  