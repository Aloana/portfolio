import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';
import Carousel from '../components/Carousel';

function ProjectsLearningPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pages-container">
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <h2>{t.projects}</h2>
          </div>

          <div className="projects-subsection">
            <h3 className="subsection-title">{t.featured}</h3>
            <Carousel className="featured-carousel">
              <div className="project-item featured-project">
                <div className="project-content">
                  <div className="project-title-group">
                    <h4 className="project-title">{t.mosaico}</h4>
                  </div>
                  <p className="project-description">
                    {t.mosaicoDescription}
                  </p>
                </div>
                <div className="project-tags">
                  <span className="project-tag">React Native</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">TypeScript</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.viewOnGithub}
                  </a>
                </div>
              </div>
              <div className="project-item featured-project">
                <div className="project-content">
                  <div className="project-title-group">
                    <h4 className="project-title">WIP</h4>
                  </div>
                  <p className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="project-tags">
                  <span className="project-tag">Lorem ipsum</span>
                  <span className="project-tag">Lorem ipsum</span>
                  <span className="project-tag">Lorem ipsum</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.viewOnGithub}
                  </a>
                </div>
              </div>
              <div className="project-item featured-project">
                <div className="project-content">
                  <div className="project-title-group">
                    <h4 className="project-title">WIP</h4>
                  </div>
                  <p className="project-description">
                    WIP
                  </p>
                </div>
                <div className="project-tags">
                  <span className="project-tag">WIP</span>
                  <span className="project-tag">WIP</span>
                  <span className="project-tag">WIP</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.viewOnGithub}
                  </a>
                </div>
              </div>
              <div className="project-item featured-project">
                <div className="project-content">
                  <div className="project-title-group">
                    <h4 className="project-title">WIP</h4>
                  </div>
                  <p className="project-description">
                    WIP
                  </p>
                </div>
                <div className="project-tags">
                  <span className="project-tag">WIP</span>
                  <span className="project-tag">WIP</span>
                  <span className="project-tag">WIP</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.viewOnGithub}
                  </a>
                </div>
              </div>
            </Carousel>
          </div>

          <div className="projects-subsection">
            <h3 className="subsection-title">{t.otherProjects}</h3>
            <p className="subsection-description">{t.contributionsDescription}</p>

            <Carousel className="hackathon-carousel">
              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">{t.hackathonTechXPEdition}</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">{t.hackathonTechXPEditionDesc}</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">{t.productManager}</span>
                  <span className="hackathon-role">{t.uiuxDesigner}</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">{t.hackathonSambaWaltz}</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">{t.hackathonSambaWaltzDesc}</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">{t.uiuxDesigner}</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">{t.hackathonNASA}</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">{t.hackathonNASADesc}</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">{t.frontend}</span>
                  <span className="hackathon-role">{t.uiuxDesigner}</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">{t.hackathonOLX}</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">{t.hackathonOLXDesc}</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">{t.uiuxDesigner}</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">{t.hackathonArquivoNacional}</h4>
                  <p className="hackathon-year">2024</p>
                </div>
                <p className="hackathon-description">{t.hackathonArquivoNacionalDesc}</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">{t.productManager}</span>
                  <span className="hackathon-role">{t.uiuxDesigner}</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">{t.hackathonLowHack}</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">{t.hackathonLowHackDesc}</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">{t.productManager}</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">{t.hackathonArtemisia}</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">{t.hackathonArtemisiaDesc}</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">{t.backendDeveloper}</span>
                  <span className="hackathon-role">{t.qa}</span>
                  <span className="hackathon-role">{t.databaseDeveloper}</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">{t.hackathonEPlus}</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">{t.hackathonEPlusDesc}</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">{t.uiuxDesigner}</span>
                  <span className="hackathon-role">{t.backendDeveloper}</span>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Certifications & Courses Section */}
      <section className="certifications-section">
        <div className="certifications-container">
          <h2>{t.learningCertifications}</h2>
          <p className="certifications-description">{t.continuousLearning}</p>

          <div className="certifications-grid">
            <div className="certification-item">
              <h3>{t.databricksFundamentals}</h3>
              <p>{t.databricks}</p>
            </div>

            <div className="certification-item">
              <h3>{t.microsoftAcceleration}</h3>
              <p>{t.dio}</p>
            </div>

            <div className="certification-item">
              <h3>{t.programariaSprint}</h3>
              <p>{t.programaria}</p>
            </div>

            <div className="certification-item">
              <h3>{t.elasJavaBackend}</h3>
              <p>{t.adaTech}</p>
            </div>

            <div className="certification-item">
              <h3>{t.backendJourney}</h3>
              <p>{t.webtech}</p>
            </div>

            <div className="certification-item">
              <h3>{t.techJourneyDevelop}</h3>
              <p>{t.koru}</p>
            </div>

            <div className="certification-item">
              <h3>{t.securityGirls}</h3>
              <p>{t.womakerscode}</p>
            </div>

            <div className="certification-item">
              <h3>{t.googleUXDesign}</h3>
              <p>{t.coursera}</p>
            </div>

            <div className="certification-item">
              <h3>{t.googleProjectManagement}</h3>
              <p>{t.coursera}</p>
            </div>

            <div className="certification-item">
              <h3>{t.googleAIEssentials}</h3>
              <p>{t.coursera}</p>
            </div>

            <div className="certification-item">
              <h3>{t.minicampCloud}</h3>
              <p>{t.xpEducacao}</p>
            </div>

            <div className="certification-item">
              <h3>{t.cc50Harvard}</h3>
              <p>{t.fundacaoEstudar}</p>
            </div>

            <div className="certification-item">
              <h3>{t.digitalEducational}</h3>
              <p>{t.mec}</p>
            </div>

            <div className="certification-item">
              <h3>{t.advancedEducationTech}</h3>
              <p>{t.mec}</p>
            </div>

            <div className="certification-item">
              <h3>{t.webProgrammer}</h3>
              <p>{t.ifrs}</p>
            </div>

            <div className="certification-item">
              <h3>{t.webDesigner}</h3>
              <p>{t.senacMinas}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsLearningPage;
