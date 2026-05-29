import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';

function HomePage() {
  const approaches = [
    {
      icon: '🎯',
      title: 'Results-Driven Approach',
      description: 'Delivering measurable outcomes through strategic planning and meticulous execution.'
    },
    {
      icon: '🔧',
      title: 'Modern Tech Stack',
      description: 'Leveraging cutting-edge technologies and frameworks to build scalable solutions.'
    },
    {
      icon: '⚡',
      title: 'Performance Focused',
      description: 'Optimizing code and architecture for speed, reliability, and user experience.'
    },
    {
      icon: '🌍',
      title: 'Global Mindset',
      description: 'Available across time zones for seamless worldwide collaboration.'
    },
    {
      icon: '💡',
      title: 'Innovative Problem Solving',
      description: 'Tackling complex challenges with creative and practical solutions.'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Building strong partnerships and fostering effective communication.'
    }
  ];

  return (
    <div className="pages-container">
      <section id="home" className="home-section">
        <div className="home-content">
          <h1 className="home-title">
            <LanguageSwitcher />
          </h1>
          <p className="home-subtitle">Developer & Problem Solver</p>
          <p className="home-description">
            Systems Information student at XP Educação and a passionate systems development analyst. I love turning ideas into reality with clean code and coffee.
          </p>
          <div className="home-cta">
            <Link to="/experience-skills" className="btn btn-primary">View My Journey</Link>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      <section id="about" className="intro">
        <div className="intro-content">
          <h2>About Me</h2>
          <p className="intro-description">
            Information Systems student and software professional with a versatile background spanning systems analysis and
            academic research. Expertise in bridging the gap between technical execution and strategic oversight, with a focus
            on Backend Architecture, Quality Assurance, and Database Systems. Proven track record in financial
            systems and a deep interest in the ethical implementation of AI and data privacy.
          </p>

          {/* Approach Cards - Extension of About Section */}
          <div className="approach-cards">
            {approaches.map((approach, index) => (
              <div key={index} className="approach-card">
                <div className="approach-icon">{approach.icon}</div>
                <h3 className="approach-title">{approach.title}</h3>
                <p className="approach-description">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
