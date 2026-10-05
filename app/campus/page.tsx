import type { Metadata } from "next";
import PageHeader from "@/ui/PageHeader";
import CampusExperience from "@/components/CampusExperience";
import FloorPlan from "@/components/FloorPlan";
import ImagePlaceholder from "@/ui/ImagePlaceholder";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Campus — Skillex",
  description: "An environment built for focused learning, practical training and career development.",
};

export default function CampusPage() {
  return (
    <main>
      <PageHeader title="A Better Place to Learn." intro="An environment built for focused learning, practical training and career development." />
      <section className="bg-white pt-12 md:pt-16">
        <div className="container-x">
          {/* Replace src with the real campus photograph when available */}
          <ImagePlaceholder src={null} alt="SKILLEX campus (photo to be added)" label="Campus photo coming soon" className="aspect-[16/8] w-full" sizes="100vw" />
        </div>
      </section>
      <CampusExperience />
      <FloorPlan />
      <FinalCTA />
    </main>
  );
}
