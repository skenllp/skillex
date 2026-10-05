import type { Metadata } from "next";
import PageHeader from "@/ui/PageHeader";
import CampusExperience from "@/components/CampusExperience";
import FloorPlan from "@/components/FloorPlan";
import ImageSlot from "@/ui/ImageSlot";
import { images } from "@/lib/images";
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
    desc: "Bright spaces built for focused learning.",
    src: images.classroom,
    alt: "SKILLEX Modern Classrooms",
    label: "Classroom Image",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Practical Training Spaces",
    desc: "Room to practise what you learn.",
    src: images.practicalTraining,
    alt: "SKILLEX Practical Training Spaces",
    label: "Practical Training Image",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Student Environment",
    desc: "A comfortable place to study and connect.",
    src: images.studentEnvironment,
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
        intro="An environment built for focused learning, practical training and career development."
      />

      {/* Main Campus Exterior Slot */}
      <section className="bg-white pt-10 md:pt-14">
        <div className="container-x">
          <ImageSlot
            src={images.campusExterior}
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
            <h2 className="text-[32px] font-extrabold tracking-tight text-navy sm:text-[40px]">
              Inside the Campus
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-grey">
              Spaces for learning, practice and career development.
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
