import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          CityCare Medical Institute is a modern healthcare hub devoted to
          excellence in patient care, cutting-edge treatment, and compassionate
          service. Our dedicated medical professionals work tirelessly to ensure
          every individual receives tailored care in a safe, respectful, and
          healing environment. At CityCare, your health is our mission — we walk
          with you every step of your wellness journey
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
