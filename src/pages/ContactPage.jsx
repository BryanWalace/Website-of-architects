import React from 'react';
import './ContactPage.css';
import Button from '../components/common/Button';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container contact-container">
        <div className="contact-info-wrapper">
          <div className="section-heading">
            <p className="section-subtitle">Contact</p>
            <h1 className="section-title">Information</h1>
          </div>
          <div className="contact-details">
            <p>
              <strong>Company Name</strong><br />
              1234 Sample Street, Austin Texas 76401
            </p>
            <p>
              512.333.2222
            </p>
            <p>
              <a href="mailto:sampleemail@gmail.com">sampleemail@gmail.com</a>
            </p>
          </div>
          <Button text="Contact Us →" variant="primary" />
        </div>
        <div className="contact-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.732997184288!2d-97.7516283848805!3d30.2731949818099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50785a3c961%3A0x117135a42f61250!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1spt-BR!2sbr!4v1628123456789!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;