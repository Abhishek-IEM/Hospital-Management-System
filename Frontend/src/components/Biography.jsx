import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          CityCare Medical Institute is a trusted center of healthcare
          excellence, dedicated to delivering compassionate, cutting-edge
          medical services to individuals and families. Rooted in integrity,
          expertise, and empathy, we believe that every patient deserves
          personalized care that not only treats illness but nurtures overall
          well-being.
        </p>
        <p>
          Our team comprises skilled doctors, nurses, specialists, and
          healthcare staff who bring experience, innovation, and a deep
          commitment to healing. Whether it's preventive care, critical
          treatment, or long-term recovery, we stand by our patients every step
          of the way — with dignity, respect, and compassion.
        </p>
        <p>At CityCare, your health is our mission.</p>
      </div>
    </div>
  );
};

export default Biography;
