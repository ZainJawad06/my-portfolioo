/**
 * Portfolio Data Model for Mohammed Zain Jawad
 * Sourced directly from README.md & tailored for the Gazette & Telegraph Victorian design system.
 */

export interface Project {
  id: string;
  patentNumber: string;
  title: string;
  category: 'agentic-ai' | 'full-stack' | 'iot-hardware' | 'accessibility';
  categoryLabel: string;
  tagline: string;
  problem: string;
  whatBuilt: string;
  techStack: string[];
  role: string;
  year: string;
  statusBadge: string;
  statusColor: 'stamp-red' | 'secondary' | 'ink-deep' | 'brass-gold';
  specifications: {
    latencyOrScale: string;
    faultRate: string;
    hardwareOrDepot: string;
    architectureType: string;
  };
  features: string[];
}

export interface TechDomain {
  domain: string;
  description: string;
  tools: string[];
  icon: string;
}

export const PORTFOLIO_DATA = {
  name: "Mohammed Zain Jawad",
  shortName: "Zain Jawad",
  honorific: "Zain Jawad, Esq.",
  titles: [
    "Full-Stack Developer",
    "Agentic AI & IoT Builder",
    "Creative Tech Lead",
    "Vice President of AiFi Club"
  ],
  roleLine: "Full-Stack Developer • Agentic AI & IoT Builder • Creative Tech Lead",
  motto: "Where code acquires intent, design finds purpose, and ideas become systems that run.",
  taglines: [
    "Curious by nature. Builder by execution.",
    "Bridging hardware, full-stack web, and agentic AI.",
    "Designing products that look exceptional and run without friction."
  ],
  coreIdentity: "Builder, Lead Developer, and Designer shaping autonomous software and modern web experiences.",
  university: "REVA University",
  degree: "Computer Science & Engineering",
  location: "Bengaluru, India",
  portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgy_qghN3D5rOZCrZ7RUTLd2LZMxoBGbVvqu6X2n_IIuSwZ68p-P2ORRE861U21scWJOzxg2paDKmye5vRRf8sKPgP8kiKy9X8QH2-MqiLHf8Jelism5kH-6bKd-J2xWJuNLcfTTODynXn37sUVZkI2pFaZ5hqY-NKItZY3PSGhKVbw7hb4p2s9y7aeUAgdwHEtJoIDTFevXuRNc_TnJLa7FoNb4OODNvrE64HqVQ",
  woodcutPortraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7FIoniQoY3Rg03-3F-WISjpdoYW4FNgE3k7RG9SQEedtg9BF0Sk_sgjSrBGkjBjnSLiv-QWD0UV15a0MW1mc5t0-F-LJbEjFoJC15ok2Dv00rFWkQAUerMEGc2x53amGGXgGqwaLql_7jbkKI4O6dVzRcOJKyeRY_bvtR4XSOJB8O87RUC8qs-jC5Re4RnQqf4q8vjt2lH7wjAtKR45vTesAJL9JKMtu4bpuG72o",
  executiveSummary: "I build systems where creative software engineering, physical hardware, and autonomous AI converge. As a Computer Science & Engineering undergrad at REVA University and Vice President of the AiFi Club, I lead technical teams, engineer full-stack platforms, design custom hardware/IoT solutions, and build agentic AI systems. I don't build placeholder prototypes—I architect, design, and deploy end-to-end solutions that solve real operational friction.",

  capabilities: [
    {
      title: "Agentic AI & Intelligent Automation",
      description: "Architecting multi-agent workflows, prompt chains, and automated reasoning pipelines that bridge raw model outputs into reliable tools.",
      deliverable: "Autonomous multi-agent pipelines & structured prompt logic",
      icon: "neurology"
    },
    {
      title: "Full-Stack Systems Engineering",
      description: "Building crisp frontend interfaces paired with resilient backend architectures, real-time databases, and responsive UI design systems.",
      deliverable: "Production full-stack web platforms & real-time DB schemas",
      icon: "developer_board"
    },
    {
      title: "Hardware & Embedded IoT",
      description: "Designing physical-digital bridges using ESP32/ESP8266 architectures, sensor networks, and relay control systems for environmental and structural automation.",
      deliverable: "Firmware routines, telemetry buses & physical controller enclosures",
      icon: "hardware"
    },
    {
      title: "Creative Direction & Identity",
      description: "Elevating technical products with distinct design systems—from modern neobrutalism to interactive micro-animations that deliver intuitive user experiences.",
      deliverable: "Bespoke design tokens, typographical hierarchy & fluid interaction",
      icon: "brush"
    },
    {
      title: "Technical Leadership & Delivery",
      description: "Directing core engineering teams, managing project lifecycles under hackathon and conference deadlines, and translating complex specs into executable code.",
      deliverable: "Scale operations for 2,500+ participants across 50+ universities",
      icon: "groups"
    }
  ],

  techStack: [
    {
      domain: "Languages",
      description: "Core algorithmic & systems vernacular",
      tools: ["Python", "C", "C++", "JavaScript (ES6+)", "HTML5", "CSS3", "Java"],
      icon: "code"
    },
    {
      domain: "Frontend & Web",
      description: "Modern layout architectures & tactile interaction",
      tools: ["React", "Modern Layout Systems", "Tailwind CSS", "Component Design", "GSAP / Motion", "Web Audio API"],
      icon: "web"
    },
    {
      domain: "Backend & Cloud",
      description: "Resilient data routing & operational databases",
      tools: ["Supabase (PostgreSQL)", "MongoDB", "Node.js", "REST APIs", "Relational & NoSQL Logic"],
      icon: "database"
    },
    {
      domain: "AI & Automation",
      description: "Intelligent agent pipelines & quantitative computing",
      tools: ["Agentic Workflows", "Prompt Engineering", "Multi-Agent Chains", "NumPy", "Numerical Computing"],
      icon: "smart_toy"
    },
    {
      domain: "IoT & Microcontrollers",
      description: "Hardware telemetry & mechanical actuator interfaces",
      tools: ["ESP32", "ESP8266", "HC-SR04 Ultrasonic", "YF-S201 Flow Sensors", "Relays", "Blynk IoT Cloud", "I2C LCD"],
      icon: "memory"
    },
    {
      domain: "Developer Tools & Design",
      description: "Toolchains, version control & craft suites",
      tools: ["VS Code", "GCC Toolchains", "Git / GitHub", "Figma", "Canva", "Stitch UI"],
      icon: "build"
    }
  ],

  learningNow: "Data Structures & Algorithms (Advanced Algorithmic Complexity & Graph Topology)",

  fourPillars: [
    {
      number: "01",
      title: "Technical Leadership",
      summary: "As VP of AiFi Club, I help run technical events, hackathons, and student initiatives, building a collaborative AI/ML community at REVA University.",
      detail: "Leading cross-department student engineers, negotiating institutional support, and orchestrating national tech weeks."
    },
    {
      number: "02",
      title: "AI & Agentic Systems",
      summary: "I work with AI/ML, prompt engineering, and AI agents to build practical, intelligent automation and AI-powered apps.",
      detail: "Converting non-deterministic LLM streams into deterministic state machines and production business workflows."
    },
    {
      number: "03",
      title: "Building & Engineering",
      summary: "Full-stack web apps, prototypes, and IoT systems, designed and built end to end.",
      detail: "Writing tight firmware, setting up database triggers, and crafting memorable tactile frontends that never feel cookie-cutter."
    },
    {
      number: "04",
      title: "Hackathons & Innovation",
      summary: "I like turning ideas into working prototypes under pressure, collaborating fast, and solving real-world problems creatively.",
      detail: "High-velocity execution across 24-hour sprints, translating raw problems into shipped code before sunrise."
    }
  ],

  dogmas: [
    {
      number: "01",
      title: "Precision Over Speed",
      text: "A hurried engine fractures on the rails. Zain counsels an exhaustive inspection of inputs, boundaries, and exceptional states before laying down the first line of code or deploying a live telegraph node.",
      ref: "SYSTEM VERIFICATION DOCTRINE"
    },
    {
      number: "02",
      title: "Frictionless Architecture",
      text: "A mechanical apparatus must accommodate human fallibility without seizing up. Systems should guide the operator along natural, self-documenting channels requiring zero manual cogitation.",
      ref: "CLUB OS ERGONOMICS"
    },
    {
      number: "03",
      title: "Resilience By Design",
      text: "Networks will fail, cables will snap, and registries will overflow. True architectural virtue lies in graceful degradation, unyielding idempotency, and automated recovery protocols.",
      ref: "CRITICAL FAULT REDUNDANCY"
    }
  ],

  aifiClub: {
    name: "AiFi Club @ REVA University",
    tagline: "Where Tomorrow's AI Builders Find Each Other",
    creed: "We don’t just talk about artificial intelligence. We build it, test it, pitch it, and ship it.",
    overview: "Driven by students, guided by faculty, and built for absolute execution, AiFi is REVA University’s premier AIML tech community—and one of Bengaluru's most active student AI ecosystems. We operate on a simple philosophy: students learn AI best by doing AI. From high-intensity codeathons and treasure hunts that turn code into clues to 24-hour overnight hackathons where raw ideas transform into working prototypes by sunrise, AiFi bridges the gap between textbook theory and real-world execution.",
    metrics: [
      { count: "2,500+", label: "Individual Registrations", subtext: "Drawn across premier competitive events" },
      { count: "50+", label: "Universities Reached", subtext: "Regional & inter-state institutional engagement" },
      { count: "7+", label: "Landmark Summits Executed", subtext: "Hackathons, codeathons & AI symposiums" },
      { count: "500+", label: "Delegates at AI-RENA 2.0", subtext: "85+ teams scaled during flagship tech week" }
    ],
    leadershipDuties: [
      {
        title: "Directing Large-Scale Tech Operations",
        description: "Spearheading flagship multi-day summits like AI-RENA 2.0—scaling events from 58 participants to a 500+ participant national stage backed by sponsors like GeeksforGeeks."
      },
      {
        title: "Mentoring & Empowering Core Teams",
        description: "Guiding a diverse collective of core student members, fostering cross-campus collaboration, and cultivating a culture where technical builders thrive under pressure."
      },
      {
        title: "Bridging Academia and Industry",
        description: "Facilitating high-value interactions between student builders and industry experts from firms like Tredence Inc, BlinkHealth, KPMG, and JLL."
      },
      {
        title: "Institutional Growth",
        description: "Scaling AiFi from a single-campus initiative into a robust regional network that connects student innovators across multiple universities."
      }
    ],
    pillars: [
      { name: "BUILD", summary: "Real Problems, Real Prototypes", desc: "Taking concepts from ideation and modeling straight to frontend code and live deployment under strict deadlines." },
      { name: "LEARN", summary: "Mentored by Builders", desc: "Bringing in industry engineers, founders, and alumni who sit beside teams as hands-on mentors." },
      { name: "CONNECT", summary: "One Stage, Many Campuses", desc: "Uniting student builders across institutions to code, compete, and push the envelope of automation." }
    ]
  },

  projects: [
    {
      id: "mediremind",
      patentNumber: "PAT-01",
      title: "MediRemind",
      category: "full-stack",
      categoryLabel: "FULL-STACK HEALTH TELEMETRY",
      tagline: "Lightweight, browser-based medicine reminder and real-time inventory tracker with offline support and cloud sync.",
      problem: "Patients with chronic conditions or complex schedules often forget doses, and standard alarm apps fail to track remaining pill stock or dosage instructions.",
      whatBuilt: "A single-page web app featuring dynamic Neobrutalist prescription cards, automated inventory progress bars, low-stock threshold badges, and local-first persistence synced to a Supabase database.",
      techStack: ["HTML5", "Vanilla CSS3", "JavaScript (ES6+)", "Supabase (PostgreSQL)", "Lucide Icons"],
      role: "Full-stack developer handling core state management, UI design system implementation, and database architecture.",
      year: "1900 / 2025",
      statusBadge: "PRODUCTION DEPLOYED",
      statusColor: "stamp-red",
      specifications: {
        latencyOrScale: "< 250ms Sync Latency",
        faultRate: "Offline Local-First Zero Drop",
        hardwareOrDepot: "Supabase Relational Cloud",
        architectureType: "Single-Page Reactive PWA"
      },
      features: [
        "Dynamic prescription cards with scheduled dosage cadence",
        "Automated pill stock deduction & low-stock warning threshold",
        "Local-first offline storage with background Supabase sync",
        "Neobrutalist high-contrast typography & color coding"
      ]
    },
    {
      id: "zynq",
      patentNumber: "PAT-02",
      title: "Zynq",
      category: "full-stack",
      categoryLabel: "MULTI-ROLE OPERATIONS ENGINE",
      tagline: "A real-time operations engine designed to eliminate chaotic hackathon logistics.",
      problem: "In-person hackathons struggle with manual check-in bottlenecks, uncoordinated volunteer shifts, static QR ticket fraud, and lost participants navigating large venues.",
      whatBuilt: "A multi-role platform featuring time-bucketed rotating QR badges, granular volunteer RBAC delegation, live hardware camera ticketing, an audio/haptic broadcast alert system, and a closed-loop help dispatcher.",
      techStack: ["Next.js/React", "Node.js", "MongoDB", "Web Audio API", "Tailwind CSS"],
      role: "Full-stack architect building security guards, real-time dispatch logic, and the administrative data console.",
      year: "1900 / 2026",
      statusBadge: "ACTIVE DISPATCH",
      statusColor: "ink-deep",
      specifications: {
        latencyOrScale: "Real-time SSE / WebSockets",
        faultRate: "0.00% Static Ticket Spoofing",
        hardwareOrDepot: "Bengaluru Central Hack Depot",
        architectureType: "Tiered RBAC (Admin, Volunteer, Competitor)"
      },
      features: [
        "Time-bucketed rotating TOTP QR codes to prevent ticket fraud",
        "Live device camera badge scanning with instant check-in verification",
        "Audio/haptic broadcast alert dispatch for schedule milestones",
        "Closed-loop mentor helpdesk & volunteer shift routing"
      ]
    },
    {
      id: "aquasense",
      patentNumber: "PAT-03",
      title: "AquaSense Pro",
      category: "iot-hardware",
      categoryLabel: "HARDWARE & EMBEDDED TELEMETRY",
      tagline: "An intelligent IoT-based water level, flow, and leak management system.",
      problem: "Traditional water tanks suffer from dry-running motor burnout, undetected pipe leaks wasting thousands of litres, and manual monitoring hassles.",
      whatBuilt: "An automated controller featuring ultrasonic level sensing, differential flow leak detection, dry-run safety lockouts, non-blocking Wi-Fi fallback, and a smartphone telemetry dashboard.",
      techStack: ["ESP32", "Arduino C++", "HC-SR04 Ultrasonic", "YF-S201 Flow Sensors", "Blynk IoT Cloud", "I2C LCD"],
      role: "Firmware engineer and hardware designer responsible for sensor data filtering, safety logic loops, and cloud integration.",
      year: "1900 / 2025",
      statusBadge: "CIRCUIT PROVEN",
      statusColor: "secondary",
      specifications: {
        latencyOrScale: "Dual 160MHz ESP32 Architecture",
        faultRate: "Fail-Safe Motor Cutoff",
        hardwareOrDepot: "Industrial Float Enclosure",
        architectureType: "Differential Sensor Telemetry Loop"
      },
      features: [
        "HC-SR04 ultrasonic echo timing with median noise filtering",
        "Differential dual-flow differential sensing detecting subterranean leaks",
        "Autonomous dry-run hardware interlock preventing pump burnout",
        "Offline-tolerant relay actuation with non-blocking Blynk telemetry"
      ]
    },
    {
      id: "verdantis",
      patentNumber: "PAT-04",
      title: "Verdantis",
      category: "iot-hardware",
      categoryLabel: "SMART BIO-COMPOSTING HARDWARE",
      tagline: "A smart household bio-composting hardware and community waste-management system.",
      problem: "Urban households generate massive amounts of organic kitchen waste that ends up in landfills, while traditional manual composting is slow, smelly, and pest-prone.",
      whatBuilt: "An odor-free, IoT-enabled countertop bio-composting unit utilizing microcontrollers, aerobic sensors, and bio-catalysts to accelerate waste breakdown from months down to days.",
      techStack: ["IoT Microcontrollers", "Embedded Sensors", "Aerobic Composting Hardware", "Mobile App Interface"],
      role: "Conceptualizer and hardware-software integration lead focused on automated temperature/humidity control and system architecture.",
      year: "1900 / 2025",
      statusBadge: "HARDWARE SPEC",
      statusColor: "brass-gold",
      specifications: {
        latencyOrScale: "Decomposition: Months down to Days",
        faultRate: "Hermetic Odor Containment",
        hardwareOrDepot: "Countertop Bio-Reactor Cell",
        architectureType: "PID Aerobic Thermal Feedback"
      },
      features: [
        "Closed-chamber automated aeration and moisture balance control",
        "Thermophilic heating profile targeting rapid bio-catalytic breakdown",
        "Activated carbon air scrubbing system eliminating kitchen odors",
        "Mobile telemetry alerting user when organic fertilizer is cured"
      ]
    },
    {
      id: "sehha",
      patentNumber: "PAT-05",
      title: "Sehha",
      category: "accessibility",
      categoryLabel: "AI COGNITIVE & MEMORY ASSIST",
      tagline: "An AI-driven cognitive gaming and memory assistance platform tailored for elderly individuals.",
      problem: "Elderly individuals experiencing memory decline lack engaging, safe, and accessible digital tools for daily cognitive stimulation and structured caregiver check-ins.",
      whatBuilt: "A web-based platform featuring adaptive memory-matching games, personalized daily reminders, a media-rich memory assistant, and a dedicated non-diagnostic caregiver activity dashboard.",
      techStack: ["React", "Frontend UI/UX", "AI/ML Personalization Layer", "Secure Relational Database"],
      role: "Lead developer and designer focused on high-contrast accessibility standards, adaptive difficulty logic, and clean interface structures.",
      year: "1900 / 2025",
      statusBadge: "HUMAN CENTERED",
      statusColor: "stamp-red",
      specifications: {
        latencyOrScale: "Dynamic Difficulty Calibration",
        faultRate: "WCAG AAA Large Contrast",
        hardwareOrDepot: "Accessible Touch Console",
        architectureType: "Caregiver Triage & Memory Matrix"
      },
      features: [
        "Large-format touch targets and zero-stress cognitive card matching",
        "Adaptive difficulty engine adjusting puzzle complexity to player pace",
        "Personalized photo/audio memory prompts anchoring familial recognition",
        "Non-diagnostic progress dashboard for caregivers and family members"
      ]
    }
  ] as Project[],

  contacts: {
    headline: "Let’s Make It Official.",
    mainHook: "You’ve scrolled this far. You look a lot like my next collaborator.",
    subtext: "Whether you need a high-performance full-stack web app, an agentic AI workflow, or someone to lead your next big engineering push—my inbox is open. Let’s turn that ambitious idea into production-ready code.",
    footerPunchline: "Don't leave it as a bookmark. Drop a message—I promise I reply faster than your local server builds.",
    channels: [
      {
        platform: "LinkedIn",
        handle: "Mohammed Zain Jawad",
        url: "https://www.linkedin.com/in/zainjawad/",
        purpose: "For formal ops, career chats & tech leadership",
        icon: "badge"
      },
      {
        platform: "GitHub",
        handle: "ZainJawad06",
        url: "https://github.com/ZainJawad06",
        purpose: "Inspect the codebases, architecture & live builds",
        icon: "terminal"
      },
      {
        platform: "Instagram",
        handle: "@welcometozainclubb",
        url: "https://instagram.com/welcometozainclubb",
        purpose: "Behind-the-scenes on design, events & visual work",
        icon: "photo_camera"
      },
      {
        platform: "Electronic Mail",
        handle: "zainjawad@gmail.com",
        url: "mailto:zainjawad@gmail.com",
        purpose: "Direct line for high-priority projects & inquiries",
        icon: "mail"
      }
    ]
  }
};
