"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PhotoPlaceholder from "@/ui/PhotoPlaceholder";
import { studentStories } from "@/lib/content";

export default function StudentStories() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 344; // 24 = gap-6
    track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              STUDENT STORIES
            </p>
            <h2 className="max-w-[500px] text-[32px] font-bold leading-tight text-charcoal md:text-[42px]">
              Real people. Real progress.
            </h2>
            <p className="mt-4 max-w-[440px] text-[15.5px] text-medium-gray">
              Hear from students who are building their careers with Skillex.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous story"
              className="flex h-11 w-11 items-center justify-center border border-black/15 transition-colors hover:border-skill-green hover:text-skill-green"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next story"
              className="flex h-11 w-11 items-center justify-center border border-black/15 transition-colors hover:border-skill-green hover:text-skill-green"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {studentStories.map((s, i) => (
            <div
              key={i}
              className="group flex w-[320px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-black/8 bg-light-gray/30 p-6 transition-all duration-300 hover:border-skill-green/50 hover:bg-white hover:shadow-xl hover:shadow-black/5 md:w-[350px]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-skill-green/15 px-3 py-1 text-[11.5px] font-semibold text-charcoal">
                    <span className="h-1.5 w-1.5 rounded-full bg-skill-green" /> Placed Graduate
                  </span>
                  <span className="text-[12px] font-medium text-medium-gray">{s.course}</span>
                </div>

                <p className="mb-6 min-h-[90px] text-[14.5px] italic leading-relaxed text-charcoal/90">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-black/8 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[15px] font-bold text-charcoal">{s.name}</h4>
                    <p className="text-[13px] font-medium text-skill-green">{s.role}</p>
                  </div>
                  <span className="text-right text-[11.5px] font-medium text-medium-gray">
                    {s.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
