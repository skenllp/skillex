import { BookOpen, Compass, Target, Users } from "lucide-react";
import { principles } from "@/lib/content";
import Reveal from "@/ui/Reveal";

const icons = { BookOpen, Target, Compass, Users } as const;

export default function WhySkillex() {
  return (
    <section className="section-y bg-offwhite">
      <div className="container-x">
        <Reveal>
          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-navy md:text-[48px]">Why SKILLEX?</h2>
          <p className="mt-4 max-w-[520px] text-[18px] leading-relaxed text-grey">
            Learning designed around what happens after the classroom.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => {
            const Icon = icons[p.icon as keyof typeof icons];
            return (
              <Reveal key={p.title} delay={i * 60}>
                <div className="flex items-center gap-3">
                  <Icon size={28} strokeWidth={1.5} className="text-lime-dark" />
                  <span className="text-[14px] font-bold text-grey">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 text-[20px] font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-grey">{p.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
