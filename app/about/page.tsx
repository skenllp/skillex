import type { Metadata } from "next";
import PageHeader from "@/ui/PageHeader";
import WhySkillex from "@/components/WhySkillex";
import FinalCTA from "@/components/FinalCTA";
import ImageSlot from "@/ui/ImageSlot";
import Reveal from "@/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Skillex",
  description:
    "Skillex is a career-training institute focused on practical, industry-relevant skills that turn learning into real workplace readiness.",
};

const practicalPillars = [
  "Industry-standard tools and simulated workplace workflows",
  "Mentorship from experienced practitioners, not pure theorists",
  "Focus on portfolio deliverables, presentation skills, and professional confidence",
  "Direct assistance with interview preparation and career pathways",
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About SKILLEX"
        intro="A career-training institute built around practical, career-focused learning."
      />

      {/* Mission & Story Section with Team Image Slot */}
      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-lime-dark">
              <span className="h-1.5 w-6 rounded-full bg-lime" />
              <span>Our Purpose</span>
            </div>
            <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-navy sm:text-[40px]">
              Skills Create Opportunities.
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-grey">
              We replace theory-heavy classes with direct hands-on practice, ensuring learners acquire the exact competencies modern employers look for.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-grey">
              From business administration to AI-integrated marketing, every module is structured to give students real confidence from day one on the job.
            </p>
            <ul className="mt-6 space-y-3">
              {practicalPillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3 text-[15.5px] text-navy/90">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-lime-dark" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Prepared Team / About Image Slot */}
          <Reveal delay={100}>
            <ImageSlot
              src="/images/about-team.webp"
              alt="SKILLEX Team and Academic Guidance"
              label="Team Image"
              fallbackMode="neutral"
              aspectRatio="aspect-[4/3]"
              className="w-full shadow-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* Faculty & Mentorship Section with Mentor Image Slot */}
      <section className="section-y bg-offwhite">
        <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Prepared Mentor Image Slot */}
          <Reveal delay={100} className="order-2 md:order-1">
            <ImageSlot
              src="/images/mentor-guidance.webp"
              alt="SKILLEX Mentor Guidance and Interactive Coaching"
              label="Mentor Image"
              fallbackMode="neutral"
              aspectRatio="aspect-[4/3]"
              className="w-full shadow-sm"
            />
          </Reveal>

          <Reveal className="order-1 md:order-2">
            <div className="mb-3 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-lime-dark">
              <span className="h-1.5 w-6 rounded-full bg-lime" />
              <span>Mentorship</span>
            </div>
            <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-navy sm:text-[40px]">
              Guidance from Experienced Practitioners
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-grey">
              At SKILLEX, mentors are industry practitioners who understand modern office workflows, accounting software, and campaign analytics.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-grey">
              Small batch sizes ensure personalized feedback on assignments, one-on-one portfolio reviews, and genuine career support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Skillex Core Principles */}
      <WhySkillex />

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
