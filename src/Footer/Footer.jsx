import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-column">
          <div className="logo">Your Logo</div>
          <p className="description">A short description about your company short description abo short description abo.</p>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
          <div className="location">
            <FaMapMarkerAlt />
            <span>123 Example St, Hamilton, ON, Canada</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#patient-portal">Patient Portal</a></li>
            <li><a href="#doctors-portal">Doctors Portal</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#appointment">Appointment</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Information</h4>
          <div className="contact-info">
            <div className="contact-item"><FaPhone /> 123-456-7890</div>
            <div className="contact-item"><FaPhone /> 098-765-4321</div>
            <div className="contact-item">
            </div>
            <div className="hours">
            <h4>Hours</h4>
            <span>Monday-Friday : 9:00AM-5:00 PM</span>



            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;