"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { developedSkills } from "@/lib/content";
import Reveal from "@/ui/Reveal";

export default function SkillsDeveloped() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-container">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal direction="up">
            <p className="mb-3 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green uppercase">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              LEARNING OUTCOMES
            </p>
            <h2 className="max-w-[620px] text-[32px] font-bold leading-tight text-charcoal sm:text-[38px] md:text-[44px]">
              Skills You Will Develop
            </h2>
            <p className="mt-4 max-w-[540px] text-[15.5px] leading-relaxed text-medium-gray">
              We focus on cultivating well-rounded capability: combining practical daily workplace skills with leadership, digital tools, and unwavering confidence.
            </p>
          </Reveal>

          <Reveal direction="left" delay={120} className="flex items-center gap-4 self-start lg:self-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-skill-green/40 bg-skill-green/10 px-4 py-1.5 text-[13px] font-semibold text-charcoal">
              <CheckCircle2 size={16} className="text-skill-green" /> 8 Core Professional Pillars
            </span>
          </Reveal>
        </div>

        {/* 8 Competencies Grid with Interactive Progress & Accents */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {developedSkills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 50} direction="up">
              <div className="group relative flex h-full flex-col justify-between rounded-xl border border-black/8 bg-light-gray/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-skill-green/50 hover:bg-white hover:shadow-xl hover:shadow-black/5">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[13px] font-bold text-skill-green">
                      0{index + 1}
                    </span>
                    <span className="rounded bg-white px-2 py-0.5 text-[11px] font-semibold tracking-wide text-charcoal shadow-xs border border-black/5 group-hover:bg-skill-green/20 group-hover:border-skill-green/30 transition-colors">
                      {skill.metric}
                    </span>
                  </div>
                  <h3 className="mb-2 text-[17px] font-semibold leading-snug text-charcoal group-hover:text-charcoal transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-medium-gray">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[12px] font-medium text-charcoal/70 group-hover:text-skill-green transition-colors">
                  <span>Core Competency</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                <span className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-skill-green transition-transform duration-300 group-hover:scale-x-100 rounded-b-xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
