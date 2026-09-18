import { ArrowRight } from "lucide-react";
import { courses } from "@/lib/content";
import CourseImage from "@/ui/CourseImage";
import ChromaSpotlight from "@/ui/ChromaSpotlight";

export default function CourseSection() {
  return (
    <section id="courses" className="w-full bg-white px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-container">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              CHOOSE YOUR PATH
            </p>
            <h2 className="max-w-[560px] text-[30px] font-bold leading-tight text-charcoal md:text-[38px]">
              Explore our career-oriented programs
            </h2>
            <p className="mt-2 max-w-[460px] text-[15px] text-medium-gray">
              Practical training, real-world skills, a brighter future.
            </p>
          </div>
          <a
            href="/courses"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-charcoal hover:text-skill-green transition-colors"
          >
            View All Courses
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Course Cards with Dynamic Cursor Border Glow */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {courses.map((c) => (
            <ChromaSpotlight
              key={c.slug}
              className="h-full rounded-2xl border border-black/8 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-skill-green/10"
              borderGlowColor="rgba(140, 198, 63, 0.95)"
              glowColor="rgba(140, 198, 63, 0.04)"
              radius={340}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="relative mb-3 h-[180px] sm:h-[195px] w-full overflow-hidden rounded-xl bg-light-gray">
                    <CourseImage
                      src={c.image}
                      alt={c.imageAlt}
                      className="h-full w-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-3.5 top-3.5 rounded-md bg-white/95 px-2.5 py-0.5 text-[12.5px] font-bold text-charcoal shadow-sm backdrop-blur-sm">
                      {c.n}
                    </span>
                  </div>

                  <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-skill-green">
                    {c.category}
                  </span>
                  <h3 className="mb-2 text-[19px] font-bold leading-snug text-charcoal transition-colors">
                    {c.title}
                  </h3>
                  <p className="mb-3 text-[14px] leading-relaxed text-medium-gray">
                    {c.short}
                  </p>

                  <div className="mb-3.5 flex flex-wrap gap-1.5">
                    {c.skillTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-light-gray/60 px-2.5 py-0.5 text-[11px] font-medium text-charcoal transition-colors duration-300 group-hover:border-skill-green/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-black/6 pt-3">
                  <a
                    href={`/courses/${c.slug}`}
                    className="group/cta inline-flex items-center gap-2 rounded text-[14px] font-semibold text-charcoal transition-colors hover:text-skill-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skill-green focus-visible:ring-offset-2"
                  >
                    Explore Course
                    <ArrowRight
                      size={15}
                      className="text-skill-green transition-transform duration-300 group-hover/cta:translate-x-1.5"
                    />
                  </a>
                </div>
              </div>
            </ChromaSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
