import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './styles/global.css';
import './styles/Home.css';
import './styles/Languages.css';
import './styles/Header.css';
import './styles/Intro.css';
import './styles/Skills.css';
import './styles/Experience.css';
import './styles/ProjectsList.css';
import './styles/Carousel.css';
import './styles/Contact.css';
import './styles/Footer.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExperienceSkillsPage from './pages/ExperienceSkillsPage';
import ProjectsLearningPage from './pages/ProjectsLearningPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience-skills" element={<ExperienceSkillsPage />} />
            <Route path="/projects-learning" element={<ProjectsLearningPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
