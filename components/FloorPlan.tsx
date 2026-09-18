"use client";

import { useState } from "react";
import Image from "next/image";
import { floorPlanHotspots } from "@/lib/content";
import Reveal from "@/ui/Reveal";

// Precise positions (% of image width/height) read directly off the supplied
// branded floor-plan render (public/assets/floor-plan-branded.jpg), matched
// to each numbered marker already printed on the image.
const positions: Record<number, { x: number; y: number }> = {
  1: { x: 29.2, y: 45.0 },
  2: { x: 59.5, y: 51.8 },
  3: { x: 60.4, y: 61.7 },
  4: { x: 63.6, y: 32.8 },
  5: { x: 42.5, y: 33.0 },
  6: { x: 56.0, y: 15.4 },
  7: { x: 33.4, y: 60.4 },
  8: { x: 33.4, y: 82.3 },
  9: { x: 61.0, y: 85.6 },
  10: { x: 72.0, y: 83.1 },
  11: { x: 72.5, y: 91.4 },
};

export default function FloorPlan() {
  const [activeId, setActiveId] = useState(1);
  const active = floorPlanHotspots.find((h) => h.id === activeId)!;

  return (
    <section className="w-full bg-light-gray px-5 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-8 max-w-[560px]">
          <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
            <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
            EXPLORE THE CAMPUS
          </p>
          <h2 className="text-[32px] font-bold leading-tight text-charcoal md:text-[42px]">
            Our learning spaces
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-medium-gray">
            The real Skillex floor plan — tap a number to explore each space.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          {/* On narrow screens the plan scrolls horizontally instead of
              squashing — it keeps its real proportions and stays legible. */}
          <div className="w-full overflow-x-auto bg-white [scrollbar-width:thin]">
            <div className="relative aspect-[1536/1024] w-full min-w-[640px] lg:min-w-0">
              <Image
                src="/assets/floor-plan-branded.jpg"
                alt="Skillex campus floor plan"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 640px, 60vw"
              />
              {floorPlanHotspots.map((h) => {
                const pos = positions[h.id];
                const isActive = h.id === activeId;
                return (
              <button
                    key={h.id}
                    onClick={() => setActiveId(h.id)}
                    aria-label={h.name}
                    title={h.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skill-green"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      // Keep a touch-friendlier minimum (was 20px) while
                      // still scaling with the image on larger viewports.
                      width: "clamp(26px, 3.4%, 34px)",
                      height: "clamp(26px, 3.4%, 34px)",
                      fontSize: "clamp(9px, 1%, 11px)",
                      backgroundColor: isActive ? "#8CC63F" : "rgba(255,255,255,0.92)",
                      color: isActive ? "#1A1A1A" : "#1A1A1A",
                      boxShadow: isActive
                        ? "0 0 0 3px rgba(140,198,63,0.45), 0 2px 6px rgba(0,0,0,0.25)"
                        : "0 2px 6px rgba(0,0,0,0.3)",
                      animationDelay: `${h.id * 90}ms`,
                    }}
                  >
                    {h.id}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="mb-2 block text-[12px] font-semibold text-skill-green">
                {String(active.id).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-[22px] font-semibold text-charcoal">{active.name}</h3>
              <p className="text-[14.5px] leading-relaxed text-medium-gray">{active.desc}</p>
            </div>

            <ul className="mt-10 hidden max-h-[280px] flex-col gap-1 overflow-y-auto border-t border-black/10 pt-4 lg:flex">
              {floorPlanHotspots.map((h) => (
                <li key={h.id}>
                  <button
                    onClick={() => setActiveId(h.id)}
                    className={`flex w-full items-center gap-3 py-1.5 text-left text-[13.5px] transition-colors duration-200 ${
                      h.id === activeId ? "text-charcoal font-semibold" : "text-medium-gray"
                    }`}
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white"
                      style={{ backgroundColor: h.id === activeId ? "#8CC63F" : "#6D6D6D" }}
                    >
                      {h.id}
                    </span>
                    {h.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
