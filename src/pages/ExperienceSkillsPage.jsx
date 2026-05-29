import React from 'react';

function ExperienceSkillsPage() {
  return (
    <div className="pages-container">
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
                  Quality Assurance and financial systems development with focus on system validation and backend architecture. Specialized in requirements analysis, API testing, and database optimization for secure financial transactions.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">QA</span>
                  <span className="experience-tag">Backend</span>
                  <span className="experience-tag">APIs</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <div className="experience-date">2022 – 2023</div>
                <h3 className="experience-title">Junior Full-Stack Developer</h3>
                <p className="experience-company">Personal Projects</p>
                <p className="experience-description">
                  Built full-stack applications using modern technologies. Developed responsive web applications with React, created backend services with Node.js and Java, and deployed projects on cloud platforms.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">React</span>
                  <span className="experience-tag">Node.js</span>
                  <span className="experience-tag">Java</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-content">
                <div className="experience-date">2021 – Present</div>
                <h3 className="experience-title">Systems Information Student</h3>
                <p className="experience-company">XP Educação</p>
                <p className="experience-description">
                  Pursuing comprehensive knowledge in systems development. Learning software architecture, database design, security principles, and best practices in software engineering through hands-on projects and real-world applications.
                </p>
                <div className="experience-tags">
                  <span className="experience-tag">Software Engineering</span>
                  <span className="experience-tag">Architecture</span>
                  <span className="experience-tag">Learning</span>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
}

export default ExperienceSkillsPage;
