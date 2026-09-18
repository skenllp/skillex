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
  // Single central WhatsApp number — update this once and every
  // course-specific WhatsApp CTA across the site picks it up.
  whatsappPlaceholder: "https://wa.me/910000000000",
  addressPlaceholder: "Skillex Campus address — placeholder, to be supplied",
};

/** Builds a wa.me link pre-filled with a course-specific enquiry message,
 * so learners never have to type the course name themselves. */
export function whatsappLinkFor(message: string) {
  return `${siteConfig.whatsappPlaceholder}?text=${encodeURIComponent(message)}`;
}

/* ----------------------------------------------------------------------
   Courses — single source of truth.
   Every course-facing surface (homepage cards, showcase, course pages,
   career pathways, comparison table, SEO metadata, WhatsApp CTAs and the
   future AI Career Advisor) reads from this one array. Do not hardcode
   course names/slugs anywhere else — import from here instead.
------------------------------------------------------------------------- */
export const courses = [
  {
    id: "office-administration-hr",
    n: "01",
    number: 1,
    slug: "office-administration-hr",
    title: "Office Administration & HR",
    category: "Office Administration & HR",
    /** Real photography pending — see /ui/CourseImage.tsx fallback. */
    image: "/assets/course-office-administration.jpg",
    imageAlt: "Office Administration and HR professional training at Skillex",
    short:
      "Build practical workplace skills across office administration, communication, coordination and HR fundamentals.",
    intro:
      "A practical career-focused programme designed to develop the administrative, communication and people-management skills needed in modern workplaces.",
    focus: "Running the administrative and people-support backbone of a modern workplace.",
    learningStyle: "Hands-on office simulation, documentation drills and HR case practice.",
    skillTags: ["Office Administration", "HR Fundamentals", "Workplace Communication", "Office Software"],
    keySkills: [
      "Office Administration",
      "HR Fundamentals",
      "Workplace Communication",
      "Documentation & Coordination",
      "Office Software",
      "Employee Support",
      "Professional Etiquette",
    ],
    whoShouldJoin: [
      "School or college leavers exploring an office-based career",
      "Career switchers moving into administration or HR support roles",
      "Anyone who wants structured, practical office and people skills",
    ],
    careerPaths: [
      { title: "Office Administrator", tag: "Administration" },
      { title: "Administrative Assistant", tag: "Operations" },
      { title: "HR Assistant", tag: "People Support" },
      { title: "HR Coordinator", tag: "People Support" },
      { title: "Front Office Executive", tag: "Client Relations" },
      { title: "Office Coordinator", tag: "Project Support" },
      { title: "People Operations Assistant", tag: "HR Operations" },
    ],
    /** Verbatim from the official Office Administration & HR course PDF
     * ("What Will You Learn?"). Single-source-of-truth for the premium
     * curriculum grid and the curriculum breakdown on the course page. */
    curriculumGroups: [
      {
        title: "What You'll Learn",
        items: [
          "Office Management & Administration",
          "MS Word, Excel & PowerPoint",
          "Professional Email & Communication",
          "Documentation & Filing",
          "Data Entry & Record Management",
          "Scheduling & Appointment Management",
          "Meeting & Event Coordination",
          "Customer Service Skills",
          "Basic Accounting & Billing",
          "HR & Administrative Support",
          "Professional Etiquette",
          "Workplace Communication",
        ],
      },
    ],
    whatsappMessage:
      "Hi Skillex, I'm interested in the Office Administration & HR course. I would like to know more about the programme.",
    keywords: [
      "office administration",
      "hr",
      "human resources",
      "administrative assistant",
      "hr coordinator",
      "office coordinator",
      "front office",
      "people operations",
    ],
    seo: {
      title: "Office Administration & HR Course | Skillex",
      description:
        "A career-focused programme building practical office administration, communication, coordination and HR fundamentals for modern workplaces.",
    },
  },
  {
    id: "business-administration-accounting",
    n: "02",
    number: 2,
    slug: "business-administration-accounting",
    title: "Business Administration & Accounting",
    category: "Business Administration & Accounting",
    /** Verbatim from the official course PDF. */
    duration: "3 Month Career Program",
    image: "/assets/course-business-administration.jpg",
    imageAlt: "Business Administration and Accounting training at Skillex",
    short:
      "Build practical business operations, office management and accounting skills for today's job market.",
    /** Verbatim course overview from the official Business Administration
     * & Accounting course PDF. */
    intro:
      "The Business Administration & Accounting course is designed to provide practical knowledge in business operations, office management, accounting, financial documentation, and professional workplace skills. It helps learners understand how businesses function while developing the essential accounting and administrative skills required in today's competitive job market.",
    focus: "Understanding how businesses operate — from office administration to financial documentation.",
    learningStyle: "Applied bookkeeping, accounting-software practice and office-administration exercises.",
    skillTags: ["Business Administration & Management", "Financial Accounting", "Bookkeeping", "GST & Tax Basics"],
    keySkills: [
      "Business Administration & Management",
      "Financial Accounting",
      "Bookkeeping",
      "Tally & Accounting Software",
      "GST & Tax Basics",
      "Payroll Management",
      "Office Administration",
      "MS Office & Excel",
      "Financial Documentation",
      "Business Communication",
      "Banking & Financial Transactions",
      "Basic HR & Customer Management",
    ],
    /** Verbatim "Who Can Join?" from the official course PDF. */
    whoShouldJoin: [
      "Plus Two / Higher Secondary Students",
      "Graduates",
      "Job Seekers",
      "Beginners in Accounting",
      "Entrepreneurs & Business Owners",
      "Anyone looking to build a career in Administration & Finance",
    ],
    /** Verbatim "Career Opportunities" from the official course PDF.
     * Presented on-site as "Potential Career Pathways" — no employment
     * outcome is implied. */
    careerPaths: [
      { title: "Accounts Assistant", tag: "Accounts & Finance" },
      { title: "Accountant", tag: "Accounts & Finance" },
      { title: "Office Administrator", tag: "Administration" },
      { title: "Accounts Executive", tag: "Accounts & Finance" },
      { title: "Finance Assistant", tag: "Accounts & Finance" },
      { title: "Administrative Executive", tag: "Administration" },
      { title: "Billing Executive", tag: "Accounts & Finance" },
      { title: "Payroll Assistant", tag: "Accounts & Finance" },
      { title: "Business Support Executive", tag: "Operations" },
    ],
    /** Verbatim from the official Business Administration & Accounting
     * course PDF ("What Will You Learn?"). Single-source-of-truth for the
     * premium curriculum grid and the curriculum breakdown on the course
     * page. */
    curriculumGroups: [
      {
        title: "What You'll Learn",
        items: [
          "Business Administration & Management",
          "Financial Accounting",
          "Bookkeeping",
          "Tally & Accounting Software",
          "GST & Tax Basics",
          "Payroll Management",
          "Office Administration",
          "MS Office & Excel",
          "Financial Documentation",
          "Business Communication",
          "Banking & Financial Transactions",
          "Basic HR & Customer Management",
        ],
      },
    ],
    /** "Why Choose This Course?" from the official course PDF — Practical
     * Learning, Industry-Relevant Skills, Career-Focused Training,
     * Professional Development (corrected from a PDF layout/typo split). */
    whyChoose: ["Practical Learning", "Industry-Relevant Skills", "Career-Focused Training", "Professional Development"],
    whatsappMessage:
      "Hi Skillex, I'm interested in the Business Administration & Accounting course. I would like to know more about the programme.",
    keywords: [
      "business administration",
      "accounting",
      "bookkeeping",
      "tally",
      "gst",
      "payroll management",
      "accounts assistant",
      "billing executive",
      "financial documentation",
    ],
    seo: {
      title: "Business Administration & Accounting Course | Skillex",
      description:
        "A 3 month career program building practical business operations, office management and accounting skills for today's competitive job market.",
    },
  },
  {
    id: "digital-marketing",
    n: "03",
    number: 3,
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Digital Marketing",
    image: "/assets/course-digital-marketing.jpg",
    imageAlt: "Digital Marketing training at Skillex",
    short:
      "Master modern digital marketing with practical tools, AI-assisted workflows and real-world campaign skills.",
    intro:
      "A practical digital marketing programme covering modern marketing channels, content, advertising, analytics and AI-assisted marketing workflows.",
    focus: "Planning, launching and measuring campaigns across today's digital channels.",
    learningStyle: "Live campaign practice, analytics reviews and AI-assisted marketing workflows.",
    skillTags: ["SEO", "Social Media Marketing", "Meta & Google Advertising", "AI Marketing Tools"],
    keySkills: [
      "Digital Marketing Strategy",
      "Social Media Marketing",
      "SEO",
      "Content Marketing",
      "Meta Advertising",
      "Google Advertising",
      "Analytics",
      "AI Marketing Tools",
      "Campaign Planning",
      "Copywriting",
    ],
    whoShouldJoin: [
      "Anyone curious about how brands grow online",
      "Small-business owners who want to market themselves",
      "Career starters aiming for marketing or social media roles",
    ],
    careerPaths: [
      { title: "Digital Marketing Executive", tag: "Campaigns" },
      { title: "Social Media Executive", tag: "Community" },
      { title: "SEO Executive", tag: "Organic Growth" },
      { title: "Performance Marketing Executive", tag: "Performance Ads" },
      { title: "Content Marketing Executive", tag: "Creative" },
      { title: "Digital Marketing Coordinator", tag: "Campaigns" },
    ],
    /** Verbatim from the official AI-Integrated Digital Marketing course
     * PDF ("What Will You Learn?" + "AI Integration"). */
    curriculumGroups: [
      {
        title: "Core Learning Areas",
        items: [
          "Digital Marketing Fundamentals",
          "SEO",
          "Social Media Marketing",
          "Meta Ads",
          "Google Ads",
          "Content Marketing",
          "Email Marketing",
          "Analytics",
        ],
      },
      {
        title: "AI Integration",
        items: [
          "AI Content Creation",
          "AI-powered Social Media",
          "AI for SEO",
          "AI Ad Copywriting",
          "AI Image & Video Creation",
          "Marketing Automation",
        ],
      },
    ],
    whatsappMessage:
      "Hi Skillex, I'm interested in the Digital Marketing course. I would like to know more about the programme.",
    keywords: [
      "digital marketing",
      "seo",
      "social media marketing",
      "performance marketing",
      "content marketing",
      "meta ads",
      "google ads",
      "ai marketing",
    ],
    seo: {
      title: "Digital Marketing Course | Skillex",
      description:
        "A practical digital marketing programme covering modern channels, content, advertising, analytics and AI-assisted marketing workflows.",
    },
  },
] as const;

export type Course = (typeof courses)[number];

/** Flattens a course's curriculumGroups into a single ordered list —
 * used to number items 01, 02, 03... continuously across groups. */
export function curriculumItemsFor(course: Course) {
  return course.curriculumGroups.flatMap((g) => g.items);
}

/** Shared framing line for every career-pathway section — outcomes are
 * presented as possibilities shaped by the learner, not guarantees. */
export const careerPathwaysNote =
  "Potential career pathways may include the roles below. Actual outcomes depend on individual performance, experience and market conditions.";

/* ---------------- Career Opportunities Matrix ----------------
   Derived from `courses` so career-path data lives in exactly one place
   (see courses[].careerPaths). Keyed by slug for existing tab-based UI. */
export const careerMatrix = courses.reduce(
  (acc, c) => {
    acc[c.slug] = {
      category: c.category,
      subtitle: c.focus,
      roles: c.careerPaths.map((r) => ({ title: r.title, tag: r.tag })),
    };
    return acc;
  },
  {} as Record<string, { category: string; subtitle: string; roles: { title: string; tag: string }[] }>
);

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
    desc: "Build professional confidence, strong portfolios, and interview readiness.",
    icon: "Briefcase",
  },
  {
    title: "Working Professionals",
    tag: "Growth Track",
    desc: "Upskill in AI tools, business administration and accounting, or digital marketing.",
    icon: "TrendingUp",
  },
  {
    title: "Career Switchers",
    tag: "New Beginning",
    desc: "Smoothly transition into booming industries with hands-on mentoring and portfolio support.",
    icon: "Compass",
  },
  {
    title: "Entrepreneurs & Business Owners",
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
    metric: "Professional Skill",
  },
  {
    title: "Practical Workplace Knowledge",
    desc: "Real office workflows, live administrative and accounting systems, documentation, and compliance.",
    metric: "Workplace Application",
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

/* ---------------- Essential Add-Ons (Competitor placement & AI era edge) ---------------- */
export const essentialAddons = [
  {
    title: "Modern AI Era Office Tools",
    desc: "Harness AI assistants (ChatGPT, Copilot, Notion AI) to automate emails, spreadsheets, data analysis, and presentations more efficiently.",
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
    desc: "One-on-one mock interviews, HR round preparation, video portfolio building, and structured confidence-building drills.",
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
  "Accounting & Finance Firms",
  "HR Consultancies",
  "Marketing & Advertising Agencies",
  "Banking & Financial Firms",
  "Educational Institutions",
  "E-commerce & Retail",
  "Logistics & Production Hubs",
];

export const placementStats = [
  { value: "1:1", label: "Placement Assistance", detail: "Dedicated career support team" },
  { value: "1000+", label: "Successful Alumni", detail: "Placed across top corporate sectors" },
  { value: "3 Months", label: "Intensive Program", detail: "Hands-on, project-based training" },
  { value: "10+", label: "Hiring Industry Sectors", detail: "Corporate, IT, Accounting & more" },
];

/* ---------------- Student Stories & Real Placement Wall ---------------- */
export const studentStories = [
  {
    name: "Fathima Fidha",
    course: "Office Administration & HR",
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
    course: "Business Administration & Accounting",
    role: "Accounts & Administration Executive",
    company: "Apex Business Solutions",
    quote:
      "The bookkeeping and business documentation modules gave me practical, day-one confidence with the accounts and admin work I now handle every week.",
  },
  {
    name: "Salmanul Faris",
    course: "Office Administration & HR",
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
  "Business Administration & Accounting",
  "Office Administration & HR",
];

export const insightArticles = [
  {
    slug: "ai-tools-transforming-modern-office-administration",
    category: "Office Administration & HR",
    title: "How AI Tools are Transforming Modern Office Administration in 2026",
    excerpt: "Discover the essential AI prompts, automated spreadsheets, and smart scheduling tools that modern executive assistants use.",
    image: "/assets/course-office-administration.jpg",
  },
  {
    slug: "top-digital-marketing-skills-employers-look-for",
    category: "Digital Marketing",
    title: "The Most In-Demand Digital Marketing Skills Hiring Managers Want",
    excerpt: "From AI-assisted content creation to performance analytics, here is what sets standout marketers apart in today's job market.",
    image: "/assets/course-digital-marketing.jpg",
  },
  {
    slug: "accounting-fundamentals-every-business-administrator-needs",
    category: "Business Administration & Accounting",
    title: "Accounting Fundamentals Every Business Administrator Needs",
    excerpt: "A practical look at the bookkeeping, billing and financial-documentation basics that keep growing businesses organised.",
    image: "/assets/course-business-administration.jpg",
  },
  {
    slug: "how-to-ace-your-first-corporate-job-interview",
    category: "Career Guide",
    title: "The Ultimate Guide to Acing Your First Corporate Interview",
    excerpt: "Key strategies for confident body language, answering competency questions, and presenting your Skillex portfolio with impact.",
    image: "/assets/student-stories-hero.jpg",
  },
];
