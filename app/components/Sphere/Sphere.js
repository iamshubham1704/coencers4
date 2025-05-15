import React from 'react';
import './Sphere.css';

export default function Sphere() {
  return (
    <div className="sphere-wrapper">
      <div className="sphere">COENCERS</div>

      <div className="orbit orbit1">
        <img src="/facebook.png" className="orbit-icon" alt="Facebook" />
        <img src="/google.png" className="orbit-icon" alt="Google" />
        <img src="/youtube.png" className="orbit-icon" alt="YouTube" />
        <img src="/instagram.png" className="orbit-icon" alt="Instagram" />
        <img src="/linkdin.png" className="orbit-icon" alt="LinkedIn" />
      </div>
    </div>
  );
}
