import { campusHighlights } from "@/lib/content";
import Reveal from "@/ui/Reveal";

export default function CampusExperience() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <h2 className="text-[30px] font-extrabold tracking-tight text-navy md:text-[40px]">What You&apos;ll Find</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {campusHighlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 60}>
              <div className="h-full rounded-card border border-line p-7">
                <h3 className="text-[20px] font-bold text-navy">{h.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-grey">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
