import React from 'react';
import '../styles/Footer.css';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#"><img src={instagram} alt="Instagram" /></a>
        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
      </div>
    </footer>
  );
}

export default Footer;
