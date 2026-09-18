import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import Reveal from "@/ui/Reveal";

const detailedSteps = [
  {
    step: "01",
    title: "Counsel & Enrol",
    desc: "1-on-1 profile evaluation to match your aspirations with the highest-demand career track.",
  },
  {
    step: "02",
    title: "Practical Learning",
    desc: "3 months of hands-on lab sessions, modern office simulation, and live project workflows.",
  },
  {
    step: "03",
    title: "AI & Fluency Edge",
    desc: "Executive spoken English drills, MS Office mastery, and modern AI productivity tools.",
  },
  {
    step: "04",
    title: "Placement & Growth",
    desc: "Mock HR interviews, corporate referrals, and dedicated placement assistance across 10+ sectors.",
  },
];

export default function CareerJourney() {
  return (
    <section className="w-full bg-[#111111] px-5 py-10 text-white md:px-10 md:py-16 border-y border-white/5">
      <div className="mx-auto max-w-container text-center">
        <Reveal direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-skill-green/40 bg-skill-green/10 px-3.5 py-1 mb-4">
            <Sparkles size={14} className="text-skill-green" />
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-skill-green">
              The Skillex Roadmap
            </span>
          </div>
          <h2 className="text-[32px] font-bold text-white sm:text-[38px] md:text-[44px] mb-4">
            From Learner to Corporate Professional
          </h2>
          <p className="text-[15.5px] text-white/65 max-w-[560px] mx-auto mb-9">
            A structured, 4-phase transformation engineered to take you from day one to your first day on the job.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {detailedSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 80} direction="up">
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-skill-green/50 hover:bg-white/10">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-skill-green/20 text-[15px] font-black text-skill-green border border-skill-green/40">
                      {s.step}
                    </span>
                    {i < detailedSteps.length - 1 && (
                      <ArrowRight size={18} className="text-white/20 hidden lg:block group-hover:text-skill-green group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <h3 className="text-[19px] font-bold text-white mb-2 group-hover:text-skill-green transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-white/65">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11.5px] text-skill-green">
                  <CheckCircle size={14} /> Milestone Phase {i + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 text-[13px] font-bold tracking-[0.25em] text-white/40 uppercase">
          LEARN &bull; GROW &bull; SUCCEED
        </p>
      </div>
    </section>
  );
}
