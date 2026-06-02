import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';
import LanguageSelector from './LanguageSelector';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>Aloana</Link>
        </div>
        
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>{t.home}</Link></li>
            <li><Link to="/experience-skills" onClick={closeMenu}>{t.experienceSkills}</Link></li>
            <li><Link to="/projects-learning" onClick={closeMenu}>{t.projectsLearning}</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>{t.contact}</Link></li>
          </ul>
        </nav>

        <LanguageSelector />

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
