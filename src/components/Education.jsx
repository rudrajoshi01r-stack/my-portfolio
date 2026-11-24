import React from 'react';
import { educationInfo } from '../data/portfolioData';

export const Education = () => {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Formal university degree and foundational coursework at JECRC University.
          </p>
        </div>

        <div className="education-card-wrapper">
          <div className="edu-card main-edu-card">
            <div className="edu-header">
              <div className="edu-badge-icon" aria-label="Education Icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="edu-title-group">
                <span className="edu-timeline">{educationInfo.timeline}</span>
                <h3 className="edu-degree">{educationInfo.degree} – Fintech</h3>
                <h4 className="edu-institution">{educationInfo.institution}, {educationInfo.location}</h4>
              </div>
            </div>

            <div className="edu-body">
              <div className="edu-meta-grid">
                <div className="meta-box">
                  <span className="meta-title">University</span>
                  <span className="meta-value">{educationInfo.institution}</span>
                </div>
                <div className="meta-box">
                  <span className="meta-title">Degree & Program</span>
                  <span className="meta-value">BBA Fintech</span>
                </div>
                <div className="meta-box">
                  <span className="meta-title">Academic Year</span>
                  <span className="meta-value">First Year</span>
                </div>
                <div className="meta-box">
                  <span className="meta-title">Current Semester</span>
                  <span className="meta-value">First Semester</span>
                </div>
              </div>

              <div className="edu-courses">
                <h4 className="courses-heading">Current Semester Core Subjects & Foundations:</h4>
                <div className="courses-tags">
                  {educationInfo.coursework.map((course, idx) => (
                    <span key={idx} className="course-chip">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="edu-highlights">
                {educationInfo.academicGoals.map((goal, idx) => (
                  <div key={idx} className="highlight-bullet">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
