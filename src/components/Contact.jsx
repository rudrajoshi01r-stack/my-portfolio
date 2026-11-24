import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Contact = ({ onToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
      .then(() => {
        onToast('Email placeholder copied to clipboard!');
      })
      .catch(() => {
        onToast(`Email: ${personalInfo.email}`);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onToast(`Thank you, ${formData.name.trim()}! Your message has been received.`);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
    }, 600);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Networking & Inquiries</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Open to academic discussions, internship opportunities, student projects, and fintech conversations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Placeholders */}
          <div className="contact-info-panel">
            <h3 className="contact-heading">Connect Directly</h3>
            <p className="contact-lead">
              I am eager to connect with professors, mentors, fellow students, and fintech practitioners. Please reach out via email or LinkedIn!
            </p>

            <div className="contact-card-list">
              {/* Email Card */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <span className="contact-label">Email Placeholder</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact-value" id="emailDisplay">
                    {personalInfo.email}
                  </a>
                  <span className="contact-hint">(Click to mail or copy)</span>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <span className="contact-label">LinkedIn Profile Placeholder</span>
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    linkedin.com/in/rudra-joshi-placeholder
                  </a>
                  <span className="contact-hint">(Professional Network Placeholder)</span>
                </div>
              </div>

              {/* University Location */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <span className="contact-label">University Campus</span>
                  <p className="contact-value-static">
                    JECRC University, Ramchandrapura, Sitapura Industrial Area Extension, Jaipur, Rajasthan 303905
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-form-panel">
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-subtext">Fill in the fields below and I will get back to you promptly.</p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="userName" className="form-label">
                  Your Name <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="userName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Alex Morgan"
                    required
                  />
                </div>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="userEmail" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="userEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. alex@example.com"
                    required
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="userMessage" className="form-label">
                  Your Message <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <textarea
                    id="userMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="form-textarea"
                    placeholder="Hello Rudra! I'd like to connect regarding..."
                    required
                  ></textarea>
                </div>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>

            {isSuccess && (
              <div className="form-success-alert" style={{ display: 'flex' }}>
                <div className="alert-icon">✓</div>
                <div className="alert-body">
                  <strong>Thank you!</strong> Your message has been received. This simulated student portfolio response has been recorded successfully!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
