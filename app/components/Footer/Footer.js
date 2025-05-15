import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Coencers</h3>
        <p>Connecting Brands and Influencers Seamlessly</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/reviews">Reviews</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Coencers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
