import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonials.css";

// Testimonial Data
const testimonials = [
  {
    quote:
      "Morgan Realty Brokers made the entire process seamless! From finding reliable tenants to handling maintenance and rent collection, their professionalism and expertise gave me complete peace of mind. I highly recommend their services to any property owner looking for stress-free management.",
    name: "Tinashe M.",
    title: "Property Owner",
  },
  {
    quote:
      "Fantastic service! The team at Morgan Realty Brokers was always responsive and made sure my rental property was well taken care of. I wouldn’t trust anyone else with my investments.",
    name: "Chenai D.",
    title: "Real Estate Investor",
  },
  {
    quote:
      "Their leasing process is top-notch! They matched me with the perfect tenant and handled all the paperwork smoothly. Highly recommend their team!",
    name: "Farai K.",
    title: "Landlord",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="testimonial-section">
      {/* Background Image */}
      <div className="testimonial-bg"></div>

      {/* Testimonial Container */}
      <div className="testimonial-container">
        {/* Static Text (Left Side) */}
        <div className="testimonial-static">
          <h2>We’re dedicated to our customers’ success</h2>
        </div>

        {/* Sliding Testimonials (Right Side) */}
        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <p className="testimonial-author">— {testimonial.name}, {testimonial.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
