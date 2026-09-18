import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import PhotoPlaceholder from "@/ui/PhotoPlaceholder";
import Reveal from "@/ui/Reveal";
import { campusHighlights } from "@/lib/content";

export default function CampusExperience() {
  return (
    <section className="w-full bg-white px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              OUR CAMPUS
            </p>
            <h2 className="max-w-[520px] text-[32px] font-bold leading-tight text-charcoal md:text-[42px]">
              Step inside Skillex
            </h2>
            <p className="mt-4 max-w-[440px] text-[15.5px] leading-relaxed text-medium-gray">
              A modern learning environment designed to help you grow, practice and
              succeed.
            </p>
            <a
              href="/campus"
              className="mt-7 inline-flex min-h-[50px] items-center gap-2 bg-skill-green px-7 text-[15px] font-semibold text-charcoal transition-transform duration-300 hover:-translate-y-0.5"
            >
              Take a Virtual Tour <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          {/* Main Video Experience Preview */}
          <div className="group relative h-[260px] overflow-hidden rounded-2xl sm:h-[320px] md:h-[380px] bg-charcoal">
            <video
              src="/assets/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
              <span className="self-start rounded-full bg-black/40 border border-white/20 px-3.5 py-1 text-[11.5px] font-semibold text-white backdrop-blur-md">
                Live Campus Preview
              </span>

              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-[22px] font-bold text-white sm:text-[26px]">
                    Experience the Energy of Skillex
                  </h3>
                  <p className="text-[14px] text-white/80 max-w-[420px] hidden sm:block">
                    Interactive classrooms, collaborative halls, and hands-on simulation spaces.
                  </p>
                </div>
                <a
                  href="/campus#video"
                  aria-label="Watch full campus video"
                  className="group/btn flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-skill-green text-charcoal shadow-xl transition-transform duration-300 hover:scale-110"
                >
                  <PlayCircle size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* 4 Real Campus Highlights */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            {campusHighlights.map((h, index) => {
              const highlightImages = [
                "/assets/course-digital-marketing.jpg",
                "/assets/course-office-administration.jpg",
                "/assets/floor-plan-detail.jpg",
                "/assets/floor-plan-branded.jpg",
              ];
              return (
                <div
                  key={h.title}
                  className="group relative h-[120px] overflow-hidden rounded-xl bg-charcoal lg:h-[88px]"
                >
                  <Image
                    src={highlightImages[index % highlightImages.length]}
                    alt={h.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-3 sm:p-4 flex flex-col justify-end">
                    <span className="text-[13px] font-bold leading-tight text-white group-hover:text-skill-green transition-colors">
                      {h.title}
                    </span>
                    <span className="text-[11px] text-white/60 line-clamp-1 hidden sm:block">
                      {h.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
