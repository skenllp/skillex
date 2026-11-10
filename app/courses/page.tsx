import type { Metadata } from "next";
import CourseSection from "@/components/CourseSection";
import PageHeader from "@/ui/PageHeader";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Job-Oriented Courses in Malappuram | Skillex",
  description: "6-month Skillex courses: office administration & basic accounting, AI digital marketing & graphic designing, accounting & taxation diploma. Parappanangadi.",
};

export default function CoursesPage() {
  return (
    <main>
      <PageHeader title="Our Courses" intro="Three practical programs. Pick the one that fits the career you want." />
      <CourseSection hideHeading />
      <FinalCTA />
    </main>
  );
}
