import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ImageSlot from "@/ui/ImageSlot";
import Reveal from "@/ui/Reveal";

const campusHighlights = [
  "Modern training halls & practical discussion zones",
  "Dedicated IT & office simulation workstations",
  "Professional conference & presentation rooms",
  "Student-first environment designed for focused collaboration",
];

export default function CampusPreview() {
  return (
    <section className="section-y bg-offwhite">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-lime-dark">
            <span className="h-1.5 w-6 rounded-full bg-lime" />
            <span>Campus Environment</span>
          </div>

          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-navy sm:text-[42px] md:text-[48px]">
            A Better Place to Learn.
          </h2>

          <p className="mt-5 max-w-[480px] text-[18px] leading-relaxed text-grey">
            An environment built from the ground up for practical training, peer collaboration, and career development.
          </p>

          <ul className="mt-7 space-y-3">
            {campusHighlights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15.5px] text-navy/90">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-lime-dark" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Link href="/campus" className="btn btn-secondary group inline-flex items-center gap-2">
              Explore Campus &amp; Floor Plan
              <ArrowRight
                size={18}
                className="text-lime-dark transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        {/* Prepared Campus Exterior Image Slot */}
        <div className="relative w-full">
          <ImageSlot
            src="/images/campus-exterior.webp"
            alt="SKILLEX Campus Exterior"
            label="Campus Image"
            fallbackMode="neutral"
            aspectRatio="aspect-[4/3]"
            className="w-full shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
