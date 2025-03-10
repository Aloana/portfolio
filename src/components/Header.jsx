import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>Sobre mim</li>
          <li>Tecnologias</li>
          <li>Projetos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
