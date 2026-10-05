import type { Metadata } from "next";
import PageHeader from "@/ui/PageHeader";
import StudentStories from "@/components/StudentStories";
import FinalCTA from "@/components/FinalCTA";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Student Experiences — Skillex",
  description: "Hear from SKILLEX students.",
};

export default function StudentStoriesPage() {
  return (
    <main>
      <PageHeader title="Student Experiences" intro="Hear from people learning with SKILLEX." />
      {testimonials.length === 0 && (
        <section className="section-y bg-white">
          <div className="container-x">
            <p className="max-w-[520px] text-[18px] leading-relaxed text-grey">Student stories are coming soon.</p>
          </div>
        </section>
      )}
      <StudentStories />
      <FinalCTA />
    </main>
  );
}
