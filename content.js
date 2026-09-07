/* ============================================================
   All hero copy lives here — edit text freely without touching
   animation logic (script.js) or presentation (styles.css).
   index.html carries the same strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#method" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "Nithin",
  role: ["Cybersecurity & AI", "Software Developer"],
  meta: ["Security", "Full Stack", "AI & ML", "Automation"],

  notification: {
    name: "Nithin",
    time: "now",
    lead: "Cybersecurity Analyst & Developer",
    message: "engineering secure software, threat analysis models, and resilient digital architectures.",
  },

  section2: {
    sideLeft: ["Nithin Reddy", "Solutions."],
    sideRight: ["Security.", "Innovation."],
  },

  /* My Works — projects from Nithin's resume */
  works: {
    brand: "Nithin Reddy Portfolio",
    projects: [
      {
        key: "crackit",
        name: "CrackIt",
        img: "assets/work-crackit.jpg",
        w: 600,
        h: 480,
        cat: "Web · Career Prep",
        year: "2025",
        accent: "#4da3ff",
        title: "Technical Interview Preparation Platform with Structured Roadmaps",
      },
      {
        key: "resumematcher",
        name: "Resume Matcher ATS",
        img: "assets/work-resumematcher.jpg",
        w: 600,
        h: 480,
        cat: "AI · Security Automation",
        year: "2024",
        accent: "#00e5a3",
        title: "Privacy-Preserving Resume-Job ATS Matcher with OWASP Controls",
      },
      {
        key: "malwaredetection",
        name: "Android Malware Detection",
        img: "assets/work-malware.jpg",
        w: 600,
        h: 480,
        cat: "Cybersecurity · ML",
        year: "2024 - 2025",
        accent: "#ff5a1f",
        title: "Multiclass Malware Detection via Syscall Subsequences (Published ICECMSN 2025)",
      },
      {
        key: "passwordanalyzer",
        name: "AI Password Security Analyzer",
        img: "assets/work-password.jpg",
        w: 600,
        h: 480,
        cat: "Security · Cryptography",
        year: "2024",
        accent: "#a855f7",
        title: "Entropy-Based Password Vulnerability & Brute-Force Crack-Time Estimator",
      },
    ],
  },

  /* ---- BIG ROBOT section (05 · The Mind) ---- */
  bigRobot: {
    labels: { left: "SRMIST · CSE (Cyber Security)", right: "Security · Software Engineering" },
    eyebrow: "( 05 · The Mind )",
    titleLines: ["I build systems that", "are secure and resilient by design."],
    description: "Understanding low-level systems, network protocols, and application logic — finding vulnerabilities before adversaries do.",
    hint: "Scroll to explore technical paradigms.",

    techIdeas: [
      {
        no: "01",
        title: "Defensive Security & Threat Analysis",
        description: "Hands-on vulnerability assessment, OWASP Top 10 mitigation, Wireshark packet inspection, and SSL/TLS cryptographic security.",
        tags: ["Web Security", "OWASP Top 10", "Wireshark", "Burp Suite", "Nmap", "SSL/TLS", "Threat Analysis"],
      },
      {
        no: "02",
        title: "Machine Learning & Malware Detection",
        description: "Deep learning models leveraging informative syscall subsequence patterns to identify malicious Android applications with high precision.",
        tags: ["Deep Learning", "Syscall Patterns", "Reverse Engineering", "Feature Engineering", "Python", "ICECMSN 2025"],
      },
      {
        no: "03",
        title: "Secure Full-Stack Architecture",
        description: "High-performance responsive frontends in React.js & Vite integrated with robust, secure backend pipelines and database management.",
        tags: ["React.js", "Vite", "JavaScript", "Java", "Python", "MySQL", "MongoDB", "REST APIs"],
      },
    ],
  },

  /* ---- EDITORIAL / SKILLS section ---- */
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Security is a mindset.", "Curiosity is my weapon."],
    note: "Bridging the gap between software engineering, artificial intelligence, and impenetrable cybersecurity.",
    skills: {
      title: "Technical Arsenal",
      groups: [
        { name: "Web Security & Networking", items: ["OWASP Top 10", "SSL/TLS", "DNS & TCP/IP", "Wireshark", "Burp Suite", "Nmap", "Static & Dynamic Analysis"] },
        { name: "Languages & Frameworks", items: ["Java", "Python (Scripting & ML)", "JavaScript", "React.js", "Vite", "HTML5 & CSS3", "SQL"] },
        { name: "Cloud, Platforms & Systems", items: ["Linux (Ubuntu, Kali)", "Docker", "Kubernetes", "AWS", "Git & GitHub", "MySQL", "MongoDB"] },
        { name: "Achievements & Leadership", items: ["AIR #14 (Naukri Campus)", "AIR #263 (CodeQuezt)", "Best Domain Head (SRMIST)", "Convenor (DSA SRMIST)", "ICC Award 2025"] },
      ],
    },
    mindset: {
      title: "Analyze → Penetrate → Fortify → Optimize",
      lines: [
        "I analyze complex architectures to understand their low-level mechanics.",
        "I think like an adversary to uncover unhandled edge cases and attack vectors.",
        "I fortify applications with defense-in-depth and OWASP principles.",
        "And I optimize performance so security never hinders the user experience.",
      ],
    },
    exploring: {
      title: "Currently Exploring & Researching",
      items: [
        "Deep learning for automated binary vulnerability detection",
        "Zero-trust network architecture and mutual TLS",
        "High-scalability frontend micro-architectures with React & Vite",
        "Cryptographic key management and post-quantum encryption basics",
        "Automated CI/CD security pipeline integration (DevSecOps)",
      ],
    },
    ending: { lines: ["Always analyzing.", "Always defending.", "Always building."], note: "Protecting systems, empowering users." },
  },

  /* ---- SMALL ROBOT section ---- */
  smallRobot: {
    eyebrow: "( 06 · Constant Vigilance )",
    titleLines: ["Always scanning", "for the next horizon."],
    description: "A machine quietly monitoring telemetry — precision, attention to detail, and persistent curiosity.",
    note: "Move your cursor · it tracks you",
  },

  /* ---- FOOTER ---- */
  footer: {
    eyebrow: "( 07 · Contact )",
    headline: ["Let’s build", "something secure."],
    line: "Open to cybersecurity roles, software engineering opportunities, internships, and collaborative research.",
    email: "marthalanithinreddy3093@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Hero", href: "#top" },
          { label: "Focus", href: "#work" },
          { label: "About", href: "#section-03" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Mind", href: "#think" },
        ],
      },
      {
        title: "Focus Areas",
        items: [
          { label: "Defensive Security", href: "#think" },
          { label: "Technical Arsenal", href: "#method" },
          { label: "Engineering Mindset", href: "#method" },
          { label: "Research & Systems", href: "#curious" },
        ],
      },
    ],
    social: [
      { label: "GitHub", href: "https://github.com/NithinReddy3093" },
      { label: "LinkedIn", href: "https://linkedin.com/in/nithin-marthala" },
      { label: "Portfolio", href: "https://nithinreddy-portfolio.netlify.app" },
      { label: "Email", href: "mailto:marthalanithinreddy3093@gmail.com" },
    ],
    legal: "© 2026 Marthala Nithin Reddy",
    note: "Engineered with secure code and persistent curiosity.",
    backToTop: "Back to top",
  },

  /* About Me chapter */
  about: {
    boxes: {
      who:   { title: "Who I Am",   sub: "Marthala Nithin Reddy — Cybersecurity Engineer & Developer." },
      what:  { title: "What I Do",  sub: "Security · Web · AI · Systems" },
      think: { title: "How I Think", sub: "Analyze · Architect · Fortify · Deploy · Impact" },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Marthala Nithin Reddy",
        text: "Computer Science & Cybersecurity Engineering student at SRM Institute of Science and Technology (CGPA: 8.5/10). Experienced in developing security-focused applications, malware detection pipelines, and high-performance web systems.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "Secure Systems & Intelligent Code.",
        text: "Building resilient web applications, network security pipelines, and AI-powered automation tools. Hands-on expertise in OWASP Top 10, penetration testing tools, and scalable full-stack development.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Security by Architecture",
        text: "Analyze · Architect · Fortify · Deploy · Impact. True security is built into the foundation — ensuring privacy, resilience, and seamless usability from day one.",
      },
    },
  },
};
