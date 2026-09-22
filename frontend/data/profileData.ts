export interface Project {
  name: string;
  tagline: string;
  category: "Full-Stack + AI" | "AI & GenAI" | "HealthTech AI" | "Full-Stack Web";
  description: string;
  tech_stack: string[];
  highlights: string[];
  live_url?: string;
  github_url?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  currentStatus?: string;
  details?: string[];
}

export interface AchievementItem {
  title: string;
  description: string;
  badge: string;
  iconType: "code" | "trophy" | "star";
}

export interface ProfileData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    availableForWork: boolean;
  };
  skills: {
    frontend: string[];
    backend: string[];
    ai_genai: string[];
    tools: string[];
    languages: string[];
  };
  projects: Project[];
  education: EducationItem[];
  achievements: AchievementItem[];
}

export const PROFILE_DATA: ProfileData = {
  personal: {
    name: "Sumit Srivastava",
    title: "Full-Stack Developer & AI/GenAI Enthusiast",
    tagline: "Building production-grade full-stack web applications and intelligent AI-powered solutions.",
    bio: "Computer Science student at Visvesvaraya Technological University with strong foundations in Data Structures & Algorithms, modern full-stack web engineering (MERN & Next.js), and Generative AI/LLM integration. Passionate about architecting scalable systems and turning cutting-edge AI research into practical user experiences.",
    location: "Bengaluru, Karnataka, India",
    email: "sumsri2024@gmail.com",
    phone: "+91 9305984218",
    linkedin: "https://linkedin.com/in/sumit-srivastava2731",
    github: "https://github.com/Sumitdevelops",
    availableForWork: true
  },
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "FastAPI"
    ],
    ai_genai: [
      "Python",
      "LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "Generative AI",
      "LLM APIs (Grok / OpenAI)",
      "Prompt Engineering"
    ],
    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Vite",
      "Vercel",
      "Netlify",
      "Render"
    ],
    languages: [
      "C++",
      "JavaScript",
      "Python",
      "Java"
    ]
  },
  projects: [
    {
      name: "ApexMoney",
      tagline: "AI-Powered Personal Expense & Wealth Management",
      category: "Full-Stack + AI",
      description: "A comprehensive financial management application with automated expense tracking, smart budget forecasting, and an integrated AI financial advisor.",
      tech_stack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Google OAuth",
        "Grok LLM API"
      ],
      highlights: [
        "Deployed full-stack platform serving 21+ active registered users with real-time financial tracking.",
        "Integrated an AI financial assistant using the Grok LLM API for personalized budgeting advice and spending anomaly detection.",
        "Engineered normalized MongoDB schema across 7 collections with category tracking, recurring bill reminders, and goal analytics.",
        "Implemented secure multi-provider authentication (JWT & Google OAuth 2.0) and tiered subscription management."
      ],
      live_url: "https://apexmoney.netlify.app",
      github_url: "https://github.com/Sumitdevelops/ApexMoney",
      featured: true
    },
    {
      name: "StudyTube AI",
      tagline: "AI-Powered Video & Coursework Learning Platform",
      category: "AI & GenAI",
      description: "An AI-powered educational platform that converts complex syllabus materials and video lectures into structured revision paths, interactive summaries, and contextual quizzes using RAG.",
      tech_stack: [
        "Next.js",
        "React.js",
        "Python",
        "LangChain",
        "RAG",
        "FastAPI",
        "Tailwind CSS"
      ],
      highlights: [
        "Architected a Retrieval-Augmented Generation (RAG) pipeline to ground AI responses directly in course textbooks and lecture notes.",
        "Generates multi-tiered revision guides, automated concept flashcards, and diagnostic multiple-choice quizzes.",
        "Engineered low-latency document chunking, embeddings extraction, and semantic search workflows.",
        "Built a responsive modern interface with dynamic progress tracking and customizable study goals."
      ],
      live_url: "https://client-gilt-one-15.vercel.app",
      github_url: "https://github.com/Sumitdevelops",
      featured: true
    },
    {
      name: "GlucoWave",
      tagline: "AI-Powered Glucose Monitoring & Trajectory Analytics",
      category: "HealthTech AI",
      description: "A digital health platform that forecasts glucose fluctuation trajectories from meals and timing, featuring trend analytics and emergency hypoglycemia chatbot guidance.",
      tech_stack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AI/LLM API",
        "Tailwind CSS"
      ],
      highlights: [
        "Built predictive trajectory engine estimating glucose drop curves from user meal inputs and insulin timing.",
        "Developed interactive health analytics dashboard visualizing daily, weekly, and monthly glycemic spikes.",
        "Created an AI assistant providing instant, medically-aligned guidance during rapid glucose drops.",
        "Engineered HIPAA-conscious health-logging schemas and responsive mobile-first UI on Render."
      ],
      live_url: "https://glucowave.onrender.com",
      github_url: "https://github.com/Sumitdevelops/GlucoWave",
      featured: true
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "Visvesvaraya Technological University",
      duration: "2024 – 2028",
      score: "9.20 / 10.00",
      scoreType: "CGPA",
      currentStatus: "3rd Year Undergraduate",
      details: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems.",
        "Maintained consistent academic distinction across all semesters."
      ]
    },
    {
      degree: "Senior Secondary School Certificate (Class XII)",
      institution: "Suryabadan Vidyapeeth (CBSE)",
      duration: "2022 – 2023",
      score: "82.2%",
      scoreType: "Percentage",
      details: [
        "Physics, Chemistry, Mathematics, Computer Science."
      ]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "Casterbridge School (ICSE)",
      duration: "2020 – 2021",
      score: "95.4%",
      scoreType: "Percentage",
      details: [
        "High academic distinction with ICSE Board honors."
      ]
    }
  ],
  achievements: [
    {
      title: "100+ LeetCode Problems Solved",
      description: "Consistent problem solver in DSA across Arrays, Trees, Dynamic Programming, Graphs, and Hash Maps in C++ and Python.",
      badge: "DSA & Algorithms",
      iconType: "code"
    },
    {
      title: "National-Level Hackathon Finalist",
      description: "Selected as finalist among hundreds of engineering teams for engineering a full-stack real-time solution under intense 36-hour sprint constraints.",
      badge: "Hackathon Finalist",
      iconType: "trophy"
    }
  ]
};
