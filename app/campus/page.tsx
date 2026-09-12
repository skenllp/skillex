import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, MapPin, Building, ShieldCheck } from "lucide-react";
import CampusExperience from "@/components/CampusExperience";
import FloorPlan from "@/components/FloorPlan";
import ChromaGrid from "@/ui/ChromaGrid";

export const metadata: Metadata = {
  title: "Campus — Skillex",
  description: "Step inside the Skillex campus — modern classrooms, practical learning spaces and a student-friendly environment.",
};

export default function CampusPage() {
  return (
    <main>
      {/* 1. Cinematic Hero Section with High-Res Campus Photography */}
      <section id="video" className="relative flex min-h-[60vh] w-full items-end overflow-hidden bg-black pt-[150px] pb-16 md:pt-[190px] md:pb-24">
        {/* Real Campus Photo Background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/campus-hero.jpg"
            alt="Skillex Modern Campus Facility & Atrium"
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

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-container px-5 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-skill-green/40 bg-black/50 px-3.5 py-1 backdrop-blur-md mb-4">
            <Sparkles size={14} className="text-skill-green" />
            <span className="text-[11.5px] font-semibold tracking-[0.2em] text-skill-green uppercase">
              State-of-the-Art Facilities
            </span>
          </div>

          <h1 className="max-w-[720px] text-[36px] font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[46px] md:text-[54px]">
            A campus built for career-ready learning
          </h1>

          <p className="mt-4 max-w-[580px] text-[16px] leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:text-[17.5px]">
            Explore our contemporary classrooms, dedicated simulation labs, collaborative breakout spaces, and executive interview suites.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-white/80">
            <span className="flex items-center gap-1.5">
              <Building size={15} className="text-skill-green" /> Modern Executive Suites
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-skill-green" /> Central Location
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-skill-green" /> ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </section>

      <CampusExperience />
      <FloorPlan />
    </main>
  );
}
