import { ArrowRight } from "lucide-react";
import { courses } from "@/lib/content";
import CourseImage from "@/ui/CourseImage";
import ChromaSpotlight from "@/ui/ChromaSpotlight";

export default function CourseSection() {
  return (
    <section id="courses" className="w-full bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-container">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              CHOOSE YOUR PATH
            </p>
            <h2 className="max-w-[560px] text-[32px] font-bold leading-tight text-charcoal md:text-[42px]">
              Explore our career-oriented programs
            </h2>
            <p className="mt-4 max-w-[460px] text-[15.5px] text-medium-gray">
              Practical training, real-world skills, a brighter future.
            </p>
          </div>
          <a
            href="/courses"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-charcoal hover:text-skill-green transition-colors"
          >
            View All Courses
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Course Cards with Dynamic Cursor Border Glow */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {courses.map((c) => (
            <ChromaSpotlight
              key={c.slug}
              className="h-full rounded-2xl border border-black/8 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-skill-green/10"
              borderGlowColor="rgba(140, 198, 63, 0.95)"
              glowColor="rgba(140, 198, 63, 0.04)"
              radius={340}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="relative mb-5 h-[260px] sm:h-[280px] w-full overflow-hidden rounded-xl bg-light-gray">
                    <CourseImage
                      src={c.image}
                      alt={`${c.title} at Skillex`}
                      className="h-full w-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1 text-[13px] font-bold text-charcoal shadow-sm backdrop-blur-sm">
                      {c.n}
                    </span>
                  </div>

                  <h3 className="mb-2.5 text-[21px] font-bold text-charcoal transition-colors">
                    {c.title}
                  </h3>
                  <p className="mb-6 text-[14.5px] leading-relaxed text-medium-gray">
                    {c.short}
                  </p>
                </div>

                <div className="border-t border-black/6 pt-4">
                  <a
                    href={`/courses/${c.slug}`}
                    className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-charcoal hover:text-skill-green transition-colors"
                  >
                    View Course Details
                    <ArrowRight
                      size={16}
                      className="text-skill-green transition-transform duration-300 group-hover:translate-x-1.5"
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
