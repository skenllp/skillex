import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Award, Target, Users } from "lucide-react";
import WhySkillex from "@/components/WhySkillex";
import ChromaGrid from "@/ui/ChromaGrid";

export const metadata: Metadata = {
  title: "About — Skillex",
  description: "Skillex is a professional career-training institute focused on practical, industry-relevant skills.",
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. Cinematic Hero Section with High-Res Photography */}
      <section className="relative flex min-h-[55vh] w-full items-end overflow-hidden bg-black pt-[150px] pb-16 md:pt-[190px] md:pb-24">
        {/* Real Academy Photo Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/about-hero.jpg"
            alt="Skillex Educational Institute & Mentors"
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
              About Skillex
            </span>
          </div>

          <h1 className="max-w-[760px] text-[36px] font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[46px] md:text-[54px]">
            A professional career institute, built around practical skills
          </h1>

          <p className="mt-4 max-w-[620px] text-[16px] leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:text-[17.5px]">
            We bridge the gap between academic education and industry requirements. Through immersive training in Office Administration &amp; HR, Business Administration &amp; Accounting, and Digital Marketing, we empower students to thrive in modern workplaces.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-white/80">
            <span className="flex items-center gap-1.5">
              <Award size={15} className="text-skill-green" /> Certified Mentors
            </span>
            <span className="flex items-center gap-1.5">
              <Target size={15} className="text-skill-green" /> Practical Learning
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={15} className="text-skill-green" /> Career-Focused Training
            </span>
          </div>
        </div>
      </section>

      {/* 2. Institutional Mission & Story Section */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-[12px] font-bold tracking-widest text-skill-green uppercase block mb-2">
                Our Educational Philosophy
              </span>
              <h2 className="text-[28px] font-bold text-charcoal sm:text-[36px] leading-tight mb-5">
                Skills create real opportunities.
              </h2>
              <p className="text-[15px] leading-relaxed text-medium-gray mb-4">
                Founded with a mission to deliver real career breakthroughs, Skillex replaces rote memorization with hands-on practice. Our programs simulate corporate environments, using the exact software, communication channels, and workflows used by leading companies.
              </p>
              <p className="text-[15px] leading-relaxed text-medium-gray">
                Every graduate leaves not only with technical proficiency, but also with executive etiquette, AI fluency, and interview confidence that sets them apart in competitive hiring pools.
              </p>
            </div>

            <div className="relative h-[340px] overflow-hidden rounded-2xl shadow-xl lg:col-span-6 border border-black/10">
              <Image
                src="/assets/campus-hero.jpg"
                alt="Skillex Campus Community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <WhySkillex />
    </main>
  );
}
