import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';
import Carousel from '../components/Carousel';

function ProjectsLearningPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(false);
  const [showAllHackathons, setShowAllHackathons] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const updateViewportState = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewportState();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateViewportState);
      return () => mediaQuery.removeEventListener('change', updateViewportState);
    }

    mediaQuery.addListener(updateViewportState);
    return () => mediaQuery.removeListener(updateViewportState);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setShowAllHackathons(false);
      setShowAllCertifications(false);
    }
  }, [isMobile]);

  const hackathons = [
    {
      title: t.hackathonTechXPEdition,
      description: t.hackathonTechXPEditionDesc,
      year: '2023',
      roles: [t.productManager, t.uiuxDesigner],
    },
    {
      title: t.hackathonSambaWaltz,
      description: t.hackathonSambaWaltzDesc,
      year: '2023',
      roles: [t.uiuxDesigner],
    },
    {
      title: t.hackathonNASA,
      description: t.hackathonNASADesc,
      year: '2023',
      roles: [t.frontend, t.uiuxDesigner],
    },
    {
      title: t.hackathonOLX,
      description: t.hackathonOLXDesc,
      year: '2023',
      roles: [t.uiuxDesigner],
    },
    {
      title: t.hackathonArquivoNacional,
      description: t.hackathonArquivoNacionalDesc,
      year: '2024',
      roles: [t.productManager, t.uiuxDesigner],
    },
    {
      title: t.hackathonLowHack,
      description: t.hackathonLowHackDesc,
      year: '2026',
      roles: [t.productManager],
    },
    {
      title: t.hackathonArtemisia,
      description: t.hackathonArtemisiaDesc,
      year: '2026',
      roles: [t.backendDeveloper, t.qa, t.databaseDeveloper],
    },
    {
      title: t.hackathonEPlus,
      description: t.hackathonEPlusDesc,
      year: '2026',
      roles: [t.uiuxDesigner, t.backendDeveloper],
    },
  ];

  const certifications = [
    { title: t.databricksFundamentals, platform: t.databricks },
    { title: t.microsoftAcceleration, platform: t.dio },
    { title: t.programariaSprint, platform: t.programaria },
    { title: t.elasJavaBackend, platform: t.adaTech },
    { title: t.backendJourney, platform: t.webtech },
    { title: t.techJourneyDevelop, platform: t.koru },
    { title: t.securityGirls, platform: t.womakerscode },
    { title: t.googleUXDesign, platform: t.coursera },
    { title: t.googleProjectManagement, platform: t.coursera },
    { title: t.googleAIEssentials, platform: t.coursera },
    { title: t.minicampCloud, platform: t.xpEducacao },
    { title: t.cc50Harvard, platform: t.fundacaoEstudar },
    { title: t.digitalEducational, platform: t.mec },
    { title: t.advancedEducationTech, platform: t.mec },
    { title: t.webProgrammer, platform: t.ifrs },
    { title: t.webDesigner, platform: t.senacMinas },
  ];

  const visibleHackathons = isMobile && !showAllHackathons ? hackathons.slice(0, 5) : hackathons;
  const visibleCertifications = isMobile && !showAllCertifications ? certifications.slice(0, 5) : certifications;

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
              {visibleHackathons.map((hackathon) => (
                <div className="hackathon-item" key={hackathon.title}>
                  <div className="hackathon-header">
                    <h4 className="hackathon-title">{hackathon.title}</h4>
                    <p className="hackathon-year">{hackathon.year}</p>
                  </div>
                  <p className="hackathon-description">{hackathon.description}</p>
                  <div className="hackathon-roles">
                    {hackathon.roles.map((role) => (
                      <span className="hackathon-role" key={role}>{role}</span>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>

            {isMobile && hackathons.length > 5 && (
              <div className="mobile-section-action">
                <button
                  type="button"
                  className="mobile-more-button"
                  onClick={() => setShowAllHackathons((current) => !current)}
                  aria-expanded={showAllHackathons}
                >
                  {showAllHackathons ? t.viewLess : t.viewMore}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="certifications-section">
        <div className="certifications-container">
          <h2>{t.learningCertifications}</h2>
          <p className="certifications-description">{t.continuousLearning}</p>

          <div className="certifications-grid">
            {visibleCertifications.map((certification) => (
              <div className="certification-item" key={certification.title}>
                <h3>{certification.title}</h3>
                <p>{certification.platform}</p>
              </div>
            ))}
          </div>

          {isMobile && certifications.length > 5 && (
            <div className="mobile-section-action">
              <button
                type="button"
                className="mobile-more-button"
                onClick={() => setShowAllCertifications((current) => !current)}
                aria-expanded={showAllCertifications}
              >
                {showAllCertifications ? t.viewLess : t.viewMore}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProjectsLearningPage;
