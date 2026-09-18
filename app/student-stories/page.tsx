import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Quote, CheckCircle2, TrendingUp, Award } from "lucide-react";
import { studentStories } from "@/lib/content";
import ChromaGrid from "@/ui/ChromaGrid";
import ChromaSpotlight from "@/ui/ChromaSpotlight";

export const metadata: Metadata = {
  title: "Student Stories — Skillex",
  description: "Real people, real progress — stories from Skillex students building their careers.",
};

export default function StudentStoriesPage() {
  return (
    <main>
      {/* 1. Cinematic Hero Section with Authentic Graduate Photography */}
      <section className="relative flex min-h-[55vh] w-full items-end overflow-hidden bg-black pt-[150px] pb-16 md:pt-[190px] md:pb-24">
        {/* Real Graduates Photography */}
        <div className="absolute inset-0">
          <Image
            src="/assets/student-stories-hero.jpg"
            alt="Skillex Graduates and Career Success"
            fill
            priority
            className="object-cover brightness-[0.92] contrast-[1.05]"
          />
        </div>

        {/* Cinematic Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.92) 100%)",
          }}
        />

        {/* Interactive Chroma Grid */}
        <ChromaGrid baseOpacity={0.06} gridSize={46} interactiveRadius={350} />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-container px-5 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-skill-green/40 bg-black/50 px-3.5 py-1 backdrop-blur-md mb-4">
            <Sparkles size={14} className="text-skill-green" />
            <span className="text-[11.5px] font-semibold tracking-[0.2em] text-skill-green uppercase">
              Proven Career Outcomes
            </span>
          </div>

          <h1 className="max-w-[720px] text-[36px] font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[46px] md:text-[54px]">
            Real people. Real progress.
          </h1>

          <p className="mt-4 max-w-[580px] text-[16px] leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:text-[17.5px]">
            Hear how Skillex students transitioned from uncertainty to confident corporate professionals with our job-oriented training and placement support.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-white/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-skill-green" /> Career &amp; Placement Support
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp size={15} className="text-skill-green" /> 500+ Hiring Partners
            </span>
            <span className="flex items-center gap-1.5">
              <Award size={15} className="text-skill-green" /> ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </section>

      {/* 2. Testimonials Grid with Chroma Spotlight Border Glow */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studentStories.map((s, i) => (
            <ChromaSpotlight
              key={i}
              className="flex h-full flex-col justify-between rounded-2xl border border-black/8 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-skill-green/10"
              borderGlowColor="rgba(140, 198, 63, 0.9)"
              radius={300}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-skill-green/15 text-skill-green">
                    <Quote size={18} />
                  </div>
                  <span className="text-[12px] font-semibold text-skill-green">Verified Graduate</span>
                </div>
                <p className="mb-6 text-[15px] italic leading-relaxed text-charcoal">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-black/6 pt-4">
                <span className="block text-[15px] font-bold text-charcoal">{s.name}</span>
                <span className="block text-[13px] text-medium-gray mt-0.5">{s.course}</span>
              </div>
            </ChromaSpotlight>
          ))}
        </div>
      </section>
    </main>
  );
}
