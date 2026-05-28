import React from 'react';
import Header from './src/components/Header';
import Intro from './src/components/Intro';
import ProjectsList from './src/components/ProjectsList';
import Footer from './src/components/Footer';
import './src/styles/Home.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home" className="home-section">
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Aloana</span>
          </h1>
          <p className="home-subtitle">Developer & Problem Solver</p>
          <p className="home-description">
            Systems Information student at XP Educação and a passionate systems development analyst. I love turning ideas into reality with clean code and coffee ☕. Specialized in back-end development with a focus on PHP and CodeIgniter 4.
          </p>
          <div className="home-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>
      <Intro />
      <ProjectsList />
      <Footer />
    </div>
  );
}

export default App;
