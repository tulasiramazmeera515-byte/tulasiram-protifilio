export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  isUpcoming?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  credentialUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  details?: string;
}

export const personalInfo = {
  name: "Azmeera Tulasiram",
  shortName: "Azmeera",
  initials: "AT.",
  role: "Full-Stack & AI Developer",
  status: "B.Tech Student • Full-Stack Developer • AI/ML Enthusiast",
  tagline: "I build intelligent digital experiences with code, AI and creativity.",
  shortBio: "I'm a B.Tech student and aspiring Full-Stack & AI Developer passionate about building practical web applications, AI-powered solutions and modern digital experiences.",
  heroDescription: "B.Tech student passionate about Full-Stack Development, AI/ML and building practical real-world applications.",
  github: "https://github.com/tulasiramazmeera515-byte",
  linkedin: "https://www.linkedin.com/in/tulasiram-azmeera-86948b378/",
  email: "thulasiramazmeera@gmail.com",
  resume: "/resume.pdf",
  profileImage: "/about-profile.jpg",
};

export const aboutData = {
  heading: "About Me",
  content: "I'm a B.Tech student and aspiring Full-Stack & AI Developer who enjoys turning ideas into practical digital products. I work across frontend development, backend APIs, databases and AI/ML technologies. I continuously improve my skills by building projects and learning modern technologies.",
  focusPoints: [
    { label: "Role", value: "Full-Stack & AI Developer" },
    { label: "Education", value: "B.Tech (Pursuing)" },
    { label: "Specialization", value: "Web Apps & AI/ML Integrations" },
    { label: "Approach", value: "Clean Code & Practical Problem Solving" }
  ]
};

export const skillsData = {
  programming: {
    category: "Programming",
    items: ["C", "Python", "Java", "JavaScript"]
  },
  frontend: {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  },
  backend: {
    category: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot"]
  },
  database: {
    category: "Database",
    items: ["MySQL", "MongoDB"]
  },
  aiMl: {
    category: "AI Tools & Prompt Engineering",
    items: [
      "Creating Images & Video with AI Tools",
      "Design Graphics with AI Tools",
      "Prompt Engineering"
    ]
  },
  tools: {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "FFmpeg"]
  }
};

export const projectsData: ProjectItem[] = [
  {
    id: "clipgenie",
    title: "ClipGenie",
    subtitle: "AI Video Processing Platform",
    description: "An AI-powered platform that transforms long-form videos into useful short clips using speech-to-text, content analysis and automated video processing.",
    technologies: ["React", "Spring Boot", "Python", "FastAPI", "MongoDB", "FFmpeg", "Whisper", "OpenCV"],
    features: [
      "Video upload & processing",
      "Speech-to-text transcription",
      "Highlight detection",
      "Automatic clip generation",
      "AI summaries",
      "Quiz generation"
    ],
    githubUrl: "https://github.com/tulasiramazmeera515-byte",
    liveUrl: "https://github.com/tulasiramazmeera515-byte"
  },
  {
    id: "job-portal",
    title: "Job Portal",
    subtitle: "Full-Stack Job Portal",
    description: "A full-stack web application connecting job seekers and recruiters through job listings, applications and database integration.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "MongoDB"],
    features: [
      "User authentication",
      "Job listings",
      "Search & filtering",
      "Applications workflow",
      "Recruiter functionality",
      "Database integration"
    ],
    githubUrl: "https://github.com/tulasiramazmeera515-byte",
    liveUrl: "https://github.com/tulasiramazmeera515-byte"
  },
  {
    id: "mern-ecommerce",
    title: "MERN eCommerce",
    subtitle: "Full-Stack Shopping Platform",
    description: "A full-stack shopping experience built with the MERN stack featuring product catalogs, persistent cart state, user authentication, order processing, and administrative controls.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST API"],
    features: [
      "Product catalog & category filtering",
      "Persistent cart & checkout flow",
      "JWT user authentication & profiles",
      "Order management & payment tracking",
      "Admin inventory management",
      "MongoDB database integration"
    ],
    githubUrl: "https://github.com/tulasiramazmeera515-byte",
    liveUrl: "https://github.com/tulasiramazmeera515-byte"
  }
];

export const educationData: EducationItem = {
  degree: "B.Tech",
  institution: "St. Mary's Group of Institutions, Hyderabad",
  status: "Currently Pursuing",
  details: "Undergraduate Degree in Engineering"
};

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-ibm",
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Web Development",
    credentialUrl: "https://skillsbuild.org"
  },
  {
    id: "cert-hp",
    title: "Data Science & Analytics",
    issuer: "HP LIFE / HP Foundation",
    category: "Data Science",
    credentialUrl: "https://www.life-global.org"
  },
  {
    id: "cert-glide",
    title: "Building a Mobile App with Google Sheets on Glide",
    issuer: "Coursera",
    category: "App Development",
    credentialUrl: "https://www.coursera.org"
  },
  {
    id: "cert-adobe",
    title: "Design Fundamentals with AI",
    issuer: "Adobe",
    category: "Design & AI",
    credentialUrl: "https://adobe.com"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];
