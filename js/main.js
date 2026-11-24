/**
 * Rudra Joshi - Personal Portfolio Website
 * First-Year BBA Fintech Student | JECRC University
 * Interactive JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Core DOM Elements
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailDisplay = document.getElementById('emailDisplay');
  const toastContainer = document.getElementById('toastContainer');

  // Modal Elements
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalTag = document.getElementById('modalTag');
  const modalBody = document.getElementById('modalBody');

  // 2. Academic Project Data Dictionary
  const projectDetails = {
    'sports-fitness': {
      category: 'Student Practice Project • Web Design & Development',
      title: 'Sports & Fitness Portfolio Website',
      content: `
        <h4>Project Description:</h4>
        <p>A responsive website project exploring sports, fitness and healthy lifestyle information.</p>
        
        <h4>Tools & Technologies Applied:</h4>
        <ul>
          <li><strong>Google Antigravity:</strong> Cloud-based developer workspace and development environment.</li>
          <li><strong>HTML5:</strong> Semantic web structure with accessible tags and clear section hierarchy.</li>
          <li><strong>CSS3:</strong> Custom styling featuring modern typography, flexbox/grid layouts, smooth animations, and mobile-first responsiveness.</li>
          <li><strong>JavaScript:</strong> Lightweight client-side scripts for dynamic navigation, interactive elements, and user controls.</li>
        </ul>

        <h4>Key Features & Architecture:</h4>
        <ul>
          <li><strong>Responsive Design:</strong> Fluid adaptation across mobile smartphones, tablets, and desktop displays.</li>
          <li><strong>Wellness Information Hub:</strong> Categorized sections for workout routines, nutrition insights, and active lifestyle tips.</li>
          <li><strong>Interactive Navigation:</strong> Smooth section transitions and intuitive user navigation.</li>
        </ul>

        <h4>Learning Takeaways:</h4>
        <p>Strengthened foundational frontend web development capabilities, semantic markup standards, cross-viewport debugging, and contemporary UI/UX styling principles.</p>
      `
    },
    'financial-analysis': {
      category: 'Academic Coursework Project • Financial Analytics',
      title: 'Financial Data Analysis',
      content: `
        <h4>Project Description:</h4>
        <p>A beginner-level academic project exploring financial data through basic tables, calculations and charts.</p>
        
        <h4>Tools & Technologies Applied:</h4>
        <ul>
          <li><strong>Microsoft Excel:</strong> Core spreadsheet software for data organization and analysis.</li>
          <li><strong>Essential Formulas:</strong> Applied functions including <code>SUM</code>, <code>AVERAGE</code>, arithmetic calculations, and percentage ratios.</li>
          <li><strong>Excel Charting:</strong> Built column, bar, and trend charts for visual presentation of financial data.</li>
        </ul>

        <h4>Key Analytical Components:</h4>
        <ul>
          <li><strong>Structured Data Tables:</strong> Clean tabular layout organizing revenues, operational expenses, and net calculations.</li>
          <li><strong>Comparative Variance:</strong> Calculated simple variances between planned budgets and actual numeric figures.</li>
          <li><strong>Visual Financial Trends:</strong> Graphical charts highlighting categorical expense distributions.</li>
        </ul>

        <h4>Learning Takeaways:</h4>
        <p>Gained hands-on familiarity with data hygiene, structured table design, fundamental numeric modeling, and presenting data clearly for academic problem solving.</p>
      `
    }
  };

  // 3. Mobile Navigation Drawer Toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close menu on nav item click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMobileNav();
      }
    });
  }

  function openMobileNav() {
    navMenu.classList.add('open');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // 4. Sticky Header Shadow on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  }, { passive: true });

  // 5. Active Navigation Link Highlighting (Section Spy)
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // 6. Project Modal Logic
  window.openProjectModal = function(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;

    modalTag.textContent = project.category;
    modalTitle.textContent = project.title;
    modalBody.innerHTML = project.content;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  // Handle ESC Key for Modal & Drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('active')) {
        closeModal();
      }
      if (navMenu && navMenu.classList.contains('open')) {
        closeMobileNav();
      }
    }
  });

  // 7. Copy Email to Clipboard
  if (copyEmailBtn && emailDisplay) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailDisplay.textContent.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
          .then(() => {
            showToast('Email placeholder copied to clipboard!');
          })
          .catch(() => {
            showToast(`Email: ${email}`);
          });
      } else {
        showToast(`Email: ${email}`);
      }
    });
  }

  // 8. Contact Form with Interactive Validation
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const messageInput = document.getElementById('userMessage');

      let isValid = true;

      // Name Validation
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      // Email Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      // Message Validation
      if (!messageInput.value.trim()) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('has-error');
      }

      if (isValid) {
        const senderName = nameInput.value.trim();

        // Button Loading State
        const submitBtn = document.getElementById('submitBtn');
        const originalContent = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalContent;

          // Display success state & toast
          if (formSuccessAlert) {
            formSuccessAlert.style.display = 'flex';
          }
          contactForm.reset();
          showToast(`Thank you, ${senderName}! Your message was logged successfully.`);

          // Hide inline alert after 7 seconds
          setTimeout(() => {
            if (formSuccessAlert) {
              formSuccessAlert.style.display = 'none';
            }
          }, 7000);
        }, 600);
      }
    });

    // Clear error states on user input
    ['userName', 'userEmail', 'userMessage'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group').classList.remove('has-error');
        });
      }
    });
  }

  // 9. Toast Notification Engine
  function showToast(message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
});
