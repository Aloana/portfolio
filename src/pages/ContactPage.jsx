import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';
import '../styles/Contact.css';

function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

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
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pages-container">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h1>{t.contactPageTitle}</h1>
            <p>{t.contactPageDescription}</p>
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

export default ContactPage;
