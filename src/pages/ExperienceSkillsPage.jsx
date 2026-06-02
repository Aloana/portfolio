import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';

function ExperienceSkillsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pages-container">
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <div className="experience-header">
            <h2>{t.professionalExperience}</h2>
            <p>{t.myJourney}</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <div className="experience-date">May 2024 – May 2025</div>
                <h3 className="experience-title">{t.systemsDevelopmentAnalyst}</h3>
                <p className="experience-company">{t.hbi}</p>
                <p className="experience-description">
                  {t.experienceDescription1}
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">QA</span>
                  <span className="experience-tag">Backend</span>
                  <span className="experience-tag">APIs</span>
                  <span className="experience-tag">Databases</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <div className="experience-date">Oct 2023 – Apr 2024</div>
                <h3 className="experience-title">{t.systemsDevelopmentIntern}</h3>
                <p className="experience-company">{t.hbi}</p>
                <p className="experience-description">
                  {t.experienceDescription2}
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">Backend</span>
                  <span className="experience-tag">APIs</span>
                  <span className="experience-tag">Databases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2>{t.skillsAndTechnologies}</h2>
          </div>

          <div className="skills-subsection">
            <h3 className="subsection-title">{t.technicalSkills}</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>{t.qualityAssurance}</h3>
                <div className="skill-list">
                  <span className="skill-item">{t.manualTesting}</span>
                  <span className="skill-item">{t.requirementsValidation}</span>
                  <span className="skill-item">{t.postman}</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>{t.backendDevelopment}</h3>
                <div className="skill-list">
                  <span className="skill-item">{t.php}</span>
                  <span className="skill-item">{t.java}</span>
                  <span className="skill-item">{t.restApis}</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>{t.databaseManagement}</h3>
                <div className="skill-list">
                  <span className="skill-item">{t.mysql}</span>
                  <span className="skill-item">{t.postgresql}</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>{t.toolsAndMethods}</h3>
                <div className="skill-list">
                  <span className="skill-item">{t.git}</span>
                  <span className="skill-item">{t.agile}</span>
                  <span className="skill-item">{t.figma}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-subsection">
            <h3 className="subsection-title">{t.softSkillsAndLanguages}</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>{t.languages}</h3>
                <div className="skill-list">
                  <span className="skill-item">{t.englishLevel}</span>
                  <span className="skill-item">{t.spanishLevel}</span>
                  <span className="skill-item">{t.portugueseLevel}</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>{t.softSkills}</h3>
                <div className="skill-list">
                  <span className="skill-item">{t.problemSolving}</span>
                  <span className="skill-item">Team Collaboration</span>
                  <span className="skill-item">{t.communication}</span>
                  <span className="skill-item">{t.projectManagement}</span>
                  <span className="skill-item">{t.quickLearner}</span>
                  <span className="skill-item">{t.analyticalThinking}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExperienceSkillsPage;
