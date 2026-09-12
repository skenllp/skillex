"use client";

import {
  Bot,
  MessageSquare,
  Calculator,
  FileSpreadsheet,
  UserCheck,
  Keyboard,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { essentialAddons, placementStats } from "@/lib/content";
import Reveal from "@/ui/Reveal";
import ChromaGrid from "@/ui/ChromaGrid";
import ChromaSpotlight from "@/ui/ChromaSpotlight";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  MessageSquare,
  Calculator,
  FileSpreadsheet,
  UserCheck,
  Keyboard,
};

export default function EssentialAddons() {
  return (
    <section className="relative w-full bg-[#141414] border-y border-white/5 px-5 py-20 text-white md:px-10 md:py-28 overflow-hidden">
      {/* Modern Interactive Chroma Grid Background */}
      <ChromaGrid baseOpacity={0.06} gridSize={44} interactiveRadius={360} />

      <div className="relative z-10 mx-auto max-w-container">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-skill-green/40 bg-skill-green/10 px-3.5 py-1 mb-3">
              <Sparkles size={14} className="text-skill-green" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-skill-green">
                The Skillex Competitive Edge
              </span>
            </div>
            <h2 className="max-w-[660px] text-[32px] font-bold leading-tight text-white sm:text-[38px] md:text-[44px]">
              Essential Career Add-Ons in the AI Era
            </h2>
            <p className="mt-4 max-w-[560px] text-[15.5px] leading-relaxed text-white/70">
              We go beyond ordinary theory. Every Skillex student receives comprehensive training in executive tools, AI-assisted workflows, and corporate fluency so you enter the workforce unstoppable.
            </p>
          </Reveal>

          <Reveal direction="left" delay={100} className="flex flex-col gap-2 text-right lg:self-end">
            <span className="text-[13px] font-semibold text-skill-green">
              Integrated into Every Program
            </span>
            <span className="text-[12px] text-white/50">
              No extra fees • Hands-on practical training
            </span>
          </Reveal>
        </div>

        {/* 6 Essential Add-ons Grid with Dynamic Cursor Border Glow */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {essentialAddons.map((item, index) => {
            const Icon = iconMap[item.icon] || Bot;
            return (
              <Reveal key={item.title} delay={index * 60} direction="up">
                <ChromaSpotlight
                  className="rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-skill-green/50 hover:shadow-2xl hover:shadow-black/40 h-full"
                  borderGlowColor="rgba(140, 198, 63, 0.65)"
                >
                  <div className="flex h-full flex-col justify-between p-6 sm:p-7">
                    <div>
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-skill-green/15 text-skill-green border border-skill-green/30 group-hover:bg-skill-green group-hover:text-charcoal transition-all duration-300">
                          <Icon size={22} className="transition-colors" />
                        </div>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-skill-green uppercase border border-white/10">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mb-2.5 text-[19px] font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-white/65">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[12px] text-white/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-skill-green" />
                      <span>Practical Exercises &amp; Live Drills</span>
                    </div>
                  </div>
                </ChromaSpotlight>
              </Reveal>
            );
          })}
        </div>

        {/* Key Placement & Credibility Stats Banner */}
        <ChromaSpotlight
          className="rounded-2xl border border-skill-green/35 bg-gradient-to-r from-skill-green/15 via-skill-green/5 to-transparent p-7 sm:p-10 backdrop-blur-lg"
          borderGlowColor="rgba(140, 198, 63, 0.7)"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {placementStats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <span className="block text-[32px] font-black text-white sm:text-[40px] md:text-[44px]">
                  {stat.value}
                </span>
                <span className="block text-[14px] font-semibold text-skill-green">
                  {stat.label}
                </span>
                <span className="block text-[12px] text-white/60 mt-1">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </ChromaSpotlight>
      </div>
    </section>
  );
}
