import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><a href="#sobre-mim">Sobre mim</a></li>
          <li><a href="#tecnologias">Tecnologias</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
