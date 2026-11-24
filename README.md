# Rudra Joshi – Personal Portfolio Website

A premium, modern, visually impressive, and fully responsive personal portfolio website built for **Rudra Joshi**, a first-year **BBA Fintech student at JECRC University**.

Designed to showcase academic coursework, foundational technical & digital skills, student practice projects, and key interest areas for internship applications, networking, and career opportunities.

---

## 🎨 Design Direction & Visual Identity

- **Primary Background:** Clean White (`#FFFFFF`) and Soft Off-White (`#F8FAFC`, `#F1F5F9`)
- **Primary Colour:** Deep Navy Blue (`#0B2545`, `#0A192F`)
- **Accent Colour:** Modern Light Blue (`#0284C7`, `#38BDF8`, `#E0F2FE`)
- **Text:** Dark Charcoal and Navy (`#0F172A`, `#334155`, `#475569`)
- **Typography:** Elegant modern fonts (*Plus Jakarta Sans* & *Inter*)
- **Aesthetic:** Generous white space, consistent spacing, rounded corners (`16px`/`24px`), subtle shadows, smooth transitions, and refined interactive hover effects.

---

## 📁 Project Architecture & Components

```
bba-fintech-portfolio/
│
├── index.html                      # Semantic, accessible HTML5 single-page application
├── README.md                       # Project overview and run guide
│
├── css/
│   └── style.css                   # Comprehensive CSS design system with custom properties
│
├── js/
│   └── main.js                     # Interactive JS engine: modal popups, section spy, form validation
│
└── src/                            # Reusable React Component Structure
    ├── App.jsx                     # Top-level React application root
    ├── index.js                    # React 18 DOM mount entry point
    ├── data/
    │   └── portfolioData.js        # Single source of truth for portfolio data
    └── components/
        ├── Navbar.jsx              # Sticky header with "RJ." logo & responsive drawer
        ├── Hero.jsx                # First-impression hero with CTA & abstract graphic
        ├── About.jsx               # Two-column narrative & interest pillars
        ├── Education.jsx           # JECRC University BBA Fintech academic card
        ├── Skills.jsx              # Technical & professional skills cards
        ├── Projects.jsx            # Student projects gallery
        ├── Interests.jsx           # 6 Modern area-of-interest cards
        ├── Contact.jsx             # Interactive contact form & placeholders
        ├── Footer.jsx              # Modern footer & back-to-top button
        └── ProjectModal.jsx        # Deep-dive interactive project details modal
```

---

## 🌟 Sections Overview

1. **Sticky Navigation Bar:**
   - Wordmark Logo **"RJ."** on the left with subtle status tag.
   - Smooth navigation links: `Home`, `About`, `Education`, `Skills`, `Projects`, `Interests`, `Contact`.
   - Responsive mobile navigation drawer with animated hamburger toggle.
   - Quick action button: *"Get In Touch"*.

2. **Hero Section:**
   - Main Heading: *"Hi, I'm Rudra Joshi."*
   - Subtitle: *"BBA Fintech Student | Exploring Finance, Technology & Innovation"*
   - Introduction: *"I am a first-year BBA Fintech student at JECRC University, interested in understanding how finance and technology work together to shape the modern business world."*
   - Availability Badge: *"Open to Learning & Opportunities"*.
   - Two attractive CTA buttons: *"Explore My Work"* and *"Get In Touch"*.
   - Right-hand visual: Modern abstract finance & technology vector graphic with data curves, nodes, and profile card.

3. **About Me Section:**
   - Professional introduction highlighting academic journey at JECRC University.
   - Modern two-column layout covering Academic Background, Areas of Interest, Personal Development Goals, and Interest in Emerging Technologies.

4. **Education Section:**
   - **JECRC University** | Bachelor of Business Administration (BBA) – Fintech
   - First Year | First Semester
   - Coursework tags: *Introduction to Fintech, Principles of Management, Financial Accounting Basics, Business Mathematics, Business Communication, IT Applications in Business, Microeconomics Basics*.

5. **Skills Section:**
   - **Technical & Digital Skills:**
     - Microsoft Excel – Beginner
     - Basic Computer Knowledge
     - AI Tools – Beginner
     - Digital Literacy
   - **Professional Skills:**
     - Communication
     - Teamwork
     - Time Management
     - Problem Solving

6. **Projects Section (Student & Practice Work):**
   - **Project 1: Sports & Fitness Portfolio Website**
     - *Description:* A responsive website project exploring sports, fitness and healthy lifestyle information.
     - *Tools:* Google Antigravity, HTML, CSS and JavaScript.
     - *Category:* Student Practice Project.
   - **Project 2: Financial Data Analysis**
     - *Description:* A beginner-level academic project exploring financial data through basic tables, calculations and charts.
     - *Tools:* Microsoft Excel.
     - *Category:* Academic Coursework Project.
   - Interactive modal popups providing in-depth project overviews, methodology, and learning outcomes.

7. **Areas of Interest (Dedicated Section):**
   - Financial Technology
   - Artificial Intelligence
   - Digital Banking
   - Business and Management
   - Data Analysis
   - Emerging Technologies

8. **Contact Section:**
   - Functional email placeholder (`rudra.joshi@example.com`) with one-click clipboard copy.
   - LinkedIn profile placeholder (`linkedin.com/in/rudra-joshi-placeholder`).
   - Interactive message form with client-side field validation, feedback states, and toast notifications.

9. **Footer:**
   - "RJ." branding, university affiliation, quick navigation links, back-to-top button, and copyright notice.

---

## 🚀 How to Open and View the Website

### Option 1: Direct Browser Open (Double Click)
You can directly open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Brave, Mozilla Firefox, or Safari).
- Full responsiveness, animations, modals, and interactions work out of the box with zero external dependencies required.

### Option 2: Windows PowerShell One-Liner
```powershell
Start-Process "C:\Users\Rudra\.gemini\antigravity\scratch\bba-fintech-portfolio\index.html"
```
