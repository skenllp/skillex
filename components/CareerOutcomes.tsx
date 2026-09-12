"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, Building2, CheckCircle, Sparkles } from "lucide-react";
import { careerMatrix, hiringSectors } from "@/lib/content";
import Reveal from "@/ui/Reveal";

type TabKey = keyof typeof careerMatrix;

export default function CareerOutcomes() {
  const [activeTab, setActiveTab] = useState<TabKey>("office-administration");
  const currentData = careerMatrix[activeTab];

  return (
    <section className="w-full bg-charcoal px-5 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-container">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal direction="up">
            <p className="mb-3 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green uppercase">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              CAREER OPPORTUNITIES & PLACEMENT PATHWAYS
            </p>
            <h2 className="max-w-[640px] text-[32px] font-bold leading-tight text-white sm:text-[38px] md:text-[44px]">
              Where Your Skillex Training Takes You
            </h2>
            <p className="mt-4 max-w-[560px] text-[15.5px] leading-relaxed text-white/70">
              Each course maps directly to real-world corporate job roles. Explore the exact career designations and hiring sectors actively recruiting Skillex graduates.
            </p>
          </Reveal>

          <Reveal direction="left" delay={100} className="self-start lg:self-end">
            <a
              href="/courses"
              className="group inline-flex items-center gap-2 rounded bg-skill-green px-6 py-3 text-[14.5px] font-semibold text-charcoal transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore All Curriculums
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Tab Controls */}
        <div className="mb-10 flex flex-wrap gap-3 border-b border-white/10 pb-4">
          {(Object.keys(careerMatrix) as TabKey[]).map((key) => {
            const item = careerMatrix[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2.5 rounded-lg px-5 py-3 text-[14.5px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-skill-green text-charcoal shadow-lg shadow-skill-green/20"
                    : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Briefcase size={16} />
                <span>{item.category}</span>
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-[11px] ${
                    isActive ? "bg-charcoal/20 text-charcoal" : "bg-white/10 text-white/70"
                  }`}
                >
                  {item.roles.length} Roles
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content: Roles Grid */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-skill-green">
                Target Designations
              </span>
              <h3 className="text-[22px] font-bold text-white sm:text-[24px]">
                {currentData.category}
              </h3>
              <p className="text-[14px] text-white/60">{currentData.subtitle}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/75 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <Sparkles size={14} className="text-skill-green" /> 100% Placement Assistance
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentData.roles.map((role) => (
              <div
                key={role.title}
                className="group relative flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-skill-green/50 hover:bg-white/10 hover:translate-x-1"
              >
                <div>
                  <h4 className="text-[15px] font-semibold text-white group-hover:text-skill-green transition-colors">
                    {role.title}
                  </h4>
                  <span className="text-[12px] text-white/50">{role.tag}</span>
                </div>
                <CheckCircle
                  size={16}
                  className="text-skill-green/60 group-hover:text-skill-green transition-colors shrink-0 ml-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Industry Hiring Sectors (Competitor feature inspired) */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-7 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-skill-green/20 text-skill-green">
              <Building2 size={18} />
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-white">
                Industry Sectors Hiring Skillex Graduates
              </h3>
              <p className="text-[13px] text-white/60">
                Our curriculum aligns with the staffing requirements of multi-sector corporate ecosystems.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {hiringSectors.map((sector) => (
              <span
                key={sector}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/85 transition-colors hover:border-skill-green/40 hover:bg-skill-green/10 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-skill-green" />
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
