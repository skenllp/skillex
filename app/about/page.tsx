import type { Metadata } from "next";
import PageHeader from "@/ui/PageHeader";
import WhySkillex from "@/components/WhySkillex";
import FinalCTA from "@/components/FinalCTA";
import ImageSlot from "@/ui/ImageSlot";
import { images } from "@/lib/images";
import Reveal from "@/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us — Skillex",
  description:
    "Skillex is a career-training institute focused on practical, industry-relevant skills that turn learning into real workplace readiness.",
};

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
            <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-navy sm:text-[40px]">
              Skills Create Opportunities.
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-grey">
              We replace theory-heavy classes with hands-on practice, so you learn the skills the workplace actually uses.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-grey">
              Every program is designed to help you take your next career step with confidence.
            </p>
          </Reveal>

          {/* Prepared Team / About Image Slot */}
          <Reveal delay={100}>
            <ImageSlot
              src={images.aboutTeam}
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
              src={images.mentorGuidance}
              alt="SKILLEX Mentor Guidance and Interactive Coaching"
              label="Mentor Image"
              fallbackMode="neutral"
              aspectRatio="aspect-[4/3]"
              className="w-full shadow-sm"
            />
          </Reveal>

          <Reveal className="order-1 md:order-2">
            <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-navy sm:text-[40px]">
              Experienced Mentors
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-grey">
              Learn with practical guidance from experienced trainers.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-grey">
              Get support preparing for your next career step.
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
