import React, { useState, useEffect } from 'react';
import { navItems } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        {/* Brand Text Logo "RJ." */}
        <a href="#home" className="logo-rj" aria-label="Rudra Joshi Home">
          <span className="logo-rj-text">RJ</span>
          <span className="logo-rj-dot">.</span>
          <span className="logo-rj-tag">BBA Fintech</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`} id="navMenu">
          <ul className="nav-list">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-cta-mobile">
            <a href="#contact" className="btn btn-primary btn-sm" onClick={closeMobileMenu}>
              Get In Touch
            </a>
          </div>
        </nav>

        {/* Desktop Quick Action & Hamburger Button */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm nav-btn-desktop">
            Get In Touch
          </a>
          <button
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            id="hamburgerBtn"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
