import { BookOpen, Target, TrendingUp, Users, type LucideIcon, ArrowRight } from "lucide-react";
import { principles } from "@/lib/content";
import ChromaGrid from "@/ui/ChromaGrid";
import ChromaSpotlight from "@/ui/ChromaSpotlight";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Target,
  Users,
  TrendingUp,
};

export default function WhySkillex() {
  return (
    <section className="relative w-full bg-charcoal px-5 py-20 md:px-10 md:py-28 overflow-hidden">
      {/* Interactive Cursor-Tracking Chroma Grid */}
      <ChromaGrid baseOpacity={0.06} gridSize={46} interactiveRadius={340} />

      <div className="relative z-10 mx-auto max-w-container">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              WHY SKILLEX
            </p>
            <h2 className="max-w-[620px] text-[32px] font-bold leading-tight text-white md:text-[44px]">
              More than a course. A career foundation.
            </h2>
          </div>
          <p className="max-w-[380px] text-[15.5px] leading-relaxed text-white/65">
            We focus on practical learning, industry-relevant skills and real-world
            exposure to help you grow with confidence.
          </p>
        </div>

        {/* 4 Interactive Chroma Cards with Cursor Border Glow */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {principles.map((p, i) => {
            const Icon = iconMap[p.icon];
            return (
              <ChromaSpotlight
                key={p.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-skill-green/50 hover:bg-white/[0.08]"
                borderGlowColor="rgba(140, 198, 63, 0.95)"
                radius={280}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-skill-green/15 border border-skill-green/30 group-hover:bg-skill-green group-hover:text-charcoal transition-all duration-300">
                    <Icon size={22} className="text-skill-green group-hover:text-charcoal transition-colors" />
                  </div>
                  <span className="text-[13px] font-bold text-skill-green">0{i + 1}</span>
                </div>
                <h3 className="mb-2 text-[19px] font-bold text-white group-hover:text-skill-green transition-colors">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-white/65">
                  {p.desc}
                </p>
                <span className="mt-4 block h-[2px] w-8 bg-skill-green/50" />
              </ChromaSpotlight>
            );
          })}
        </div>

        {/* 100% Placement Support Ecosystem Banner with Chroma Spotlight */}
        <ChromaSpotlight
          className="rounded-2xl border border-white/15 bg-gradient-to-r from-white/10 via-white/5 to-white/[0.02] p-7 sm:p-9 backdrop-blur-md transition-all hover:border-skill-green/50"
          borderGlowColor="rgba(0, 242, 254, 0.85)"
          radius={400}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-skill-green animate-pulse" />
                <span className="text-[11.5px] font-bold uppercase tracking-widest text-skill-green">
                  Placement Guarantee & Guidance
                </span>
              </div>
              <h3 className="text-[22px] font-bold text-white sm:text-[24px]">
                Committed to Your Career Placement
              </h3>
              <p className="text-[14.5px] text-white/75 max-w-[650px] mt-1 leading-relaxed">
                Backed by our dedicated HR staffing network and industry recruiters, we connect our graduates with corporate vacancies, offer mock interview prep, and provide career mentorship.
              </p>
            </div>
            <a
              href="/enquire"
              className="btn-sweep group shrink-0 inline-flex items-center gap-2 border border-skill-green bg-skill-green px-7 py-3.5 text-[14.5px] font-semibold text-charcoal shadow-lg shadow-skill-green/20 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply for Placement Track <ArrowRight size={15} />
              </span>
            </a>
          </div>
        </ChromaSpotlight>
      </div>
    </section>
  );
}
