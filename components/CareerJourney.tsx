import { ArrowRight } from "lucide-react";
import { journeySteps } from "@/lib/content";
import Reveal from "@/ui/Reveal";

export default function CareerJourney() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Reveal>
          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-navy md:text-[48px]">Your Path Starts Here</h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* connecting line (desktop) */}
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />
          {journeySteps.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 md:block">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime text-[16px] font-bold text-navy">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < journeySteps.length - 1 && (
                <ArrowRight aria-hidden size={18} className="absolute right-[12%] top-[15px] z-10 hidden bg-white px-0.5 text-lime-dark md:block" />
              )}
              <div className="md:mt-6">
                <h3 className="text-[22px] font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-grey">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
