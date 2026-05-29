import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Languages.css';

const LanguageSwitcher = () => {
  const languages = useMemo(() => [
    "Hi, I'm Aloana",
    "Olá, eu sou a Aloana",
    "Hola, soy Aloana",
    "Bonjour, je suis Aloana",
    "Ciao, sono Aloana",
    "Hallo, ich bin Aloana",
  ], []);

  const [displayText, setDisplayText] = useState('');
  const [languageIndex, setLanguageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLanguage = languages[languageIndex];
    const delay = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Digitando
        if (charIndex < currentLanguage.length) {
          setDisplayText(currentLanguage.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Terminou de digitar, aguarde antes de apagar
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Apagando
        if (charIndex > 0) {
          setDisplayText(currentLanguage.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Terminou de apagar, vai para próximo idioma
          setIsDeleting(false);
          setLanguageIndex((prev) => (prev + 1) % languages.length);
          setCharIndex(0);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, languageIndex, isDeleting, languages]);

  return (
    <span className="language-switcher">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default LanguageSwitcher;

