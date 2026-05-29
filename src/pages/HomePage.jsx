import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Code2, Zap, Globe, Lightbulb, Users } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';

function HomePage() {
  const approaches = [
    {
      icon: Target,
      title: 'Results-Driven Approach',
      description: 'Delivering measurable outcomes through strategic planning and meticulous execution.'
    },
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'Available across time zones for seamless worldwide collaboration.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Problem Solving',
      description: 'Tackling complex challenges with creative and practical solutions.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Building strong partnerships and fostering effective communication.'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
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
            {approaches.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div key={index} className="approach-card">
                  <div className="approach-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="approach-title">{approach.title}</h3>
                  <p className="approach-description">{approach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section home-contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2>Let's work together</h2>
            <p>Have a project in mind? Feel free to reach out and let's create something amazing together.</p>
          </div>

          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
