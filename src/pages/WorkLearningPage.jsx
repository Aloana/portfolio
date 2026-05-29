import React from 'react';

function WorkLearningPage() {
  return (
    <div className="pages-container">
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <h2>Projects</h2>
          </div>

          <div className="projects-subsection">
            <h3 className="subsection-title">Featured</h3>
            <div className="projects-list">
              <div className="project-item featured-project">
                <div className="project-content">
                  <div className="project-title-group">
                    <h4 className="project-title">CoChart / Mosaico App</h4>
                  </div>
                  <p className="project-description">
                    Communication and management platform between educational institutions and guardians, developed with TypeScript ecosystem and modern architecture. Built to facilitate real-time communication, event management, and seamless integration between schools and families.
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
            </div>
          </div>

          <div className="projects-subsection">
            <h3 className="subsection-title">Other Projects</h3>
            <p className="subsection-description">Contributions to hackathons and collaborative initiatives</p>
            
            <div className="hackathon-projects">
              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon TechXPEdition</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">[Project description and your contribution to this hackathon project]</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Project Manager</span>
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon Samba Meets Waltz</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">[Project description and your contribution to this hackathon project]</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon NASA Space Apps</h4>
                  <p className="hackathon-year">2023</p>
                </div>
                <p className="hackathon-description">[Project description and your contribution to this hackathon project]</p>
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
                <p className="hackathon-description">[Project description and your contribution to this hackathon project]</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Full-stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Courses Section */}
      <section className="certifications-section">
        <div className="certifications-container">
          <h2>Certifications & Courses</h2>
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

export default WorkLearningPage;
