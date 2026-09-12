# Skillex Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS build of the Skillex
premium career-training website — full site, all phases.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's built

**Homepage** (`app/page.tsx`), in order:
Hero → Course Paths → Why Skillex → Campus Experience → Interactive Floor
Plan → Course Showcase → Career Journey → Student Stories → Career
Insights → Final CTA. Navbar and Footer are global (`app/layout.tsx`), along
with a floating WhatsApp button.

**Pages:**
| Route | Notes |
|---|---|
| `/` | Homepage |
| `/courses` | Course index |
| `/courses/office-administration` | Uses the shared course template |
| `/courses/hospitality` | Uses the shared course template |
| `/courses/digital-marketing` | Uses the shared course template |
| `/campus` | Campus hero + Campus Experience + Floor Plan |
| `/about` | About + Why Skillex |
| `/student-stories` | Full testimonial grid |
| `/insights` | Article index with category filter chips |
| `/insights/[slug]` | Individual article page |
| `/contact` | Contact details + enquiry form |
| `/enquire` | Full-bleed enquiry page |
| `/thank-you` | Post-submit confirmation |
| `/privacy-policy` | Placeholder legal copy |
| `/terms` | Placeholder legal copy |
| 404 | `app/not-found.tsx` |

## Project structure

```
app/
  layout.tsx            Root layout — Navbar, Footer, WhatsApp button, SEO defaults
  page.tsx               Homepage — assembles all sections in brief order
  sitemap.ts / robots.ts SEO: dynamic sitemap + robots.txt
  courses/…               Course index + 3 course pages
  campus/, about/, student-stories/, insights/, contact/, enquire/,
  thank-you/, privacy-policy/, terms/
components/
  Navbar.tsx, Hero.tsx, CourseSection.tsx, WhySkillex.tsx,
  CampusExperience.tsx, FloorPlan.tsx, CourseShowcase.tsx,
  CareerJourney.tsx, StudentStories.tsx, CareerInsights.tsx,
  FinalCTA.tsx, Footer.tsx, WhatsAppButton.tsx, CourseTemplate.tsx
ui/
  Button.tsx, PhotoPlaceholder.tsx, EnquiryForm.tsx
lib/
  content.ts             Single source of truth for all copy/data
public/assets/
  homepage-reference-mockup.png   Your supplied design reference
  brand-style-guide.jpeg           Your supplied brand guide
  campus-floor-plan.jpeg           Your supplied floor plan (used live on /campus and the homepage)
```

## Interactive floor plan

`components/FloorPlan.tsx` renders your real supplied floor-plan photo
(`public/assets/campus-floor-plan.jpeg`) with 11 numbered, clickable
hotspots matching the rooms in your image (Reception, Front Office,
Student Lounge, Meeting Room, Faculty Room, Training Room 1 & 2,
Conference Room, Wash Area, Toilets). Hotspot coordinates are estimated
percentages — **fine-tune the `positions` object** in that file once you
export a clean, cropped version of the floor plan (the supplied file
includes phone status-bar chrome at the top).

## Forms & conversion

- `ui/EnquiryForm.tsx` is used on `/contact`, `/enquire`, and at the bottom
  of every course page. It's **UI-only** — wire `handleSubmit` up to a real
  API route, form service, or CRM before going live. It currently redirects
  to `/thank-you`.
- `components/WhatsAppButton.tsx` and the WhatsApp link in `/contact` point
  to `siteConfig.whatsappPlaceholder` in `lib/content.ts` — replace with
  your real WhatsApp Business number.
- Phone number and campus address are also placeholders in
  `lib/content.ts` (`siteConfig`).

## What's still a placeholder

No stats, testimonials, or facts were invented, per the brief. These are
clearly marked and live in `lib/content.ts` — search for `placeholder` to
find every instance:

- Hero background video (architecture is built — see "Hero video" below — but no video file was supplied)
- Campus Experience section photography/video (no classroom/interior photos beyond the course posters and floor plan were supplied)
- Final CTA background image/video
- Career Insights article images
- Student testimonials (`studentStories`)
- Insights articles (`insightArticles`) — 4 placeholder articles
- Course quick facts: duration, format, fees (`components/CourseTemplate.tsx`)
- Phone number, campus address, WhatsApp number, social links (`siteConfig`, `Footer.tsx`)
- Privacy Policy / Terms body copy (legal review needed before publishing)

## Real assets now wired in

- **Logo** — the official `skillex-logo.png` renders via `ui/Logo.tsx` in the Navbar, mobile drawer and Footer. It's never redrawn or recolored — only a white backing plate is added behind it when it sits over a dark/photo background, for legibility.
- **Course photography** — your 3 supplied campaign posters (Office Administration, Hospitality, Digital Marketing) are compressed to `public/assets/course-*.jpg` and rendered via `ui/CourseImage.tsx`, which crops out each poster's own baked-in text panel (via `object-position` + scale) so it doesn't duplicate our on-page headings. Used on the homepage course cards, Course Showcase, the courses index, and each course page hero.
- **Floor plan** — the real branded render (`public/assets/floor-plan-branded.jpg`) replaces the placeholder in `components/FloorPlan.tsx`, with 11 hotspots positioned directly over the numbers already printed on the image (a subtle pulse-in on load, a green ring on selection — no duplicate number badges drawn on top). On narrow phones the plan scrolls horizontally at full detail instead of being squashed.

## Hero video

`ui/HeroMedia.tsx` is built to spec — `autoplay`, `muted`, `loop`,
`playsInline`, a poster fallback, and it respects
`prefers-reduced-motion` (falls back to a still image if the visitor has
reduced motion enabled). **No video file was supplied**, so it currently
renders the placeholder. To go live: drop an .mp4 at
`public/assets/hero-video.mp4` and pass `videoSrc="/assets/hero-video.mp4"`
into `<HeroMedia />` in `components/Hero.tsx`.


## SEO

- Per-page `metadata` (title/description) on every route
- Open Graph defaults in `app/layout.tsx`
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically — **update `BASE_URL`** in both files (and in
  `app/layout.tsx`) to your real production domain before deploying
- Semantic heading structure (one `h1` per page, `h2`/`h3` for sections)
- Descriptive `alt` text on the floor-plan image; placeholder images carry
  a visible label instead of fake alt text, since they aren't real photos yet

## Brand tokens

| Token | Hex | Tailwind class |
|---|---|---|
| Charcoal Black | `#1A1A1A` | `bg-charcoal` / `text-charcoal` |
| Skill Green | `#8CC63F` | `bg-skill-green` / `text-skill-green` |
| Medium Gray | `#6D6D6D` | `bg-medium-gray` / `text-medium-gray` |
| Light Gray | `#F2F2F2` | `bg-light-gray` / `text-light-gray` |
| White | `#FFFFFF` | `bg-white` / `text-white` |

Typeface: Poppins (via `next/font/google`, loaded in `app/layout.tsx`).

## Before this goes live

1. Replace every `PhotoPlaceholder` with real photography/video (`next/image` / `<video>`)
2. Supply real testimonials, article content, course facts and contact details
3. Wire `EnquiryForm` to a real backend and confirm WhatsApp/phone numbers
4. Set the real production domain in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
5. Legal review of Privacy Policy and Terms pages
6. Cross-browser / device QA pass, plus a Lighthouse performance check
