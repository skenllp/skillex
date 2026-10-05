import Link from "next/link";
import { ArrowRight, Calculator, Megaphone, Users, Sparkles, Clock } from "lucide-react";
import { courses } from "@/lib/content";
import Reveal from "@/ui/Reveal";
import ImageSlot from "@/ui/ImageSlot";

const icons: Record<string, typeof Calculator> = {
  "business-administration-accounting": Calculator,
  "office-administration-hr": Users,
  "digital-marketing": Megaphone,
};

export default function CourseSection({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="courses" className="section-y bg-white">
      <div className="container-x">
        {!hideHeading && (
          <Reveal className="max-w-[640px]">
            <div className="mb-3 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-lime-dark">
              <span className="h-1.5 w-6 rounded-full bg-lime" />
              <span>Career-Focused Programs</span>
            </div>
            <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[42px] md:text-[48px]">
              Find the Course for You
            </h2>
            <p className="mt-4 text-[18px] leading-relaxed text-grey">
              Practical, structured programs designed to turn learning into in-demand workplace skills.
            </p>
          </Reveal>
        )}

        <div className={`${hideHeading ? "" : "mt-12 md:mt-14 "}grid gap-6 md:grid-cols-3`}>
          {courses.map((c, i) => {
            const Icon = icons[c.slug] ?? Calculator;
            const duration = "duration" in c ? c.duration : null;

            return (
              <Reveal key={c.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/courses/${c.slug}`}
                  className="group flex h-full flex-col justify-between rounded-card border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-lime hover:shadow-lg md:p-8"
                >
                  <div>
                    {/* Optional Prepared Image Slot - collapses gracefully if image asset is not available */}
                    <ImageSlot
                      src={c.image}
                      alt={c.title}
                      label="Course Image"
                      fallbackMode="hide"
                      aspectRatio="aspect-[16/10]"
                      className="mb-6 w-full rounded-2xl"
                    />

                    {/* Card Top Meta */}
                    <div className="flex items-center justify-between border-b border-line/70 pb-4">
                      <span className="inline-flex items-center gap-1.5 text-[14px] font-extrabold tracking-wider text-lime-dark">
                        <span className="h-2 w-2 rounded-full bg-lime" />
                        {c.n}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-offwhite text-navy transition-colors group-hover:bg-lime/20">
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                    </div>

                    {/* Program Duration */}
                    {duration && (
                      <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-grey">
                        <Clock size={14} className="text-lime-dark" />
                        <span>{duration}</span>
                      </div>
                    )}

                    {/* Course Title */}
                    <h3 className="mt-2 text-[22px] font-bold leading-snug text-navy transition-colors group-hover:text-navy sm:text-[24px]">
                      {c.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-[15.5px] leading-relaxed text-grey">
                      {c.short}
                    </p>

                    {/* Key Skills Pills */}
                    {c.skillTags && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {c.skillTags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-line/80 bg-offwhite px-2.5 py-1 text-[12px] font-medium text-navy/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-8 flex items-center justify-between border-t border-line/70 pt-5">
                    <span className="text-[15px] font-bold text-navy transition-colors group-hover:text-navy">
                      View Course Details
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-offwhite text-navy transition-all duration-200 group-hover:translate-x-1 group-hover:bg-lime group-hover:text-navy">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
