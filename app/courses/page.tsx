import type { Metadata } from "next";
import CourseSection from "@/components/CourseSection";
import PageHeader from "@/ui/PageHeader";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Courses — Skillex",
  description: "Practical, career-focused programs in office administration & accounting, sales management & HR, and AI-integrated digital marketing.",
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
