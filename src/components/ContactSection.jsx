import React from 'react';
import './ContactSection.css';
import Button from './common/Button';

import contactImage from '../assets/images/contact-person.jpg';

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulário enviado!');
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <div className="section-heading">
              <h2 className="section-title">Contact Us</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Telephone No." />
              <textarea placeholder="Message" rows="5" required></textarea>
              <Button text="Send a Request →" variant="primary" type="submit" />
            </form>
          </div>
          <div className="contact-image-wrapper">
            <img src={contactImage} alt="Person on the phone" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;