import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import CourseImage from "@/ui/CourseImage";
import EnquiryForm from "@/ui/EnquiryForm";
import { courseFAQs, studentStories, careerMatrix, type Course } from "@/lib/content";

const quickFacts = [
  { label: "Duration", value: "3 Months Intensive" },
  { label: "Format", value: "Practical Lab & Hands-on Simulation" },
  { label: "Level", value: "Beginner to Career-Ready (10+2 / Degree)" },
  { label: "Placement", value: "100% Placement Support" },
];

export default function CourseTemplate({ course }: { course: Course }) {
  const relatedStories = studentStories.filter((s) => s.course.toLowerCase().includes(course.title.toLowerCase().slice(0, 5)));
  const stories = relatedStories.length ? relatedStories : studentStories.slice(0, 2);
  const roles = careerMatrix[course.slug as keyof typeof careerMatrix]?.roles || [];

  return (
    <main>
      {/* Course hero */}
      <section className="relative flex min-h-[62vh] w-full items-end overflow-hidden">
        <CourseImage
          src={course.image}
          alt={`${course.title} at Skillex`}
          variant="showcase"
          className="absolute inset-0 h-full w-full"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-container px-5 pb-16 pt-[160px] md:px-10">
          <span className="mb-4 block text-[13px] font-semibold text-skill-green">{course.n}</span>
          <h1 className="max-w-[640px] text-[38px] font-bold leading-tight text-white md:text-[54px]">
            {course.title}
          </h1>
          <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-white/80">
            {course.short}
          </p>
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
            <p className="max-w-[440px] text-[15px] leading-relaxed text-medium-gray">
              {course.title} is built for people who want practical, job-relevant skills —
              not just theory. Real placement outcomes and industry specifics will be added
              here once supplied.
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-[26px] font-bold text-charcoal md:text-[30px]">What you&apos;ll learn</h2>
            <ul className="flex flex-col gap-3.5">
              {course.keySkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3 text-[14.5px] text-charcoal">
                  <Check size={16} className="mt-0.5 shrink-0 text-skill-green" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-container">
          <h2 className="mb-10 text-[26px] font-bold text-charcoal md:text-[30px]">Curriculum</h2>
          <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
            {course.keySkills.map((skill, i) => (
              <div key={skill} className="flex items-center gap-6 py-5">
                <span className="w-8 shrink-0 text-[13px] font-semibold text-skill-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-charcoal">{skill}</span>
                <span className="ml-auto hidden text-[13px] text-medium-gray sm:block">
                  Module detail — placeholder
                </span>
              </div>
            ))}
          </div>
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
              <CheckCircle2 size={18} className="text-skill-green" /> 100% Practical &amp; Portfolio-Driven
            </div>
          </div>
        </div>
      </section>

      {/* Career opportunities + who should join */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-skill-green mb-2 block">
              Placement Roles
            </span>
            <h2 className="mb-6 text-[26px] font-bold text-charcoal md:text-[30px]">Career Opportunities</h2>
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
          </div>
          <div className="max-w-[480px]">
            <EnquiryForm dark defaultCourse={course.slug} />
          </div>
        </div>
      </section>
    </main>
  );
}
