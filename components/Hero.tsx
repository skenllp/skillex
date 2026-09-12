"use client";

import { useEffect, useState } from "react";
import { ArrowRight, PlayCircle, ShieldCheck, Award, Sparkles, CheckCircle2, Eye, EyeOff, Zap } from "lucide-react";
import HeroMedia from "@/ui/HeroMedia";
import ChromaGrid from "@/ui/ChromaGrid";
import ChromaSpotlight from "@/ui/ChromaSpotlight";
import { courses } from "@/lib/content";

const trustPoints = [
  { text: "Practical Learning", icon: Sparkles },
  { text: "Expert Guidance", icon: Award },
  { text: "100% Placement Support", icon: ShieldCheck },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cinematicMode, setCinematicMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reveal = (delayMs: number) => ({
    opacity: mounted && !cinematicMode ? 1 : 0,
    transform: mounted && !cinematicMode ? "translateY(0px)" : "translateY(16px)",
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden pt-[80px] pb-12 lg:pt-[92px] lg:pb-16 bg-black">
      {/* 1. Background Video with Parallax & Vivid Color Boost */}
      <div
        className="absolute inset-0 h-[115%] w-full transition-transform duration-[2000ms] ease-out will-change-transform pointer-events-none"
        style={{
          transform: mounted
            ? `translateY(${Math.min(scrollY * 0.18, 100)}px) scale(${cinematicMode ? 1.0 : 1.04})`
            : "scale(1.1)",
        }}
      >
        <HeroMedia
          videoSrc="/assets/hero-video.mp4"
          className="absolute inset-0 h-full w-full object-cover brightness-[1.12] contrast-[1.05] saturate-[1.1]"
        />
      </div>

      {/* 2. Directional Gradient Overlay - Keeps text razor-sharp on left while center & right remain 100% transparent and visible */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          opacity: cinematicMode ? 0.05 : 1,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.4) 38%, rgba(0,0,0,0.06) 65%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* 3. Interactive Cursor-Tracking Chroma Grid */}
      <ChromaGrid baseOpacity={0.06} gridSize={46} interactiveRadius={360} />

      {/* 4. Geometric Chromatic Line Accents (blend-screen editorial touch from reference) */}
      <div className="pointer-events-none absolute right-4 top-24 hidden lg:block opacity-25 blend-screen">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          <circle cx="110" cy="110" r="100" stroke="#8cc63f" strokeWidth="1" strokeDasharray="4 6" />
          <polygon points="110,20 195,170 25,170" stroke="#00f2fe" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="10" y1="110" x2="210" y2="110" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* 5. Editorial Vertical Bookmark Side-Rail (from reference interaction) */}
      <div
        className={`fixed left-4 bottom-10 z-30 hidden xl:flex items-center gap-3 vertical-rl select-none transition-all duration-500 ${
          cinematicMode ? "opacity-0 pointer-events-none" : "opacity-40 hover:opacity-100"
        }`}
      >
        <span className="text-[10px] font-semibold tracking-[0.26em] text-white/90 uppercase">
          ⚡ Scroll To Explore • Skillex Academy
        </span>
        <div className="h-10 w-[1.5px] bg-gradient-to-b from-skill-green to-transparent" />
      </div>

      {/* 6. Cinematic Mode Floating Exit Button */}
      {cinematicMode && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-40 animate-fade-in">
          <button
            onClick={() => setCinematicMode(false)}
            className="flex items-center gap-2 rounded-full border border-skill-green/60 bg-black/75 px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-2xl backdrop-blur-md transition-all hover:bg-skill-green hover:text-charcoal"
          >
            <EyeOff size={16} className="text-skill-green" />
            <span>Exit Full Video Mode</span>
          </button>
        </div>
      )}

      {/* 7. Main Hero Container */}
      <div className="relative z-10 mx-auto w-full max-w-container px-5 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Typography, Value Prop, CTAs */}
          <div className={`max-w-[650px] lg:col-span-7 transition-all duration-500 ${cinematicMode ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            
            {/* Pill Badge */}
            <div
              className="inline-flex items-center gap-2.5 rounded-full border border-skill-green/40 bg-black/40 px-4 py-1.5 backdrop-blur-md mb-6"
              style={reveal(0)}
            >
              <span className="h-2 w-2 rounded-full bg-skill-green animate-pulse" />
              <p className="text-[11.5px] font-semibold tracking-[0.22em] text-skill-green uppercase">
                A Brighter Tomorrow Starts Here
              </p>
            </div>

            {/* Main Headline */}
            <h1
              className="mb-6 text-[44px] font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] sm:text-[56px] md:text-[66px] xl:text-[72px]"
              style={reveal(100)}
            >
              Build skills.
              <br />
              Build your <span className="text-skill-green">future.</span>
            </h1>

            {/* Paragraph */}
            <p
              className="mb-9 max-w-[540px] text-[16px] leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] sm:text-[17.5px] md:text-[18px]"
              style={reveal(200)}
            >
              Industry-focused training in <strong className="text-white font-semibold">Office Administration</strong>,{" "}
              <strong className="text-white font-semibold">Hospitality</strong>, and{" "}
              <strong className="text-white font-semibold">Digital Marketing</strong>. Empowering careers with real-world practice, AI-era tools, and dedicated placement support.
            </p>

            {/* CTA Buttons with 3D Diagonal Sweep Effect */}
            <div className="mb-10 flex flex-wrap items-center gap-4" style={reveal(300)}>
              <a
                href="#courses"
                className="btn-sweep group inline-flex min-h-[52px] items-center gap-2.5 border border-skill-green bg-skill-green px-8 text-[15px] font-semibold text-charcoal shadow-lg shadow-skill-green/25 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Courses
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </a>

              <a
                href="/campus#video"
                className="btn-sweep btn-sweep-dark group inline-flex min-h-[52px] items-center gap-2.5 border border-white/40 bg-black/35 px-7 text-[15px] font-semibold text-white backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PlayCircle size={18} className="text-skill-green group-hover:text-charcoal transition-colors" />
                  Watch Campus Video
                </span>
              </a>

              {/* Quick Cinematic Mode Button */}
              <button
                type="button"
                onClick={() => setCinematicMode(true)}
                className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[13px] font-medium text-white/90 backdrop-blur-md transition-all hover:bg-white/20 hover:border-skill-green/50"
                title="Watch background video full screen"
              >
                <Eye size={15} className="text-skill-green" />
                <span>Full Video View</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div
              className="flex flex-wrap items-center gap-x-8 gap-y-3.5 border-t border-white/20 pt-6"
              style={reveal(400)}
            >
              {trustPoints.map((t) => {
                const Icon = t.icon;
                return (
                  <span
                    key={t.text}
                    className="flex items-center gap-2 text-[13.5px] font-medium text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                  >
                    <Icon size={16} className="text-skill-green shrink-0" />
                    {t.text}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right Column: Redesigned Translucent Fast-Track Glass Capsule with Chroma Cursor Border Glow */}
          <div
            className={`w-full lg:col-span-5 transition-all duration-500 ${
              cinematicMode ? "opacity-0 pointer-events-none translate-y-8" : "opacity-100"
            }`}
            style={{
              ...reveal(250),
              transform: mounted && !cinematicMode
                ? `translateY(${Math.min(scrollY * -0.05, 0)}px)`
                : "translateY(20px)",
            }}
          >
            <ChromaSpotlight
              className="rounded-2xl border border-white/20 bg-black/25 p-5 sm:p-6 backdrop-blur-md shadow-2xl shadow-black/60 transition-all hover:bg-black/35"
              borderGlowColor="rgba(140, 198, 63, 0.95)"
              radius={340}
            >
              {/* Capsule Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-skill-green/20 border border-skill-green/40">
                    <Zap size={15} className="text-skill-green" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-skill-green uppercase block">
                      Fast-Track Career
                    </span>
                    <h3 className="text-[16px] font-bold text-white">
                      Job-Ready Programs
                    </h3>
                  </div>
                </div>

                {/* Direct Full Video Toggle in Fast-Track */}
                <button
                  type="button"
                  onClick={() => setCinematicMode(true)}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80 hover:border-skill-green/50 hover:bg-skill-green/20 hover:text-white transition-all"
                  title="Watch full background video"
                >
                  <Eye size={12} className="text-skill-green" />
                  <span>View Video</span>
                </button>
              </div>

              {/* 3 Core Fast-Track Course Chips */}
              <div className="space-y-2.5 mb-4">
                {courses.map((c) => (
                  <a
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 transition-all duration-300 hover:border-skill-green/60 hover:bg-white/[0.14] hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-skill-green/25 text-[11px] font-bold text-skill-green">
                        {c.n}
                      </span>
                      <div>
                        <h4 className="text-[13.5px] font-semibold text-white group-hover:text-skill-green transition-colors leading-tight">
                          {c.title}
                        </h4>
                        <span className="text-[11px] text-white/60">
                          Job-Oriented Track • Certifications Included
                        </span>
                      </div>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 group-hover:bg-skill-green group-hover:text-charcoal text-white/60 transition-all">
                      <ArrowRight size={13} />
                    </div>
                  </a>
                ))}
              </div>

              {/* Capsule Footer Guarantee Badge */}
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 flex items-center justify-between text-[11.5px] text-white/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-skill-green shrink-0" />
                  <span>100% Placement Support</span>
                </div>
                <span className="font-semibold text-skill-green">ISO 9001:2015</span>
              </div>
            </ChromaSpotlight>
          </div>

        </div>
      </div>
    </section>
  );
}
