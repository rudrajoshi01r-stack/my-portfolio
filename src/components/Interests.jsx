import React from 'react';
import { areasOfInterestData } from '../data/portfolioData';

export const Interests = () => {
  return (
    <section className="section interests-section" id="interests">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Focus & Curiosity</span>
          <h2 className="section-title">Areas of Interest</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Core domains at the intersection of modern finance, business management, and computational technology.
          </p>
        </div>

        <div className="interests-grid">
          {areasOfInterestData.map((item) => (
            <div key={item.id} className="interest-card">
              <div className="interest-icon-box" aria-hidden="true">
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              </div>
              <h3 className="interest-title">{item.title}</h3>
              <p className="interest-desc">{item.desc}</p>
              <div className="interest-tag">
                <span>{item.tag}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
