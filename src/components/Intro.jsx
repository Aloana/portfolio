import React from 'react';
import '../styles/Intro.css';
import placeholderImage from '../assets/placeholder-image.png'; // Imagem de exemplo

function Intro() {
  return (
    <div className="intro">
      <img src={placeholderImage} alt="Minha foto" className="image-placeholder" />
      <div className="text">
        <h1>Olá, eu sou a Aloana</h1>
        <p>
          Aluna de Sistemas de Informação na XP Educação e analista de desenvolvimento de sistemas,
          aquela que adora resolver problemas com linhas de código e um pouco de café! Minha especialidade é o desenvolvimento back-end, com foco em PHP e CodeIgniter 4 (CI4).
        </p>
        <p>Dá uma olhada nos meus projetos e veja como transformo ideias em realidade!</p>
      </div>
    </div>
  );
}

export default Intro;
