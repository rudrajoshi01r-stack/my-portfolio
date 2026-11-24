import React from 'react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Competencies & Knowledge</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A balanced mix of foundational technical software, digital tools, and essential professional skills.
          </p>
        </div>

        <div className="skills-grid">
          {/* Category 1: Technical & Digital Skills */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="cat-icon cat-technical">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <h3 className="category-title">Technical & Digital Skills</h3>
                <span className="category-subtitle">Core software & practical computer capabilities</span>
              </div>
            </div>

            <div className="skill-list">
              {skillsData.technical.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-name-group">
                      <span className="skill-icon-mini">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-level-badge beginner">{skill.level}</span>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: skill.level === 'Beginner' ? '50%' : '75%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Professional Skills */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="cat-icon cat-interpersonal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h3 className="category-title">Professional Skills</h3>
                <span className="category-subtitle">Interpersonal & organizational strengths</span>
              </div>
            </div>

            <div className="skill-list">
              {skillsData.professional.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-name-group">
                      <span className="skill-icon-mini">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-level-badge intermediate">{skill.level}</span>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exploratory Learning Badges */}
        <div className="skills-chips-wrapper">
          <h4 className="chips-title">Active Learning & Exploration Areas:</h4>
          <div className="chips-container">
            <span className="skill-chip">Financial Statements Analysis</span>
            <span className="skill-chip">Spreadsheet Logic & Tables</span>
            <span className="skill-chip">Digital Payment Architecture</span>
            <span className="skill-chip">Prompt Engineering Fundamentals</span>
            <span className="skill-chip">Academic Research & Synthesis</span>
            <span className="skill-chip">Business Presentation Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};
