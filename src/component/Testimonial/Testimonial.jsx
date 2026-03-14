import React, { useState } from "react";
import "./testimonial.css";

const testimonials = [
  {
    text: "Explore BO's behind-the-scenes impact when we lowered the CAC from INR 9,960 to INR 4,500 through strategic digital marketing.",
    company: "Candere | Kalyan Jewellers",
    subtitle: "A Kalyan Jewellers Company",
    logo: "/candere.png",
  },
  {
    text: "BeeOnline helped us increase our conversions drastically with powerful marketing strategies.",
    company: "TechNova",
    subtitle: "Digital Company",
    logo: "/logo2.png",
  },
  {
    text: "Amazing results and superb performance from their marketing team. Explore BO's behind-the-scenes impact when we lowerd",
    company: "ShopHub",
    subtitle: "Ecommerce Brand",
    logo: "/logo3.png",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">

        {/* Left Content */}

        <div className="testimonial-left">
          <h2>Our Testimonial</h2>
          <p>A SYMPHONY OF SATISFIED VOICES!</p>
        </div>

        {/* Right Content */}

        <div className="testimonial-right">

          <div className="quote">❝</div>

          <h3>Superb Work! Amazing Performance!</h3>

          <p className="testimonial-text">
            {testimonials[index].text}
          </p>

          <hr />

          <div className="company-info">
            <img src="/kalyan.png" alt="logo" />
            <div>
              <h4>{testimonials[index].company}</h4>
              <p>{testimonials[index].subtitle}</p>
            </div>
          </div>

          {/* Navigation */}

          <div className="testimonial-nav">
            <button onClick={prev}>←</button>
            <span>
              {index + 1}/{testimonials.length}
            </span>
            <button onClick={next}>→</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Testimonial;