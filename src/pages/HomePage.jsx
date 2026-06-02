import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Code2, Zap, Globe, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { StarsBackground } from "../components/StarsBackground";

function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  const approachCardData = [
    {
      icon: Target,
      titleKey: 'resultsDrivenApproach',
      descriptionKey: 'resultsDrivenDescription'
    },
    {
      icon: Globe,
      titleKey: 'globalMindset',
      descriptionKey: 'globalMindsetDescription'
    },
    {
      icon: Lightbulb,
      titleKey: 'innovativeProblemSolving',
      descriptionKey: 'innovativeProblemSolvingDescription'
    },
    {
      icon: Users,
      titleKey: 'teamCollaboration',
      descriptionKey: 'teamCollaborationDescription'
    },
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
      <section id="home" className="home-section" style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0b071a",
        backgroundImage: "radial-gradient(circle at bottom, rgba(147, 51, 234, 0.15) 0%, transparent 60%)"
      }}>
        <StarsBackground
          starCount={1000}
          speed={15}
          starColor="#ffffff"
        />
        <div className="home-content relative z-10">
          <h1 className="home-title">
            <LanguageSwitcher />
          </h1>
          <p className="home-subtitle">{t.homeSubtitle}</p>
          <p className="home-description">
            {t.homeDescription}
          </p>
          <div className="home-cta">
            <Link to="/experience-skills" className="btn btn-primary">{t.viewMyJourney}</Link>
            <Link to="/contact" className="btn btn-secondary">{t.getInTouch}</Link>
          </div>
        </div>
      </section>

      <section id="about" className="intro">
        <div className="intro-content">
          <h2>{t.aboutMe}</h2>
          <p className="intro-description">
            {t.aboutDescription}
          </p>

          <div className="approach-cards">
            {approachCardData.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div key={index} className="approach-card">
                  <div className="approach-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="approach-title">{t[approach.titleKey]}</h3>
                  <p className="approach-description">{t[approach.descriptionKey]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section home-contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2>{t.letWorkTogether}</h2>
            <p>{t.letWorkTogetherDescription}</p>
          </div>

          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.yourName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.yourEmail}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t.subject}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.projectSubject}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.tellAboutProject}
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                {t.sendMessage}
              </button>

              {submitted && (
                <div className="success-message">
                  {t.messageSent}
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
