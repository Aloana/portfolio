import React from 'react';
import './styles/global.css';
import './styles/Home.css';
import './styles/Languages.css';
import './styles/Header.css';
import './styles/Intro.css';
import './styles/Skills.css';
import './styles/Experience.css';
import './styles/ProjectsList.css';
import './styles/Footer.css';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <a href="#home">Aloana</a>
          </div>
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

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
            <a href="#projects" className="btn btn-primary">View My Work</a>
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
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2>Skills & Technologies</h2>
          </div>

          <div className="skills-subsection">
            <h3 className="subsection-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Quality Assurance (QA)</h3>
                <div className="skill-list">
                  <span className="skill-item">Manual testing</span>
                  <span className="skill-item">Requirements validation</span>
                  <span className="skill-item">Postman</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Back-end Development</h3>
                <div className="skill-list">
                  <span className="skill-item">PHP</span>
                  <span className="skill-item">Java</span>
                  <span className="skill-item">REST APIs</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Database Management</h3>
                <div className="skill-list">
                  <span className="skill-item">MySQL</span>
                  <span className="skill-item">PostgreSQL</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools & Methods</h3>
                <div className="skill-list">
                  <span className="skill-item">Git</span>
                  <span className="skill-item">Agile (Scrum)</span>
                  <span className="skill-item">Figma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subseção de Soft Skills e Idiomas baseada na estrutura de Projects */}
          <div className="skills-subsection">
            <h3 className="subsection-title">Soft Skills & Languages</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-list">
                  <span className="skill-item">English (C1)</span>
                  <span className="skill-item">Spanish (B2)</span>
                  <span className="skill-item">Portuguese (Native)</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="skill-list">
                  <span className="skill-item">Problem Solving</span>
                  <span className="skill-item">Team Collaboration</span>
                  <span className="skill-item">Communication</span>
                  <span className="skill-item">Project Management</span>
                  <span className="skill-item">Quick Learner</span>
                  <span className="skill-item">Analytical Thinking</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="experience-container">
          <div className="experience-header">
            <h2>Professional Experience</h2>
            <p>My journey in software development and system analysis</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <div className="experience-date">May 2024 – May 2025</div>
                <h3 className="experience-title">Systems Development Analyst</h3>
                <p className="experience-company">HBI Sociedade de Crédito Direto</p>
                <p className="experience-description">
                  Developing and maintaining robust backend systems. Specializing in PHP and CodeIgniter 4, creating secure APIs, optimizing database queries, and implementing system improvements that enhance user experience and application performance.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">PHP</span>
                  <span className="experience-tag">CodeIgniter 4</span>
                  <span className="experience-tag">MySQL</span>
                  <span className="experience-tag">REST API</span>
                  <span className="experience-tag">QA</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <div className="experience-date">Oct 2023 – Apr 2024</div>
                <h3 className="experience-title">Systems Development Intern</h3>
                <p className="experience-company">HBI Sociedade de Crédito Direto</p>
                <p className="experience-description">
                  Pursuing comprehensive knowledge in systems development. Learning software architecture, database design, security principles, and best practices in software engineering through hands-on projects and real-world applications.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">PHP</span>
                  <span className="experience-tag">CodeIgniter 4</span>
                  <span className="experience-tag">MySQL</span>
                  <span className="experience-tag">REST API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <h2>Projects</h2>
          </div>

          <div className="projects-subsection">
            <h3 className="subsection-title">Featured Projects</h3>
            <div className="projects-list">
              <div className="project-item featured-project">
                <div className="project-content">
                  <div className="project-title-group">
                    <h4 className="project-title">Mosaico App</h4>
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
                  <span className="hackathon-role">Frontend</span>
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">HackathAN - Arquivo Nacional</h4>
                  <p className="hackathon-year">2024</p>
                </div>
                <p className="hackathon-description">[Project description and your contribution to this hackathon project]</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Project Manager</span>
                  <span className="hackathon-role">Frontend</span>
                  <span className="hackathon-role">UI/UX Designer</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon LOW HACK 2026</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">[Project description and your contribution to this hackathon project]</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Project Manager</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon Artemisia Elas+ Tech</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">[Project description and your contribution to this hackathon project]</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">Back-end Developer</span>
                  <span className="hackathon-role">QA</span>
                </div>
              </div>

              <div className="hackathon-item">
                <div className="hackathon-header">
                  <h4 className="hackathon-title">Hackathon E+</h4>
                  <p className="hackathon-year">2026</p>
                </div>
                <p className="hackathon-description">[Project description and your contribution to this hackathon project]</p>
                <div className="hackathon-roles">
                  <span className="hackathon-role">UI/UX Designer</span>
                  <span className="hackathon-role">Back-end Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? Feel free to reach out and let's create something amazing together.</p>
            
            <a href="mailto:your-email@example.com" className="contact-email">
              your-email@example.com
            </a>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
