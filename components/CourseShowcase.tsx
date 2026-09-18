import { ArrowRight } from "lucide-react";
import CourseImage from "@/ui/CourseImage";
import Reveal from "@/ui/Reveal";
import { courses } from "@/lib/content";

export default function CourseShowcase() {
  return (
    <section className="w-full bg-white px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-6 max-w-[560px]">
          <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
            <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
            FIND YOUR DIRECTION
          </p>
          <h2 className="text-[32px] font-bold leading-tight text-charcoal md:text-[42px]">
            Three paths. One career foundation.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-8 md:gap-14">
          {courses.map((c, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <Reveal
                key={c.slug}
                delay={i * 80}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div className={imageFirst ? "md:order-1" : "md:order-2"}>
                  <div className="relative h-[220px] overflow-hidden sm:h-[260px] md:h-[320px]">
                    <CourseImage
                      src={c.image}
                      alt={c.imageAlt}
                      variant="showcase"
                      className="h-full w-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                  <span className="mb-4 block text-[13px] font-semibold text-skill-green">
                    {c.n}
                  </span>
                  <h3 className="mb-4 text-[28px] font-bold leading-tight text-charcoal md:text-[34px]">
                    {c.title}
                  </h3>
                  <p className="mb-6 max-w-[420px] text-[15.5px] leading-relaxed text-medium-gray">
                    {c.intro}
                  </p>
                  <ul className="mb-8 flex flex-col gap-2.5">
                    {c.keySkills.slice(0, 4).map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-[14px] text-charcoal"
                      >
                        <span className="inline-block h-[5px] w-[5px] shrink-0 bg-skill-green" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/courses/${c.slug}`}
                    className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-charcoal"
                  >
                    View Course
                    <ArrowRight
                      size={15}
                      className="text-skill-green transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
