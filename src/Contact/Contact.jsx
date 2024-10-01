import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="inside-vector-wrap">
            <img src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e13f750e419cee597826_Inside-vector-semi-small.svg" alt="Vector" className="inside-vector-semi-small" />
            <img src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9de018f2da12e347fcd04_Inside-vector-small.svg" alt="Vector" className="inside-vector-small" />
            <img src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e204960864bf2bf89d45_Inside-vector-medium.svg" alt="Vector" className="inside-vector-medium" />
            <img src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e2c5ec86042bc9b16610_Inside-vector-large.svg" alt="Vector" className="inside-vector-large" />
            <img src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e4d5c6aa622c9820a98d_Inside-vector-semi-large.svg" alt="Vector" className="inside-vector-semi-large" />
          </div>
        </div>
      </div>

      <div className='content'>
         <h1>Reach Out for Health and Wellness <br></br>
                   Assistance Today!</h1>
      </div>
      <div class= "box-container">
        <div class="box-1">
        <img src={require('../Asset/location-logo.png')} alt="Location" />
         <h2>Office location</h2>
         <p>123 Example St, Hamilton,<br></br>ON Canada</p>
        </div>
        <div class="box-2">
        <img src={require('../Asset/cell-logo.png')} alt="Location" />
        <h2>Phone Number</h2>
        <p>123-456-7890<br></br> 098-765-4321</p>
        </div>  
        <div class="box-3">
        <img src={require('../Asset/email-logo.png')} alt="Location" />
        <h2>Email</h2>
        <p>medicare@gmail.com<br></br>emergencyM@gmail.com</p>
        </div>
      </div>

      <div className="contact-button-container">
      <button className="get-in-touch-btn">Get in Touch</button>
     </div>

     <div className="map-container">
    <iframe
      title="Conestoga College Brantford Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.1230178987556!2d-80.25694168451985!3d43.13938697914262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c79b31e792d55%3A0x7cdb77bc3e9ae43!2sConestoga%20College%20-%20Brantford%20Campus!5e0!3m2!1sen!2sca!4v1696174893215!5m2!1sen!2sca"
      width="600"
      height="450"
      style={{ border: 0, width: '100%', height: '300px', borderRadius: '10px' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
    </div>
  );
};

export default Contact;
