import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import PageHeader from "@/ui/PageHeader";
import ImageSlot from "@/ui/ImageSlot";
import { careerMatrix, careerPathwaysNote, curriculumItemsFor, whatsappLinkFor, type Course } from "@/lib/content";

const sectionTitle = "text-[28px] font-extrabold tracking-tight text-navy md:text-[38px]";

export default function CourseTemplate({ course }: { course: Course }) {
  const roles = careerMatrix[course.slug as keyof typeof careerMatrix]?.roles ?? [];
  const learn = curriculumItemsFor(course);
  const duration = "duration" in course ? course.duration : null;

  const glance = [
    ...(duration ? [{ label: "Duration", value: duration }] : []),
    { label: "Learning mode", value: course.learningStyle },
    { label: "Who it's for", value: course.whoShouldJoin[0] },
  ];

  return (
    <main>
      <PageHeader title={course.title} intro={course.focus}>
        <Link href={`/contact?course=${course.slug}`} className="btn btn-primary">Talk to an Advisor</Link>
        <Link href={`/enquire?course=${course.slug}`} className="btn btn-secondary">Enquire Now</Link>
      </PageHeader>

      {/* Optional Course Image Slot — hides gracefully if no photo is available */}
      <div className="container-x mt-8">
        <ImageSlot
          src={course.image}
          alt={course.title}
          label="Course Image"
          fallbackMode="hide"
          aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
          className="w-full shadow-sm"
        />
      </div>

      {/* At a glance */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className={sectionTitle}>At a Glance</h2>
          <dl className="mt-8 grid gap-5 md:grid-cols-3">
            {glance.map((g) => (
              <div key={g.label} className="rounded-card border border-line p-6">
                <dt className="text-[14px] font-semibold text-lime-dark">{g.label}</dt>
                <dd className="mt-2 text-[17px] font-medium leading-snug text-navy">{g.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-[680px] text-[17px] leading-relaxed text-grey">{course.short}</p>
        </div>
      </section>

      {/* What you'll learn */}
      <section id="curriculum" className="section-y scroll-mt-24 bg-offwhite">
        <div className="container-x">
          <h2 className={sectionTitle}>What You&apos;ll Learn</h2>
          {course.curriculumGroups.map((group, gi) => {
            const offset = course.curriculumGroups.slice(0, gi).reduce((n, g) => n + g.items.length, 0);
            return (
              <div key={group.title} className="mt-8">
                {course.curriculumGroups.length > 1 && (
                  <h3 className="mb-4 text-[18px] font-bold text-navy">{group.title}</h3>
                )}
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item, i) => (
                    <li key={item} className="flex items-start gap-4 rounded-2xl border border-line bg-white px-5 py-4">
                      <span className="mt-0.5 text-[14px] font-bold text-lime-dark">{String(offset + i + 1).padStart(2, "0")}</span>
                      <span className="text-[16px] leading-snug text-navy">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key skills */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className={sectionTitle}>Key Skills</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {course.keySkills.map((s) => (
              <li key={s} className="rounded-full border border-line bg-offwhite px-5 py-2.5 text-[15px] font-medium text-navy">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Career opportunities */}
      <section className="section-y bg-offwhite">
        <div className="container-x">
          <h2 className={sectionTitle}>Career Opportunities</h2>
          <p className="mt-3 max-w-[620px] text-[16px] leading-relaxed text-grey">{careerPathwaysNote}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <li key={r.title} className="rounded-2xl border border-line bg-white px-5 py-4 text-[16px] font-medium text-navy">{r.title}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className={sectionTitle}>Who It&apos;s For</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {course.whoShouldJoin.map((w) => (
              <li key={w} className="flex items-start gap-3 text-[17px] leading-relaxed text-navy">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-lime" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="container-x py-16 text-center md:py-24">
          <h2 className="mx-auto max-w-[640px] text-[32px] font-extrabold leading-tight tracking-tight text-white md:text-[46px]">
            Questions about {course.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[18px] text-white/70">Talk to our team. We&apos;ll help you decide.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={`/contact?course=${course.slug}`} className="btn btn-primary group">
              Talk to an Advisor <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a href={whatsappLinkFor(course.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
