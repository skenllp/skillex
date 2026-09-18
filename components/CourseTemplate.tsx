import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import CourseImage from "@/ui/CourseImage";
import EnquiryForm from "@/ui/EnquiryForm";
import {
  courseFAQs,
  studentStories,
  careerMatrix,
  careerPathwaysNote,
  whatsappLinkFor,
  curriculumItemsFor,
  type Course,
} from "@/lib/content";

const defaultDuration = "3 Months Intensive";

export default function CourseTemplate({ course }: { course: Course }) {
  const relatedStories = studentStories.filter((s) => s.course === course.title);
  const stories = relatedStories.length ? relatedStories : studentStories.slice(0, 2);
  const roles = careerMatrix[course.slug as keyof typeof careerMatrix]?.roles || [];
  const curriculumItems = curriculumItemsFor(course);
  const duration = "duration" in course && course.duration ? course.duration : defaultDuration;
  const quickFacts = [
    { label: "Duration", value: duration },
    { label: "Format", value: "Practical Lab & Hands-on Simulation" },
    { label: "Level", value: "Beginner to Career-Ready (10+2 / Degree)" },
    { label: "Placement", value: "Placement Guidance & Mentoring" },
  ];

  return (
    <main>
      {/* Course hero */}
      <section className="relative flex min-h-[68vh] w-full items-end overflow-hidden">
        <CourseImage
          src={course.image}
          alt={course.imageAlt}
          variant="showcase"
          className="absolute inset-0 h-full w-full"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-container px-5 pb-16 pt-[160px] md:px-10">
          <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green uppercase">
            <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
            Professional Program
          </p>
          <h1 className="max-w-[640px] text-[38px] font-bold leading-tight text-white md:text-[54px]">
            {course.title}
          </h1>
          <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-white/80">
            {course.short}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`/enquire?course=${course.slug}`}
              className="inline-flex min-h-[50px] items-center gap-2 bg-skill-green px-7 text-[15px] font-semibold text-charcoal transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              Enquire Now <ArrowRight size={16} />
            </a>
            <a
              href="#curriculum"
              className="inline-flex min-h-[50px] items-center gap-2 border border-white/50 px-7 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              Explore Curriculum ↓
            </a>
          </div>
        </div>
      </section>

      {/* Introduction + quick facts */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-14 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              COURSE INTRODUCTION
            </p>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-charcoal">{course.intro}</p>
          </div>
          <div className="border border-black/10 p-7">
            <h3 className="mb-5 text-[14px] font-semibold tracking-wide text-charcoal">Quick Facts</h3>
            <ul className="flex flex-col gap-4">
              {quickFacts.map((f) => (
                <li key={f.label} className="flex justify-between gap-4 border-b border-black/5 pb-3 text-[13.5px]">
                  <span className="text-medium-gray">{f.label}</span>
                  <span className="text-right text-charcoal">{f.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why this course + what you'll learn */}
      <section className="w-full bg-light-gray px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-[26px] font-bold text-charcoal md:text-[30px]">Why this course?</h2>
            {"whyChoose" in course && course.whyChoose ? (
              <ul className="flex max-w-[440px] flex-col gap-3">
                {course.whyChoose.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-medium-gray">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-skill-green" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="max-w-[440px] text-[15px] leading-relaxed text-medium-gray">
                {course.title} is built for people who want practical, job-relevant skills —
                not just theory. Real placement outcomes and industry specifics will be added
                here once supplied.
              </p>
            )}
          </div>
          <div>
            <h2 className="mb-6 text-[26px] font-bold text-charcoal md:text-[30px]">What you&apos;ll learn</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {curriculumItems.map((skill, i) => (
                <div
                  key={skill}
                  className="group flex items-start gap-3 rounded-lg border border-black/8 bg-white/70 px-4 py-3.5 transition-all duration-300 hover:-translate-y-[2px] hover:border-skill-green/40 hover:bg-white"
                >
                  <span className="mt-0.5 shrink-0 text-[12px] font-bold tabular-nums text-skill-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-snug text-charcoal">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="w-full bg-white px-5 py-20 md:px-10 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-[26px] font-bold text-charcoal md:text-[30px]">Curriculum</h2>
          {course.curriculumGroups.map((group, gi) => {
            const offset = course.curriculumGroups.slice(0, gi).reduce((n, g) => n + g.items.length, 0);
            return (
              <div key={group.title} className={gi > 0 ? "mt-10" : ""}>
                {course.curriculumGroups.length > 1 && (
                  <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-medium-gray">
                    {group.title}
                  </h3>
                )}
                <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
                  {group.items.map((skill, i) => (
                    <div key={skill} className="flex items-center gap-6 py-5">
                      <span className="w-8 shrink-0 text-[13px] font-semibold text-skill-green">
                        {String(offset + i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] text-charcoal">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Practical training + projects */}
      <section className="w-full bg-light-gray px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative h-[320px] overflow-hidden rounded-2xl bg-charcoal">
            <CourseImage
              src={course.image}
              alt={`${course.title} practical training`}
              className="h-full w-full"
              variant="crop"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[12px] font-bold uppercase tracking-wider text-skill-green mb-2">
              Hands-On Simulation
            </span>
            <h2 className="mb-4 text-[26px] font-bold text-charcoal md:text-[32px]">
              Practical Training &amp; Live Projects
            </h2>
            <p className="max-w-[480px] text-[15px] leading-relaxed text-medium-gray mb-6">
              Learn through real workplace tasks, live software applications, and simulated professional scenarios designed to build genuine job-ready confidence.
            </p>
            <div className="flex items-center gap-3 text-[13.5px] font-semibold text-charcoal">
              <CheckCircle2 size={18} className="text-skill-green" /> Practical, Portfolio-Driven Training
            </div>
          </div>
        </div>
      </section>

      {/* Career opportunities + who should join */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-skill-green mb-2 block">
              Where This Can Lead
            </span>
            <h2 className="mb-3 text-[26px] font-bold text-charcoal md:text-[30px]">Potential Career Pathways</h2>
            <p className="mb-6 max-w-[480px] text-[13.5px] leading-relaxed text-medium-gray">{careerPathwaysNote}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="flex items-center justify-between rounded-lg border border-black/8 bg-light-gray/40 p-3.5"
                >
                  <span className="text-[14px] font-semibold text-charcoal">{role.title}</span>
                  <span className="text-[11px] font-medium text-skill-green bg-white px-2 py-0.5 rounded shadow-xs">{role.tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-[26px] font-bold text-charcoal md:text-[30px]">Who should join?</h2>
            <ul className="flex flex-col gap-3.5">
              {course.whoShouldJoin.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-charcoal">
                  <span className="mt-1.5 inline-block h-[5px] w-[5px] shrink-0 bg-skill-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Student stories */}
      <section className="w-full bg-light-gray px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-[26px] font-bold text-charcoal md:text-[30px]">Student stories</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {stories.map((s, i) => (
              <div key={i} className="bg-white p-7">
                <p className="mb-5 text-[14.5px] italic leading-relaxed text-charcoal">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <span className="block text-[14px] font-semibold text-charcoal">{s.name}</span>
                <span className="block text-[13px] text-medium-gray">{s.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-[26px] font-bold text-charcoal md:text-[30px]">
            Frequently asked questions
          </h2>
          <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
            {courseFAQs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[15.5px] font-medium text-charcoal">
                  {f.q}
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-skill-green transition-transform duration-300 group-open:rotate-90"
                  />
                </summary>
                <p className="mt-3 max-w-[600px] text-[14.5px] leading-relaxed text-medium-gray">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="w-full bg-charcoal px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 max-w-[440px] text-[30px] font-bold leading-tight text-white md:text-[36px]">
              Ready to start {course.title}?
            </h2>
            <p className="max-w-[420px] text-[15px] leading-relaxed text-white/65">
              Send an enquiry and the Skillex team will get back to you with the details
              you need.
            </p>
            <a
              href={whatsappLinkFor(course.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-[48px] items-center gap-2.5 rounded border border-white/20 px-6 text-[14.5px] font-semibold text-white transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
          </div>
          <div className="max-w-[480px]">
            <EnquiryForm dark defaultCourse={course.slug} />
          </div>
        </div>
      </section>
    </main>
  );
}
