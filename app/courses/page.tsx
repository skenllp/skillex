import type { Metadata } from "next";
import CourseSection from "@/components/CourseSection";
import PageHeader from "@/ui/PageHeader";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Job-Oriented Courses in Malappuram | Skillex",
  description: "Explore Skillex courses: AI-integrated digital marketing, office administration & accounting (Tally, GST), and sales & HR. Practical training in Parappanangadi.",
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
