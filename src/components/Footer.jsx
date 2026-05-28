import React from 'react';
import '../styles/Footer.css';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Feel free to reach out and let's create something amazing together.</p>
          
          <a href="mailto:your-email@example.com" className="contact-email">
            your-email@example.com
          </a>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <Twitter size={24} />
            </a>
            <a href="mailto:your-email@example.com" title="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Aloana. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
