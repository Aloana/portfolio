import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../styles/ProjectsList.css';

export default function ProjectsList() {
  const projects = [
    {
      title: "Mosaico App",
      description: "Communication and management platform between educational institutions and guardians, developed with TypeScript ecosystem and modern architecture.",
      tags: ["React Native", "Node.js", "TypeScript"],
      link: "#"
    },
    {
      title: "VerseLens",
      description: "Intelligent system for analyzing social and semantic impact in musical compositions, using structured API integrations.",
      tags: ["Java", "Spring Boot", "REST API"],
      link: "#"
    },
    {
      title: "EcoScore",
      description: "Corporate analytical tool focused on ESG metrics and sustainability, accompanied by rigorous technical documentation.",
      tags: ["Full-Stack", "Ecology Tech", "ESG Metrics"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A selection of my recent work and personal projects</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              key={index}
              className="project-item"
            >
              <div className="project-content">
                <div className="project-title-group">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={20} className="project-icon" />
                </div>
                <p className="project-description">
                  {project.description}
                </p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="project-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}