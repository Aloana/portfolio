import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'TO-DO LIST',
      type: 'API',
      techs: ['PHP 8.0', 'CI4', 'SQL', 'Postman', 'Xampp'],
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    {
      title: 'CRUD',
      type: 'API',
      techs: ['Java', 'Spring Boot', 'SQL', 'Postman', 'Xampp'],
      backgroundColor: '#4b0082',
      textColor: '#ffffff',
    },
    {
      title: 'PORTFOLIO',
      type: 'WEB',
      techs: ['HTML5', 'CSS3', 'JS', 'Astro'],
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
  ];

  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ backgroundColor: project.backgroundColor, color: project.textColor }}
          >
            <h3>{project.type}</h3>
            <h4>{project.title}</h4>
            <ul>
              {project.techs.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <button style={{ color: project.textColor === '#ffffff' ? '#4b0082' : '#ffffff' }}>
              Acessar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
