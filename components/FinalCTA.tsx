import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Reveal from "@/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-24 md:px-10 md:py-32">
      <Image
        src="/assets/course-hospitality.jpg"
        alt="Skillex campus"
        fill
        className="object-cover object-[64%_36%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.3) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-container">
        <Reveal direction="up" className="max-w-[560px]">
          <h2 className="mb-6 text-[36px] font-bold leading-[1.1] text-white md:text-[52px]">
            Your next step
            <br />
            starts here.
          </h2>
          <p className="mb-9 max-w-[420px] text-[16px] leading-relaxed text-white/80">
            Learn the skills. Build your confidence. Move forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/courses"
              className="inline-flex min-h-[50px] items-center gap-2 bg-skill-green px-7 text-[15px] font-semibold text-charcoal transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Courses <ArrowRight size={16} />
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-[50px] items-center gap-2 border border-white/60 px-7 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-charcoal"
            >
              Talk to an Advisor
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
