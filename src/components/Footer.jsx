import React from 'react';
import { navItems } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo-rj" aria-label="Rudra Joshi Home">
              <span className="logo-rj-text">RJ</span>
              <span className="logo-rj-dot">.</span>
              <span className="logo-rj-tag">Portfolio</span>
            </a>
            <p className="footer-tagline">
              First-Year BBA Fintech Student at JECRC University, Jaipur.<br />
              Exploring the convergence of Financial Systems, Technology & Innovation.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-meta">
            <h4 className="footer-heading">Academic Program</h4>
            <p className="footer-text">
              <strong>BBA in Financial Technology</strong><br />
              JECRC University Campus<br />
              Jaipur, Rajasthan, India
            </p>
            <div className="back-to-top-wrapper">
              <a href="#home" className="back-to-top-btn" title="Back to Top">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                <span>Back to Top</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rudra Joshi • BBA Fintech • JECRC University. All rights reserved.</p>
          <p className="footer-credits">Designed with a minimal, modern and professional aesthetic.</p>
        </div>
      </div>
    </footer>
  );
};
