import { ArrowRight } from "lucide-react";
import { courses } from "@/lib/content";
import Reveal from "@/ui/Reveal";

const rows: { label: string; get: (c: (typeof courses)[number]) => string }[] = [
  { label: "Focus", get: (c) => c.focus },
  {
    label: "Core skills",
    get: (c) => c.skillTags.slice(0, 3).join(", "),
  },
  {
    label: "Best suited for",
    get: (c) => c.whoShouldJoin[0],
  },
  {
    label: "Career direction",
    get: (c) => c.careerPaths.slice(0, 2).map((r) => r.title).join(", "),
  },
  { label: "Learning style", get: (c) => c.learningStyle },
];

export default function CourseComparison() {
  return (
    <section className="w-full bg-[#FAFAFA] border-y border-black/5 px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 max-w-[560px]">
          <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
            <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
            FIND YOUR FIT
          </p>
          <h2 className="text-[30px] font-bold leading-tight text-charcoal md:text-[38px]">
            Which path is right for you?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-medium-gray">
            A quick side-by-side look at how the three programs compare.
          </p>
        </Reveal>

        {/* Desktop / tablet: comparison table */}
        <div className="hidden overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm md:block">
          <div className="grid grid-cols-[160px_repeat(3,1fr)]">
            <div className="border-b border-r border-black/8 bg-light-gray/50 p-5" />
            {courses.map((c) => (
              <div key={c.slug} className="border-b border-l border-black/8 bg-light-gray/50 p-5">
                <span className="mb-1 block text-[12px] font-bold text-skill-green">{c.n}</span>
                <h3 className="text-[15.5px] font-bold leading-snug text-charcoal">{c.title}</h3>
              </div>
            ))}

            {rows.map((row, i) => (
              <div key={row.label} className="contents">
                <div
                  className={`flex items-center border-r border-black/8 p-5 text-[13px] font-semibold text-medium-gray ${
                    i !== rows.length - 1 ? "border-b" : ""
                  }`}
                >
                  {row.label}
                </div>
                {courses.map((c) => (
                  <div
                    key={c.slug + row.label}
                    className={`border-l border-black/8 p-5 text-[13.5px] leading-relaxed text-charcoal ${
                      i !== rows.length - 1 ? "border-b" : ""
                    }`}
                  >
                    {row.get(c)}
                  </div>
                ))}
              </div>
            ))}

            <div className="border-r border-black/8 p-5" />
            {courses.map((c) => (
              <div key={c.slug + "-cta"} className="border-l border-black/8 p-5">
                <a
                  href={`/courses/${c.slug}`}
                  className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-charcoal transition-colors hover:text-skill-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skill-green focus-visible:ring-offset-2 rounded"
                >
                  Explore Course
                  <ArrowRight size={14} className="text-skill-green transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-5 md:hidden">
          {courses.map((c) => (
            <div key={c.slug} className="rounded-xl border border-black/8 bg-white p-5">
              <span className="mb-1 block text-[12px] font-bold text-skill-green">{c.n}</span>
              <h3 className="mb-4 text-[17px] font-bold text-charcoal">{c.title}</h3>
              <dl className="flex flex-col gap-3">
                {rows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-[11.5px] font-semibold uppercase tracking-wide text-medium-gray">
                      {row.label}
                    </dt>
                    <dd className="text-[13.5px] leading-relaxed text-charcoal">{row.get(c)}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={`/courses/${c.slug}`}
                className="group mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-charcoal transition-colors hover:text-skill-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skill-green focus-visible:ring-offset-2 rounded"
              >
                Explore Course
                <ArrowRight size={14} className="text-skill-green transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
