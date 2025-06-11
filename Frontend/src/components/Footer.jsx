import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "8:00 AM - 5:00 PM",
    },
  ];

  return (
    <footer className="container">
      <hr />
      <div className="content">
        <div>
          <img src="/city hospital.png" alt="logo" className="logo-img" />
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/appointment"}>Appointment</Link>
            <Link to={"/about"}>About</Link>
          </ul>
        </div>
        <div>
          <h4>Hours</h4>
          <ul>
            {hours.map((element) => (
              <li key={element.id}>
                <span>{element.day}</span>
                <span>{element.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="contact-item">
            <FaPhone />
            <a href="tel:9999999999">999-999-9999</a>
          </div>
          <div className="contact-item">
            <MdEmail />
            <a href="mailto:citylab@gmail.com">ccl@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaLocationArrow />
            <span>Kolkata, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
