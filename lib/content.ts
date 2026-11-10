import { images } from "@/lib/images";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Campus", href: "/campus" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Skillex",
  tagline: "Learn Skills. Build Your Career.",
  email: "skillexcampus@gmail.com",
  phone: "+91 92073 45034",
  phoneRaw: "+919207345034",
  phonePlaceholder: "+91 92073 45034",
  // Single central WhatsApp number — update this once and every
  // course-specific WhatsApp CTA across the site picks it up.
  whatsappPlaceholder: "https://wa.me/919207345034",
  address: "Panayathil Complex, opposite bus stand, Ullanam, Parappanangadi, Keralam 676303",
  addressPlaceholder: "Panayathil Complex, opposite bus stand, Ullanam, Parappanangadi, Keralam 676303",
  mapsUrl: "https://maps.google.com/?q=Panayathil+Complex,+opposite+bus+stand,+Ullanam,+Parappanangadi,+Kerala+676303",
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
    id: "business-administration-accounting",
    n: "01",
    number: 1,
    slug: "business-administration-accounting",
    title: "Office Administration & Basic Accounting",
    category: "Office Administration & Basic Accounting",
    duration: "6 Month Program — 4 months classes + 2 months Internship / Job Opportunity",
    dailyHours: "3 hours a day",
    image: images.courseAccounting,
    imageAlt: "Office Administration & Basic Accounting training at Skillex",
    short: "Build practical office, accounting and business administration skills.",
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
      "Homemakers returning to study and work",
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
      "Hi Skillex, I'm interested in the Office Administration & Basic Accounting course. I would like to know more about the programme.",
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
      title: "Office Admin & Accounting Course Malappuram | Skillex",
      description:
        "6-month program in office administration and basic accounting: Tally, GST basics, MS Excel. 4 months classes + 2 months internship. Parappanangadi, Kerala.",
    },
  },
  {
    id: "digital-marketing",
    n: "02",
    number: 2,
    slug: "digital-marketing",
    title: "AI Integrated Digital Marketing & Graphic Designing",
    category: "AI Integrated Digital Marketing & Graphic Designing",
    duration: "6 Month Program — 4 months classes + 2 months Internship / Job Opportunity",
    dailyHours: "3 hours a day",
    image: images.courseDigitalMarketing,
    imageAlt: "AI Integrated Digital Marketing & Graphic Designing training at Skillex",
    short: "Learn digital marketing and graphic designing with today's AI-powered tools.",
    intro:
      "A practical programme covering digital marketing, graphic designing, content, advertising, analytics and AI-assisted marketing workflows.",
    focus: "Planning, launching and measuring campaigns across today's digital channels.",
    learningStyle: "Live campaign practice, analytics reviews and AI-assisted marketing workflows.",
    skillTags: ["Social Media Marketing", "Meta & Google Advertising", "Graphic Designing", "AI Marketing Tools"],
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
      "Graphic Designing",
    ],
    whoShouldJoin: [
      "Anyone curious about how brands grow online",
      "Small-business owners who want to market themselves",
      "Career starters aiming for marketing, design or social media roles",
      "Homemakers returning to study and work",
    ],
    careerPaths: [
      { title: "Digital Marketing Executive", tag: "Campaigns" },
      { title: "Social Media Executive", tag: "Community" },
      { title: "SEO Executive", tag: "Organic Growth" },
      { title: "Performance Marketing Executive", tag: "Performance Ads" },
      { title: "Content Marketing Executive", tag: "Creative" },
      { title: "Digital Marketing Coordinator", tag: "Campaigns" },
      { title: "Graphic Designer", tag: "Creative" },
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
        title: "Graphic Designing",
        items: [
          "Graphic Design Fundamentals",
          "Social Media Creatives & Posters",
          "Branding & Logo Basics",
          "Layout, Colour & Typography",
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
      "Hi Skillex, I'm interested in the AI Integrated Digital Marketing & Graphic Designing course. I would like to know more about the programme.",
    keywords: [
      "digital marketing",
      "seo",
      "social media marketing",
      "performance marketing",
      "content marketing",
      "meta ads",
      "google ads",
      "ai marketing",
      "graphic designing",
    ],
    seo: {
      title: "Digital Marketing & Graphic Design Course | Skillex",
      description:
        "6-month AI digital marketing and graphic designing course: social media, Meta ads, content, analytics. 4 months classes + 2 months internship. Parappanangadi.",
    },
  },
  {
    id: "professional-diploma-accounting-taxation",
    n: "03",
    number: 3,
    slug: "professional-diploma-accounting-taxation",
    title: "Professional Diploma in Accounting & Taxation",
    category: "Professional Diploma in Accounting & Taxation",
    duration: "6 Month Program — 4 months classes + 2 months Internship / Job Opportunity",
    dailyHours: "3 hours a day",
    image: images.courseAccounting,
    imageAlt: "Professional Diploma in Accounting & Taxation training at Skillex",
    short: "A professional diploma in accounting, GST and taxation for finance careers.",
    intro:
      "A professional diploma programme covering accounting, bookkeeping, GST and taxation, designed to prepare learners for accounts and finance roles through practical, software-based training.",
    focus: "Managing business accounts, GST and tax work with confidence.",
    learningStyle: "Hands-on accounting-software practice, GST and tax exercises and real-style financial documentation.",
    skillTags: ["Financial Accounting", "Tally & Accounting Software", "GST", "Taxation"],
    keySkills: [
      "Financial Accounting",
      "Bookkeeping",
      "Tally & Accounting Software",
      "GST & Tax Basics",
      "Taxation Fundamentals",
      "Payroll Management",
      "MS Excel for Accounts",
      "Financial Documentation",
      "Banking & Financial Transactions",
    ],
    whoShouldJoin: [
      "Commerce students and graduates",
      "Homemakers returning to study and work",
      "Job seekers building an accounts career",
      "Accounts assistants who want to upskill",
      "Entrepreneurs & business owners",
    ],
    careerPaths: [
      { title: "Accountant", tag: "Accounts & Finance" },
      { title: "Accounts Executive", tag: "Accounts & Finance" },
      { title: "Tax Assistant", tag: "Taxation" },
      { title: "GST Assistant", tag: "Taxation" },
      { title: "Finance Assistant", tag: "Accounts & Finance" },
      { title: "Billing Executive", tag: "Accounts & Finance" },
      { title: "Payroll Assistant", tag: "Accounts & Finance" },
    ],
    curriculumGroups: [
      {
        title: "What You'll Learn",
        items: [
          "Financial Accounting",
          "Bookkeeping",
          "Tally & Accounting Software",
          "GST & Tax Basics",
          "Taxation Fundamentals",
          "Payroll Management",
          "MS Excel for Accounts",
          "Financial Documentation",
          "Banking & Financial Transactions",
        ],
      },
    ],
    whatsappMessage:
      "Hi Skillex, I'm interested in the Professional Diploma in Accounting & Taxation. I would like to know more about the programme.",
    keywords: [
      "accounting diploma",
      "taxation",
      "gst",
      "tally",
      "bookkeeping",
      "accountant",
      "payroll",
    ],
    seo: {
      title: "Accounting & Taxation Diploma Malappuram | Skillex",
      description:
        "Professional diploma in accounting, Tally, GST and taxation. 6 months: 4 months classes + 2 months internship. Parappanangadi, Kerala.",
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
    a: "Our programs are designed for learners starting their careers. Contact the team to confirm eligibility for the course you are interested in.",
  },
  {
    q: "How is the course delivered?",
    a: "Courses are taught in person at our Parappanangadi campus. Call or WhatsApp us for current batch timings.",
  },
  {
    q: "What happens after I complete the course?",
    a: "You finish with practical skills and a portfolio of work, and our team guides you on the career pathways for your course.",
  },
];

/* ---------------- Why Skillex ---------------- */
export const principles = [
  { icon: "BookOpen", title: "Practical Learning", desc: "Learn by doing, not just by listening." },
  { icon: "Target", title: "Industry-Relevant Skills", desc: "Build skills aligned with today's workplace." },
  { icon: "Compass", title: "Career Guidance", desc: "Get support preparing for your next career step." },
  { icon: "Users", title: "Experienced Mentors", desc: "Learn with practical guidance from experienced trainers." },
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
export const journeySteps = [
  { title: "Choose Your Course", desc: "Pick the program that fits your goal." },
  { title: "Learn Through Practice", desc: "Build skills with hands-on training." },
  { title: "Get Career Ready", desc: "Prepare for your next step with guidance." },
];

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
  { value: "6 Months", label: "Career Program", detail: "4 months classes + 2 months internship" },
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
    body: [
      { heading: "Why AI matters in the office", text: "Office administration used to be defined by how fast you could type, file and schedule. Today, much of that routine work can be sped up with AI assistants. The administrators who stand out are the ones who know which tools to use, how to ask them for the right output, and how to check the result before it goes to a manager or client." },
      { heading: "Drafting and communication", text: "AI writing assistants can turn rough notes into a clear email, summarise a long thread, or prepare meeting minutes in minutes. The skill is in the prompt: state the audience, the purpose, the tone and any facts that must be included. Always read the draft, correct names, dates and figures, and keep a professional voice." },
      { heading: "Spreadsheets and data", text: "Modern spreadsheet tools can suggest formulas, clean messy lists and build simple summaries from plain-language instructions. A solid grounding in Excel or Google Sheets still matters, because you need to understand what the formula is doing to trust it." },
      { heading: "Scheduling and coordination", text: "Smart calendars can propose meeting times, send reminders and flag clashes. Administrators who set these up well free hours each week for work that needs judgement, such as coordinating teams, handling vendors and supporting leadership." },
      { heading: "What to build next", text: "Start small: pick one repetitive task, try an AI tool on it, and measure the time saved. Pair that habit with core skills such as business communication, documentation and basic accounting, and you become the person every team wants to hire." },
    ],
    category: "Office Administration & HR",
    title: "How AI Tools are Transforming Modern Office Administration in 2026",
    excerpt: "Discover the essential AI prompts, automated spreadsheets, and smart scheduling tools that modern executive assistants use.",
    image: "/assets/course-office-administration.jpg",
  },
  {
    slug: "top-digital-marketing-skills-employers-look-for",
    body: [
      { heading: "Beyond posting on social media", text: "Employers hiring digital marketers look for people who can connect activity to results. Knowing how to schedule a post is the starting point; knowing why it worked, and what to do next, is what gets you hired." },
      { heading: "Content and storytelling", text: "Clear writing, simple design and short-form video are everyday skills. AI tools can speed up first drafts and ideas, but brands still need a human who understands the audience and keeps the message accurate and on-brand." },
      { heading: "Paid advertising", text: "Running campaigns on Meta and Google means setting a budget, choosing an audience, writing the ad and reading the numbers. Employers value candidates who have actually practised building and optimising a campaign, even a small one." },
      { heading: "Search and analytics", text: "Search engine optimisation brings steady, free traffic, and analytics tools show what visitors actually do. Being comfortable with metrics such as reach, clicks, conversions and cost per lead lets you explain your work in business terms." },
      { heading: "Building proof", text: "A small portfolio beats a long list of claims. Document a campaign you planned, the content you made and the results you tracked. Practical projects like these are what turn training into job-ready experience." },
    ],
    category: "Digital Marketing",
    title: "The Most In-Demand Digital Marketing Skills Hiring Managers Want",
    excerpt: "From AI-assisted content creation to performance analytics, here is what sets standout marketers apart in today's job market.",
    image: "/assets/course-digital-marketing.jpg",
  },
  {
    slug: "accounting-fundamentals-every-business-administrator-needs",
    body: [
      { heading: "Why administrators need accounting basics", text: "Every growing business runs on organised records. Even if you are not an accountant, understanding how money is recorded helps you work with owners, accountants and auditors without confusion." },
      { heading: "Bookkeeping", text: "Bookkeeping means recording each transaction accurately: sales, purchases, expenses and payments. Consistent entries, supported by bills and receipts, make it easy to see how the business is really performing." },
      { heading: "Billing and invoicing", text: "A correct invoice includes the customer details, itemised charges, applicable taxes, dates and payment terms. Following up on unpaid invoices on time protects cash flow." },
      { heading: "Financial documentation", text: "Keep vouchers, bank statements, invoices and tax records filed in a logical order, on paper and digitally. Good documentation saves hours at tax time and builds trust during any review." },
      { heading: "Using accounting software", text: "Tools such as Tally and spreadsheet-based ledgers are widely used by small and medium businesses. Practising on real examples is the quickest way to become confident, and it makes you a stronger candidate for administration and accounts roles." },
    ],
    category: "Business Administration & Accounting",
    title: "Accounting Fundamentals Every Business Administrator Needs",
    excerpt: "A practical look at the bookkeeping, billing and financial-documentation basics that keep growing businesses organised.",
    image: "/assets/course-business-administration.jpg",
  },
  {
    slug: "how-to-ace-your-first-corporate-job-interview",
    body: [
      { heading: "Prepare before you walk in", text: "Research the company, read the job description carefully and note which of your skills match each requirement. Prepare a short introduction covering who you are, what you have learned and why this role suits you." },
      { heading: "Answering competency questions", text: "Interviewers often ask about teamwork, problem solving and handling pressure. Use a simple structure: describe the situation, what you did, and the result. Real examples from training projects count when you are starting out." },
      { heading: "Body language and communication", text: "Arrive early, greet everyone politely, sit upright, and keep steady eye contact. Speak clearly and pause to think before answering. Calm, respectful communication often matters as much as the answer itself." },
      { heading: "Presenting your work", text: "Bring a short portfolio or a few examples of practical work you completed. Walking an interviewer through a project shows initiative and makes your skills concrete." },
      { heading: "Finish well", text: "Ask one or two thoughtful questions about the role and team, thank the interviewer, and send a brief thank-you message afterwards. Each interview, successful or not, teaches you something for the next one." },
    ],
    category: "Career Guide",
    title: "The Ultimate Guide to Acing Your First Corporate Interview",
    excerpt: "Key strategies for confident body language, answering competency questions, and presenting your Skillex portfolio with impact.",
    image: "/assets/student-stories-hero.jpg",
  },
];


/* ---------------- Testimonials ----------------
   Only genuine, verified student testimonials may go here (name, course,
   2–3 sentence quote). While this array is empty the homepage
   "Student Experiences" section stays hidden. The earlier `studentStories`
   entries above are unverified placeholders and are NOT displayed. */
export const testimonials: { name: string; course: string; quote: string }[] = [];
