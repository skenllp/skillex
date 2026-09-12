export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Campus", href: "/campus" },
  { label: "About", href: "/about" },
  { label: "Student Stories", href: "/student-stories" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Skillex",
  tagline: "LEARN • GROW • SUCCEED",
  email: "skillexcampus@gmail.com",
  phonePlaceholder: "+91 00000 00000",
  whatsappPlaceholder: "https://wa.me/910000000000",
  addressPlaceholder: "Skillex Campus address — placeholder, to be supplied",
};

/* ---------------- Courses ---------------- */
export const courses = [
  {
    n: "01",
    slug: "office-administration",
    title: "Office Administration",
    image: "/assets/course-office-administration.jpg",
    short:
      "Build the organisational, communication and software skills that keep modern workplaces running.",
    intro:
      "A practical programme for anyone who wants to run the operational backbone of a modern workplace — scheduling, records, communication and the everyday software that offices depend on.",
    keySkills: [
      "Business communication & correspondence",
      "Office software & documentation",
      "Records & workflow management",
      "Scheduling & coordination",
      "Professional workplace etiquette",
    ],
    whoShouldJoin: [
      "School or college leavers exploring an office-based career",
      "Career switchers moving into administrative roles",
      "Anyone who wants structured, practical office skills",
    ],
  },
  {
    n: "02",
    slug: "hospitality",
    title: "Hospitality",
    image: "/assets/course-hospitality.jpg",
    short:
      "Prepare for front-of-house and guest-service careers across hotels, restaurants and events.",
    intro:
      "A hands-on programme for people who enjoy working with others and want a career in guest-facing hospitality — hotels, restaurants, events and beyond.",
    keySkills: [
      "Guest service & communication",
      "Front office operations",
      "Food & beverage service basics",
      "Grooming & professional presentation",
      "Handling real-world service situations",
    ],
    whoShouldJoin: [
      "Those who enjoy people-facing, service-oriented work",
      "Career starters aiming for hotels, restaurants or events",
      "Anyone wanting a practical route into hospitality",
    ],
  },
  {
    n: "03",
    slug: "digital-marketing",
    title: "Digital Marketing",
    image: "/assets/course-digital-marketing.jpg",
    short:
      "Learn how brands plan, launch and measure campaigns across today's digital channels.",
    intro:
      "A practical introduction to how brands are built and grown online today — from content and social to search and performance basics.",
    keySkills: [
      "Social media strategy & content",
      "Search & performance marketing basics",
      "Analytics & campaign measurement",
      "Content planning & copywriting",
      "Brand & audience thinking",
    ],
    whoShouldJoin: [
      "Anyone curious about how brands grow online",
      "Small-business owners who want to market themselves",
      "Career starters aiming for marketing or social media roles",
    ],
  },
] as const;

export type Course = (typeof courses)[number];

export const courseFAQs = [
  {
    q: "Do I need prior experience to join?",
    a: "No prior experience is required — placeholder answer, to be confirmed with real admission criteria.",
  },
  {
    q: "How is the course delivered?",
    a: "Delivery format (in-person / hybrid / schedule) — placeholder, to be confirmed.",
  },
  {
    q: "What happens after I complete the course?",
    a: "Next steps after completion — placeholder, to be confirmed with real guidance/placement process.",
  },
];

/* ---------------- Why Skillex ---------------- */
export const principles = [
  {
    icon: "BookOpen",
    title: "Practical Learning",
    desc: "Training built around real tasks, not just theory.",
  },
  {
    icon: "Target",
    title: "Industry-Relevant Skills",
    desc: "Curriculum shaped by what employers actually look for.",
  },
  {
    icon: "Users",
    title: "Expert Guidance",
    desc: "Learn with structured mentorship and support.",
  },
  {
    icon: "TrendingUp",
    title: "Career Readiness",
    desc: "Leave with the confidence to step into your next role.",
  },
] as const;

/* ---------------- Campus / floor plan ---------------- */
export const campusHighlights = [
  { title: "Modern Classrooms", desc: "Bright, well-equipped spaces built for focused learning." },
  { title: "Practical Learning Spaces", desc: "Room to apply what's taught, not just sit and listen." },
  { title: "Meeting & Conference Rooms", desc: "Real environments to practice professional settings." },
  { title: "Student-Friendly Environment", desc: "A campus designed around comfort and community." },
];

export const floorPlanHotspots = [
  { id: 1, name: "Reception", desc: "The first stop for visitors and students arriving on campus." },
  { id: 2, name: "Front Office", desc: "Where day-to-day campus administration is handled." },
  { id: 3, name: "Lounge", desc: "A relaxed space for students to unwind between sessions." },
  { id: 4, name: "Meeting Room", desc: "Small-group meeting space for focused discussion." },
  { id: 5, name: "Facility Room", desc: "Dedicated space for the Skillex training team." },
  { id: 6, name: "Training Room — Hall A", desc: "One of Skillex's primary classroom training spaces." },
  { id: 7, name: "Conference Room", desc: "Larger-format room for presentations and group sessions." },
  { id: 8, name: "Training Room — Hall B", desc: "A second dedicated classroom training space." },
  { id: 9, name: "Wash Area", desc: "Shared campus wash area." },
  { id: 10, name: "Toilet", desc: "Restroom facilities." },
  { id: 11, name: "Toilet", desc: "Restroom facilities." },
] as const;

/* ---------------- Career Journey ---------------- */
export const journeySteps = ["Learn", "Practice", "Grow", "Become Career Ready"];

/* ---------------- Who Can Learn (from Skillex brochure page 5) ---------------- */
export const whoCanLearn = [
  {
    title: "Students & Fresh Graduates",
    tag: "Fresh Start",
    desc: "Transform academic education into job-ready skills that employers demand from day one.",
    icon: "GraduationCap",
  },
  {
    title: "Plus Two / 12th Graduates",
    tag: "Direct Route",
    desc: "Fast-track into high-growth corporate careers without waiting years for a traditional degree.",
    icon: "Sparkles",
  },
  {
    title: "Degree & Diploma Holders",
    tag: "Career Edge",
    desc: "Bridge the gap between college theory and real-world executive workplace demands.",
    icon: "Award",
  },
  {
    title: "Job Seekers & Career Starters",
    tag: "Job Ready",
    desc: "Build professional confidence, strong portfolios, and guaranteed interview readiness.",
    icon: "Briefcase",
  },
  {
    title: "Working Professionals",
    tag: "Growth Track",
    desc: "Upskill in AI tools, managerial administration, digital marketing, or luxury hospitality.",
    icon: "TrendingUp",
  },
  {
    title: "Career Switchers",
    tag: "New Beginning",
    desc: "Smoothly transition into booming industries with hands-on mentoring and portfolio support.",
    icon: "Compass",
  },
  {
    title: "Entrepreneurs & Solopreneurs",
    tag: "Business Lead",
    desc: "Master operations, digital branding, and client management to run and scale your venture.",
    icon: "Zap",
  },
];

/* ---------------- Skills You Will Develop (from Skillex brochure page 7) ---------------- */
export const developedSkills = [
  {
    title: "Professional & Communication Skills",
    desc: "Corporate spoken English, presentation mastery, email correspondence & business etiquette.",
    metric: "95% Mastery",
  },
  {
    title: "Practical Workplace Knowledge",
    desc: "Real office workflows, live administrative systems, documentation, and compliance.",
    metric: "100% Hands-on",
  },
  {
    title: "Technical & Digital Skills",
    desc: "MS Office 365 Pro, CRM software, modern cloud tools, and modern AI productivity workflows.",
    metric: "Industry Tools",
  },
  {
    title: "Problem-Solving Abilities",
    desc: "Critical thinking, conflict resolution, crisis handling, and operational troubleshooting.",
    metric: "Real Cases",
  },
  {
    title: "Customer Service Excellence",
    desc: "Guest relationship management, empathy-driven support, front-office diplomacy, and client retention.",
    metric: "Client Focus",
  },
  {
    title: "Teamwork & Leadership",
    desc: "Cross-functional collaboration, team coordination, meeting leadership, and peer management.",
    metric: "Leadership",
  },
  {
    title: "Confidence & Professionalism",
    desc: "Poise, executive grooming, boardroom presentation, and workplace confidence.",
    metric: "Executive Poise",
  },
  {
    title: "Career-Ready Edge",
    desc: "Mock interview drilling, professional portfolio development, salary negotiation & resume craft.",
    metric: "Placement Ready",
  },
];

/* ---------------- Career Opportunities Matrix (from Skillex brochure page 6) ---------------- */
export const careerMatrix = {
  "office-administration": {
    category: "Office Administration",
    subtitle: "High-demand corporate backbone roles",
    roles: [
      { title: "Office Administrator", tag: "Management" },
      { title: "Administrative Assistant", tag: "Operations" },
      { title: "Front Office Executive", tag: "Client Relations" },
      { title: "Receptionist / Executive Concierge", tag: "Guest Relations" },
      { title: "Office Coordinator", tag: "Project Support" },
      { title: "Data Entry Executive", tag: "Data & Systems" },
      { title: "Customer Service Executive", tag: "Client Support" },
    ],
  },
  hospitality: {
    category: "Hospitality Management",
    subtitle: "Global luxury service & guest experience careers",
    roles: [
      { title: "Front Office Executive", tag: "Guest Relations" },
      { title: "Guest Relations Executive", tag: "VIP Services" },
      { title: "Hotel Receptionist", tag: "Front of House" },
      { title: "Housekeeping Executive", tag: "Operations" },
      { title: "Food & Beverage Service Staff", tag: "Service" },
      { title: "Hospitality Coordinator", tag: "Events & Logistics" },
      { title: "Customer Service Executive", tag: "Client Care" },
    ],
  },
  "digital-marketing": {
    category: "Digital Marketing",
    subtitle: "Modern high-growth digital brand careers",
    roles: [
      { title: "Digital Marketing Executive", tag: "Campaigns" },
      { title: "Social Media Executive", tag: "Community" },
      { title: "SEO Executive", tag: "Organic Growth" },
      { title: "Content Marketing Executive", tag: "Creative" },
      { title: "Social Media Manager", tag: "Brand Strategy" },
      { title: "Digital Advertising Executive", tag: "Performance Ads" },
      { title: "Content Creator", tag: "Visual & Copy" },
    ],
  },
};

/* ---------------- Essential Add-Ons (Competitor placement & AI era edge) ---------------- */
export const essentialAddons = [
  {
    title: "Modern AI Era Office Tools",
    desc: "Harness AI assistants (ChatGPT, Copilot, Notion AI) to automate emails, spreadsheets, data analysis, and presentations 5x faster.",
    badge: "AI Powered",
    icon: "Bot",
  },
  {
    title: "Spoken English & Business Fluency",
    desc: "Intensive accent neutralization, vocabulary building, boardroom speaking, and confident phone/video call communication.",
    badge: "Fluency",
    icon: "MessageSquare",
  },
  {
    title: "Accounting & Financial Basics",
    desc: "Learn core financial record-keeping, billing, vouchers, invoices, and accounting software fundamentals without confusion.",
    badge: "Practical",
    icon: "Calculator",
  },
  {
    title: "MS Office 365 Pro Mastery",
    desc: "Master Excel (VLOOKUP, Pivot Tables, Dashboards), polished Word reports, and executive PowerPoint presentations like a seasoned pro.",
    badge: "Corporate Standard",
    icon: "FileSpreadsheet",
  },
  {
    title: "Rigorous Interview Coaching",
    desc: "One-on-one mock interviews, HR round preparation, video portfolio building, and guaranteed confidence drills.",
    badge: "Placement Edge",
    icon: "UserCheck",
  },
  {
    title: "Speed Data Entry & Precision",
    desc: "Touch typing mastery, error-checking protocols, and high-speed data entry accuracy demanded by MNCs.",
    badge: "Accuracy",
    icon: "Keyboard",
  },
];

/* ---------------- Hiring Sectors & Placement Ecosystem ---------------- */
export const hiringSectors = [
  "Corporate MNCs",
  "IT & Software Companies",
  "Private Enterprises",
  "Hospitals & Healthcare",
  "HR Consultancies",
  "Star Hotels & Resorts",
  "Aviation & Travel Hubs",
  "Banking & Financial Firms",
  "Educational Institutions",
  "Logistics & Production Hubs",
];

export const placementStats = [
  { value: "100%", label: "Placement Assistance", detail: "Dedicated career support team" },
  { value: "1000+", label: "Successful Alumni", detail: "Placed across top corporate sectors" },
  { value: "3 Months", label: "Intensive Program", detail: "Hands-on, project-based training" },
  { value: "10+", label: "Hiring Industry Sectors", detail: "Corporate, IT, Hospitality & more" },
];

/* ---------------- Student Stories & Real Placement Wall ---------------- */
export const studentStories = [
  {
    name: "Fathima Fidha",
    course: "Office Administration",
    role: "Front Office Executive",
    company: "Aster Healthcare Group",
    quote:
      "Skillex completely transformed my career trajectory. The practical office software training and spoken English confidence drills helped me land my dream role within two weeks of graduation.",
  },
  {
    name: "Abbas Ameen",
    course: "Digital Marketing",
    role: "Performance Marketing Executive",
    company: "PixelCraft Media",
    quote:
      "Unlike traditional theoretical courses, at Skillex we worked on live ad campaigns, SEO audits, and content strategies. The mentors actually care about your growth.",
  },
  {
    name: "Shahana Sherin",
    course: "Hospitality Management",
    role: "Guest Relations Coordinator",
    company: "Grand Hyatt",
    quote:
      "The hands-on simulation in the front office lab and grooming sessions gave me the poise needed for 5-star international hospitality standards.",
  },
  {
    name: "Salmanul Faris",
    course: "Office Administration",
    role: "Administrative Coordinator",
    company: "Lulu Group International",
    quote:
      "The Excel mastery and business documentation modules made me stand out in my interviews. Skillex gave me the exact tools I use every single day at work.",
  },
];

/* ---------------- Insights Articles ---------------- */
export const insightCategories = [
  "Digital Marketing",
  "Career Guide",
  "Hospitality",
  "Office Administration",
];

export const insightArticles = [
  {
    slug: "ai-tools-transforming-modern-office-administration",
    category: "Office Administration",
    title: "How AI Tools are Transforming Modern Office Administration in 2026",
    excerpt: "Discover the essential AI prompts, automated spreadsheets, and smart scheduling tools that modern executive assistants use.",
  },
  {
    slug: "top-digital-marketing-skills-employers-look-for",
    category: "Digital Marketing",
    title: "The Most In-Demand Digital Marketing Skills Hiring Managers Want",
    excerpt: "From AI-assisted content creation to performance analytics, here is what sets standout marketers apart in today's job market.",
  },
  {
    slug: "careers-in-modern-hospitality-and-guest-relations",
    category: "Hospitality",
    title: "Navigating Career Growth in Luxury Hospitality and Guest Experience",
    excerpt: "An insider guide to front-of-house excellence, VIP guest handling, and career progression across international hotel chains.",
  },
  {
    slug: "how-to-ace-your-first-corporate-job-interview",
    category: "Career Guide",
    title: "The Ultimate Guide to Acing Your First Corporate Interview",
    excerpt: "Key strategies for confident body language, answering competency questions, and presenting your Skillex portfolio with impact.",
  },
];
