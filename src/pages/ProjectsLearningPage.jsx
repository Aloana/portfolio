import React from 'react';
import Carousel from '../components/Carousel';

function ProjectsLearningPage() {
  return (
    <div className="pages-container">
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <h2>Projects</h2>
          </div>

          <div className="projects-subsection">
            <h3 className="subsection-title">Featured</h3>
            <Carousel className="featured-carousel">
              <div className="project-item featured-project">
                <div className="project-content">
                  <div className="project-title-group">
                    <h4 className="project-title">CoChart / Mosaico App</h4>
                  </div>
                  <p className="project-description">
                    Communication and management platform between educational institutions and guardians, built to facilitate real-time communication, event management, and seamless integration between schools and families.
                  </p>
                </div>
                <div className="project-tags">
                  <span className="project-tag">React Native</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">TypeScript</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    View on GitHub →
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
                  <span className="project-tag">WIP</span>
                  <span className="project-tag">WIP</span>
                  <span className="project-tag">WIP</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    View on GitHub →
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
                    View on GitHub →
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
                    View on GitHub →
                  </a>
                </div>
              </div>
            </Carousel>
          </div>

          <div className="projects-subsection">
            <h3 className="subsection-title">Other Projects</h3>
            <p className="subsection-description">Contributions to hackathons and collaborative initiatives</p>
            
            <Carousel className="hackathon-carousel">
              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon TechXPEdition</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">Challenged to create scalable prototypes targeting sustainable educational growth and informed decision-making processes.</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Product Manager</span>
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon Samba Meets Waltz</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">Challenged to develop smart, sustainable mobility solutions to improve transportation efficiency and safety for Austria.</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon NASA Space Apps</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">Developed under the official global theme "Explore Open Science Together," leveraging open-source space data to tackle complex challenges.</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Frontend</span>
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon OLX</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">Challenged to build accessible features to elevate buyer trust and quicken decision-making on pre-owned product platforms.</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">HackathAN - Arquivo Nacional</h4>
                  <p className="hackathon-year">2024</p>
                </div>
                <p className="hackathon-description">Challenged to build collaborative crowdsourcing web applications to engage citizens in the metadata description of historical documents.</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Product Manager</span>
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon LOW HACK 2026</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">Challenged to design scalable enterprise software capable of optimizing manufacturing workflows and market strategy data pipelines.</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Product Manager</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon Artemisia Elas+ Tech</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">Challenged to build a smart financial insights platform integrating Large Language Models (LLMs) to automatically generate data-driven economic profiles.</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Back-end Developer</span>
                  <span className="hackathon-role">QA</span>
                  <span className="hackathon-role">Databasee Developer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon E+</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">Focused on enhancing the Interactive Decarbonization Platform (PID) to turn energy and infrastructure metrics into strategic data-driven decisions.</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">UI/UX Designer</span>
                  <span className="hackathon-role">Back-end Developer</span>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Certifications & Courses Section */}
      <section className="certifications-section">
        <div className="certifications-container">
          <h2>Learning & Certifications</h2>
          <p className="certifications-description">Continuous learning and professional development</p>
          
          <div className="certifications-grid">
            <div className="certification-item">
              <h3>JavaScript & TypeScript Fundamentals</h3>
              <p>Codecademy</p>
              <span className="cert-year">2024</span>
            </div>

            <div className="certification-item">
              <h3>React Advanced Patterns</h3>
              <p>Frontend Masters</p>
              <span className="cert-year">2024</span>
            </div>

            <div className="certification-item">
              <h3>Database Design & Optimization</h3>
              <p>Coursera</p>
              <span className="cert-year">2023</span>
            </div>

            <div className="certification-item">
              <h3>Agile & Scrum Master</h3>
              <p>Scrum Alliance</p>
              <span className="cert-year">2023</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsLearningPage;
