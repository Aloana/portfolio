import React from 'react';
import '../styles/Intro.css';

function Intro() {
  return (
    <section id="about" className="intro">
      <div className="intro-content">
        <h1 className="intro-title">
          Hi, I'm <span className="highlight">Aloana</span>
        </h1>
        <p className="intro-subtitle">
          Developer & Problem Solver
        </p>
        <p className="intro-description">
          Systems Information student at XP Educação and a passionate systems development analyst. I love turning ideas into reality with clean code and coffee. Specialized in back-end development with a focus on PHP and CodeIgniter 4.
        </p>
        <div className="intro-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
