import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            An overview of my academic background, areas of curiosity, and commitment to continuous growth.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative Content */}
          <div className="about-text-content">
            <h3 className="about-heading">
              First-Year BBA Fintech Student at JECRC University
            </h3>
            
            <p className="about-para">
              {personalInfo.about}
            </p>

            <p className="about-para">
              As an undergraduate at <strong>JECRC University</strong>, I am actively building a solid grounding in financial analysis, modern management principles, and the digital tools shaping corporate decision-making. I believe that integrating technology into finance creates powerful opportunities to simplify transactions, reduce costs, and broaden financial inclusion.
            </p>

            <p className="about-para">
              My immediate objective is to excel in my university coursework while independently engaging in hands-on practice projects, building data modeling literacy in Microsoft Excel, and exploring how AI tools can assist in research and strategic problem solving.
            </p>

            {/* Vision & Personal Goals Box */}
            <div className="goal-box">
              <div className="goal-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
              </div>
              <div className="goal-text">
                <strong>Personal Development Goal:</strong> To build strong quantitative and technical foundations that bridge financial literacy, modern business management, and practical software applications for future career and internship opportunities.
              </div>
            </div>
          </div>

          {/* Right Column: Visual Core Pillars */}
          <div className="about-pillars">
            {/* Academic Background Card */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="pillar-info">
                <h4>Academic Background</h4>
                <p>Enrolled in the BBA Fintech program at JECRC University, focusing on business administration, accounting principles, and financial technology.</p>
              </div>
            </div>

            {/* Areas of Interest Card */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="pillar-info">
                <h4>Areas of Interest</h4>
                <p>Passionate about financial systems, corporate management, digital banking solutions, and how technology optimizes business workflows.</p>
              </div>
            </div>

            {/* Interest in Emerging Technologies */}
            <div className="pillar-card">
              <div className="pillar-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="10" y1="17" x2="14" y2="17"></line>
                </svg>
              </div>
              <div className="pillar-info">
                <h4>Emerging Technologies</h4>
                <p>Enthusiastic about artificial intelligence tools, digital payment infrastructure, and data-driven computational methods in business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
