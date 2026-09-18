import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import CourseImage from "@/ui/CourseImage";
import ChromaGrid from "@/ui/ChromaGrid";
import ChromaSpotlight from "@/ui/ChromaSpotlight";
import CourseComparison from "@/components/CourseComparison";
import { courses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Courses — Skillex",
  description:
    "Explore Skillex's career-oriented programs in Office Administration & HR, Business Administration & Accounting, and Digital Marketing.",
};

export default function CoursesPage() {
  return (
    <main>
      {/* 1. Cinematic Hero Section with Rich Photographic Background */}
      <section className="relative flex min-h-[55vh] w-full items-end overflow-hidden bg-black pt-[150px] pb-16 md:pt-[190px] md:pb-24">
        {/* Background Photo */}
        <div className="absolute inset-0">
          <Image
            src="/assets/courses-hero.jpg"
            alt="Skillex Career Training Hubs"
            fill
            priority
            className="object-cover brightness-[0.95] contrast-[1.05]"
          />
        </div>

        {/* Cinematic Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 45%, rgba(10,10,10,0.92) 100%)",
          }}
        />

        {/* Interactive Chroma Grid */}
        <ChromaGrid baseOpacity={0.07} gridSize={46} interactiveRadius={350} />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-container px-5 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-skill-green/40 bg-black/50 px-3.5 py-1 backdrop-blur-md mb-4">
            <Sparkles size={14} className="text-skill-green" />
            <span className="text-[11.5px] font-semibold tracking-[0.2em] text-skill-green uppercase">
              Our Signature Programs
            </span>
          </div>

          <h1 className="max-w-[720px] text-[36px] font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[46px] md:text-[54px]">
            Career-oriented training, built to be practical
          </h1>

          <p className="mt-4 max-w-[580px] text-[16px] leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:text-[17.5px]">
            Hands-on modules designed in collaboration with corporate recruiters across Office Administration & HR, Business Administration & Accounting, and Digital Marketing.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-white/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-skill-green" /> Career &amp; Placement Support
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-skill-green" /> Live Software Drills
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-skill-green" /> ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </section>

      {/* 2. Course Directory */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-container flex-col gap-5">
          {courses.map((c) => (
            <ChromaSpotlight
              key={c.slug}
              className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-skill-green/10"
              borderGlowColor="rgba(140, 198, 63, 0.9)"
              radius={340}
            >
              <a
                href={`/courses/${c.slug}`}
                className="group grid grid-cols-1 items-center gap-6 md:grid-cols-[80px_1fr_220px_auto]"
              >
                <span className="text-[20px] font-black text-skill-green">{c.n}</span>
                <div>
                  <h2 className="mb-2 text-[22px] font-bold text-charcoal group-hover:text-skill-green transition-colors sm:text-[24px]">
                    {c.title}
                  </h2>
                  <p className="max-w-[480px] text-[14.5px] leading-relaxed text-medium-gray">{c.short}</p>
                </div>
                <div className="relative hidden h-[125px] overflow-hidden rounded-xl md:block shadow-sm">
                  <CourseImage src={c.image} alt={c.imageAlt} className="h-full w-full object-cover" sizes="220px" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-light-gray text-charcoal transition-all duration-300 group-hover:bg-skill-green group-hover:text-charcoal group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>
              </a>
            </ChromaSpotlight>
          ))}
        </div>
      </section>

      {/* 3. Which path is right for you? */}
      <CourseComparison />
    </main>
  );
}
