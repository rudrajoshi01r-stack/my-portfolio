import React from 'react';
import { projectsData } from '../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Student Portfolio Gallery</span>
          <h2 className="section-title">Academic & Practice Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Curated student coursework and practice projects showcasing hands-on application of technology and data concepts.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              {/* Project Card Banner */}
              <div className={`project-card-banner ${project.bannerClass}`}>
                <span className="project-category-badge">{project.category}</span>
                <div className="project-banner-icon">{project.bannerIcon}</div>
              </div>

              {/* Project Card Body */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDescription}</p>

                <div className="project-tools">
                  <span className="tool-label">Tools Used:</span>
                  <div className="tool-chips">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="tool-badge">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <button
                    className="project-btn"
                    onClick={() => onSelectProject(project)}
                    aria-label={`View details of ${project.title}`}
                  >
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
