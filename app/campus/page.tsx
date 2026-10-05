import type { Metadata } from "next";
import PageHeader from "@/ui/PageHeader";
import CampusExperience from "@/components/CampusExperience";
import FloorPlan from "@/components/FloorPlan";
import ImageSlot from "@/ui/ImageSlot";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/ui/Reveal";

export const metadata: Metadata = {
  title: "Campus & Facilities — Skillex",
  description:
    "An environment built for focused learning, practical workplace training, and professional career development.",
};

const campusSpaces = [
  {
    title: "Modern Classrooms",
    desc: "Acoustically balanced, bright learning halls equipped for lecture discussions and interactive workshops.",
    src: "/images/classroom.webp",
    alt: "SKILLEX Modern Classrooms",
    label: "Classroom Image",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Practical Training Labs",
    desc: "Hands-on workstations simulating actual corporate accounting, HR operations, and digital marketing desks.",
    src: "/images/practical-training.webp",
    alt: "SKILLEX Practical Training Labs",
    label: "Practical Training Image",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Student Environment & Lounges",
    desc: "Collaborative breakout zones where learners review projects, practice interviews, and network.",
    src: "/images/student-environment.webp",
    alt: "SKILLEX Student Environment and Breakout Areas",
    label: "Student Image",
    aspect: "aspect-[16/10]",
  },
];

export default function CampusPage() {
  return (
    <main>
      <PageHeader
        title="A Better Place to Learn."
        intro="An environment designed specifically for focused learning, hands-on application, and professional workplace readiness."
      />

      {/* Main Campus Exterior Slot */}
      <section className="bg-white pt-10 md:pt-14">
        <div className="container-x">
          <ImageSlot
            src="/images/campus-exterior.webp"
            alt="SKILLEX Campus Exterior Architecture"
            label="Campus Image"
            fallbackMode="neutral"
            aspectRatio="aspect-[16/8] sm:aspect-[21/9]"
            className="w-full shadow-sm"
          />
        </div>
      </section>

      {/* Campus Spaces Grid (Classrooms, Practical Training, Student Environment) */}
      <section className="section-y bg-white">
        <div className="container-x">
          <Reveal className="max-w-[620px]">
            <div className="mb-3 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-lime-dark">
              <span className="h-1.5 w-6 rounded-full bg-lime" />
              <span>Campus Tour</span>
            </div>
            <h2 className="text-[32px] font-extrabold tracking-tight text-navy sm:text-[40px]">
              Spaces Designed for Real-World Skills
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-grey">
              Every room at SKILLEX is purposefully structured to mirror professional work environments.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {campusSpaces.map((space, i) => (
              <Reveal key={space.title} delay={i * 80} className="flex h-full flex-col">
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-sm">
                  {/* Prepared image slot for real photography */}
                  <ImageSlot
                    src={space.src}
                    alt={space.alt}
                    label={space.label}
                    fallbackMode="neutral"
                    aspectRatio={space.aspect}
                    className="mb-6 w-full rounded-2xl"
                  />
                  <h3 className="text-[20px] font-bold text-navy">{space.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-grey">{space.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <CampusExperience />

      {/* Interactive Floor Plan */}
      <FloorPlan />

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
