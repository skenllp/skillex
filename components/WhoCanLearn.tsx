"use client";

import {
  GraduationCap,
  Sparkles,
  Award,
  Briefcase,
  TrendingUp,
  Compass,
  Zap,
  type LucideIcon,
  ArrowRight,
} from "lucide-react";
import { whoCanLearn } from "@/lib/content";
import Reveal from "@/ui/Reveal";
import ChromaSpotlight from "@/ui/ChromaSpotlight";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Sparkles,
  Award,
  Briefcase,
  TrendingUp,
  Compass,
  Zap,
};

export default function WhoCanLearn() {
  return (
    <section className="w-full bg-[#FAFAFA] border-y border-black/5 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-container">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green uppercase">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              ELIGIBILITY & AUDIENCE
            </p>
            <h2 className="max-w-[620px] text-[32px] font-bold leading-tight text-charcoal sm:text-[38px] md:text-[44px]">
              Who Can Learn at Skillex?
            </h2>
            <p className="mt-4 max-w-[560px] text-[15.5px] leading-relaxed text-medium-gray">
              Our career-focused programs are engineered for ambitious individuals at every stage.
              Whether you are just finishing school or looking to pivot your professional path, there is a place for you.
            </p>
          </div>
          <a
            href="/enquire"
            className="btn-sweep group inline-flex items-center gap-2 self-start rounded border border-charcoal/20 bg-white px-5 py-2.5 text-[14px] font-semibold text-charcoal shadow-sm transition-all duration-300 hover:border-skill-green hover:bg-skill-green hover:text-charcoal lg:self-end"
          >
            <span className="relative z-10 flex items-center gap-2">
              Check Your Eligibility
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* 7 Learner Profile Cards Grid with Dynamic Chroma Cursor Border Glow */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whoCanLearn.map((item, index) => {
            const Icon = iconMap[item.icon] || GraduationCap;
            return (
              <Reveal key={item.title} delay={index * 50} direction="up">
                <ChromaSpotlight
                  className="h-full rounded-xl border border-black/8 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/5"
                  borderGlowColor="rgba(140, 198, 63, 0.95)"
                  radius={280}
                >
                  <div className="flex h-full flex-col justify-between p-6">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-skill-green/10 text-charcoal transition-colors duration-300 group-hover:bg-skill-green group-hover:text-charcoal">
                          <Icon size={20} className="text-skill-green group-hover:text-charcoal transition-colors" />
                        </div>
                        <span className="rounded-full bg-light-gray px-2.5 py-0.5 text-[11px] font-semibold text-medium-gray">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="mb-2 text-[17px] font-semibold text-charcoal">
                        {item.title}
                      </h3>
                      <p className="text-[13.5px] leading-relaxed text-medium-gray">
                        {item.desc}
                      </p>
                    </div>
                    <span className="mt-4 block h-[2px] w-8 bg-skill-green/60" />
                  </div>
                </ChromaSpotlight>
              </Reveal>
            );
          })}

          {/* Quick Contact CTA Tile with Chroma Border Glow */}
          <Reveal delay={whoCanLearn.length * 50} direction="scale">
            <ChromaSpotlight
              className="h-full rounded-xl border border-dashed border-charcoal/25 bg-white/70 p-6 backdrop-blur-sm"
              borderGlowColor="rgba(0, 242, 254, 0.85)"
              radius={280}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="text-[12px] font-bold tracking-wider text-skill-green uppercase block mb-1">
                    Personalized Advice
                  </span>
                  <h3 className="text-[18px] font-bold text-charcoal mb-2">
                    Not sure which course fits your background?
                  </h3>
                  <p className="text-[13px] leading-relaxed text-medium-gray mb-4">
                    Our career mentors offer 1-on-1 counseling to evaluate your profile and recommend the highest-paying track.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-charcoal hover:text-skill-green transition-colors"
                >
                  Book Free Mentorship Call &rarr;
                </a>
              </div>
            </ChromaSpotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
