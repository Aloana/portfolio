import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import '../styles/LanguageSelector.css';

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' }
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false);
    // Aqui você pode disparar uma ação para mudar o idioma do site
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: code } }));
  };

  return (
    <div className="language-selector">
      <button 
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <Globe size={20} />
        <span>{selectedLanguage.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${selectedLanguage === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
