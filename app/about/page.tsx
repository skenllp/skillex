import type { Metadata } from "next";
import PageHeader from "@/ui/PageHeader";
import WhySkillex from "@/components/WhySkillex";
import FinalCTA from "@/components/FinalCTA";
import ImagePlaceholder from "@/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About — Skillex",
  description: "Skillex is a career-training institute focused on practical, industry-relevant skills.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader title="About SKILLEX" intro="A career-training institute built around practical skills." />
      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-[30px] font-extrabold leading-tight tracking-tight text-navy md:text-[40px]">Skills create opportunities.</h2>
            <p className="mt-5 text-[18px] leading-relaxed text-grey">
              We replace theory-heavy classes with hands-on practice, so you learn the skills the workplace actually uses.
            </p>
            <p className="mt-4 text-[18px] leading-relaxed text-grey">
              Every program is designed to help you take your next career step with confidence.
            </p>
          </div>
          <ImagePlaceholder src={null} alt="SKILLEX (photo to be added)" label="Photo coming soon" className="aspect-[4/3] w-full" />
        </div>
      </section>
      <WhySkillex />
      <FinalCTA />
    </main>
  );
}
