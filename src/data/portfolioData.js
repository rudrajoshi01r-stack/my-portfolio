// src/data/portfolioData.js
// Single source of truth for Rudra Joshi's Portfolio

export const personalInfo = {
  name: "Rudra Joshi",
  title: "BBA Fintech Student | Exploring Finance, Technology & Innovation",
  university: "JECRC University",
  degree: "Bachelor of Business Administration (BBA) – Fintech",
  yearSemester: "First Year | First Semester",
  location: "Jaipur, Rajasthan, India",
  availability: "Open to Learning & Opportunities",
  intro: "I am a first-year BBA Fintech student at JECRC University, interested in understanding how finance and technology work together to shape the modern business world.",
  about: "I am Rudra Joshi, a first-year BBA Fintech student at JECRC University. I am interested in finance, business management, financial technology and artificial intelligence. I enjoy learning about new technologies, improving my knowledge and developing practical skills that can help me grow professionally.",
  email: "rudra.joshi@example.com",
  linkedIn: "https://linkedin.com/in/rudra-joshi-placeholder"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" }
];

export const educationInfo = {
  institution: "JECRC University",
  location: "Jaipur, Rajasthan",
  degree: "Bachelor of Business Administration (BBA)",
  specialization: "Fintech (Financial Technology)",
  status: "First Year | First Semester",
  timeline: "2024 – Present",
  coursework: [
    "Introduction to Fintech",
    "Principles of Management",
    "Financial Accounting Basics",
    "Business Mathematics",
    "Business Communication",
    "IT Applications in Business"
  ],
  academicGoals: [
    "Developing deep understanding of modern financial rails and digital payment networks.",
    "Applying analytical models to solve organizational and economic case studies.",
    "Mastering spreadsheet modeling and contemporary data analysis techniques."
  ]
};

export const skillsData = {
  technical: [
    {
      name: "Microsoft Excel",
      level: "Beginner",
      description: "Basic formulas, data entry, sorting, table formatting, and basic chart creation.",
      icon: "📊"
    },
    {
      name: "Basic Computer Knowledge",
      level: "Foundational",
      description: "Operating system navigation, file management, cloud storage, and web tools.",
      icon: "💻"
    },
    {
      name: "AI Tools",
      level: "Beginner",
      description: "Utilizing generative AI tools for concept exploration, research, and study summaries.",
      icon: "🤖"
    },
    {
      name: "Digital Literacy",
      level: "Foundational",
      description: "Internet research, online collaboration platforms, security hygiene, and digital workflows.",
      icon: "🌐"
    }
  ],
  professional: [
    {
      name: "Communication",
      level: "Foundational",
      description: "Clear verbal articulation, business presentation skills, and professional written correspondence.",
      icon: "🗣️"
    },
    {
      name: "Teamwork",
      level: "Foundational",
      description: "Collaborating actively in student group projects, sharing feedback, and peer coordination.",
      icon: "🤝"
    },
    {
      name: "Time Management",
      level: "Foundational",
      description: "Balancing university coursework, self-study milestones, and extracurricular academic activities.",
      icon: "⏱️"
    },
    {
      name: "Problem Solving",
      level: "Foundational",
      description: "Approaching business and financial challenges with logical reasoning and curiosity.",
      icon: "💡"
    }
  ]
};

export const projectsData = [
  {
    id: "sports-fitness",
    title: "Sports & Fitness Portfolio Website",
    category: "Student Practice Project",
    categoryType: "Web Design & Development",
    bannerClass: "banner-web",
    bannerIcon: "🏃",
    shortDescription: "A responsive website project exploring sports, fitness and healthy lifestyle information.",
    tools: ["Google Antigravity", "HTML", "CSS", "JavaScript"],
    fullDetails: {
      overview: "Developed as a hands-on frontend web project exploring how modern web tools can promote active physical wellness and healthy lifestyle tracking.",
      objectives: [
        "Created an intuitive and accessible user experience across mobile, tablet, and desktop viewports.",
        "Implemented structured layouts with modern semantic HTML5 and clean CSS styling.",
        "Integrated interactive navigation, responsive menu toggles, and lightweight JavaScript interactions."
      ],
      technologiesUsed: "Google Antigravity development environment, semantic HTML5, custom responsive CSS3, and modern vanilla JavaScript.",
      learningOutcomes: "Gained practical experience in web layouts, cross-device responsiveness, typography hierarchy, and frontend developer tooling."
    }
  },
  {
    id: "financial-analysis",
    title: "Financial Data Analysis",
    category: "Academic Coursework Project",
    categoryType: "Financial Analytics",
    bannerClass: "banner-finance",
    bannerIcon: "📈",
    shortDescription: "A beginner-level academic project exploring financial data through basic tables, calculations and charts.",
    tools: ["Microsoft Excel"],
    fullDetails: {
      overview: "An academic introductory project designed to organize, calculate, and visualize financial datasets using core Microsoft Excel spreadsheet functionalities.",
      objectives: [
        "Built organized financial tables with clear column structures for revenue, expenditures, and net balance.",
        "Employed foundational mathematical and logical functions including SUM, AVERAGE, and basic formulas.",
        "Generated clean visual column and line charts to present categorical spending patterns and trends."
      ],
      technologiesUsed: "Microsoft Excel (Worksheets, Formulas, Data Organization, Charting).",
      learningOutcomes: "Acquired hands-on familiarity with data hygiene, basic numeric modeling, and presenting data clearly for business decision-making."
    }
  }
];

export const areasOfInterestData = [
  {
    id: "fintech",
    title: "Financial Technology",
    desc: "Understanding next-generation payment systems, digital wallets, decentralized protocols, and frictionless micro-transactions.",
    tag: "Core Focus",
    icon: "💳"
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    desc: "Exploring how machine learning and AI automation enhance financial advisory, algorithmic analysis, and risk scoring.",
    tag: "Emerging Tech",
    icon: "🤖"
  },
  {
    id: "digital-banking",
    title: "Digital Banking",
    desc: "Studying neobanking models, paperless customer onboarding, branchless operations, and open banking API standards.",
    tag: "Industry Shift",
    icon: "🏦"
  },
  {
    id: "business-mgmt",
    title: "Business & Management",
    desc: "Learning fundamental corporate governance, organizational leadership, marketing strategy, and modern digital business operations.",
    tag: "Academic Pillar",
    icon: "📊"
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    desc: "Synthesizing numeric datasets through spreadsheet modeling, basic variance tracking, and actionable visual charts.",
    tag: "Analytical Skill",
    icon: "📈"
  },
  {
    id: "emerging-tech",
    title: "Emerging Technologies",
    desc: "Keeping pace with cloud business platforms, smart contracts, automation agents, and the future of enterprise software.",
    tag: "Continuous Learning",
    icon: "🚀"
  }
];
