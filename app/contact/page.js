import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> <a href="mailto:coencers.connect@gmail.com">coencers.connect@gmail.com</a></p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/coencers_official" target="_blank" rel="noopener noreferrer">@coencers_official</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/coencers" target="_blank" rel="noopener noreferrer">Coencers</a></p>
      </div>
    </section>
  );
}
