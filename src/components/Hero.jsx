import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Column: Introductions & CTAs */}
        <div className="hero-content">
          {/* Availability Badge */}
          <div className="availability-label">
            <span className="availability-pulse-dot"></span>
            <span>{personalInfo.availability}</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">{personalInfo.name}</span>.
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            {personalInfo.title}
          </h2>

          {/* Introduction Paragraph */}
          <p className="hero-intro">
            {personalInfo.intro}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Quick Academic Highlights */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">🏛️</div>
              <div className="stat-info">
                <span className="stat-val">JECRC</span>
                <span className="stat-label">University</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">📈</div>
              <div className="stat-info">
                <span className="stat-val">First Year</span>
                <span className="stat-label">First Semester</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">💡</div>
              <div className="stat-info">
                <span className="stat-val">Fintech & AI</span>
                <span className="stat-label">Core Exploration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Finance & Technology Visual Graphic */}
        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-avatar-wrapper">
              <div className="avatar-placeholder" aria-label="Rudra Joshi Monogram">
                <span className="avatar-initials">RJ</span>
              </div>
              <div className="status-indicator" title="Open to Learning & Networking">
                <span className="status-dot"></span> Active Student
              </div>
            </div>

            <div className="profile-details">
              <h3 className="profile-name">Rudra Joshi</h3>
              <p className="profile-role">BBA Fintech Undergraduate</p>
              <div className="profile-tags">
                <span className="tag">JECRC University</span>
                <span className="tag">Batch 2024–2028</span>
                <span className="tag">Jaipur, India</span>
              </div>
            </div>

            {/* Abstract Financial Technology Chart Graphic */}
            <div className="svg-chart-wrapper">
              <svg viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M 0 80 Q 40 70, 80 50 T 160 45 T 240 25 T 320 15 L 320 100 L 0 100 Z" fill="url(#chartGrad)" />
                <path d="M 0 80 Q 40 70, 80 50 T 160 45 T 240 25 T 320 15" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="80" cy="50" r="4" fill="#0B2545" stroke="#38BDF8" strokeWidth="2" />
                <circle cx="160" cy="45" r="4" fill="#0B2545" stroke="#38BDF8" strokeWidth="2" />
                <circle cx="240" cy="25" r="4" fill="#0B2545" stroke="#38BDF8" strokeWidth="2" />
                <circle cx="320" cy="15" r="4.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </div>

            <div className="profile-card-footer">
              <div className="card-metric">
                <span className="metric-title">Interest Areas</span>
                <span className="metric-desc">Finance • Tech • AI</span>
              </div>
              <div className="card-metric">
                <span className="metric-title">Primary Focus</span>
                <span className="metric-desc">Academic & Applied Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
