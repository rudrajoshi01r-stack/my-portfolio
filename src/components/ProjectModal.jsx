import React, { useEffect } from 'react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay active"
      id="projectModal"
      aria-hidden="false"
      onClick={(e) => {
        if (e.target.id === 'projectModal') {
          onClose();
        }
      }}
    >
      <div className="modal-dialog">
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          &times;
        </button>

        <div className="modal-header">
          <span className="modal-tag">{project.category}</span>
          <h3 className="modal-title">{project.title}</h3>
        </div>

        <div className="modal-body">
          <h4>Project Overview:</h4>
          <p>{project.fullDetails.overview}</p>

          <h4>Key Objectives & Implementation:</h4>
          <ul>
            {project.fullDetails.objectives.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h4>Tools & Technologies Applied:</h4>
          <p>{project.fullDetails.technologiesUsed}</p>

          <h4>Key Learning Outcomes:</h4>
          <p>{project.fullDetails.learningOutcomes}</p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
