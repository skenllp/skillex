import type { Metadata } from "next";
import CourseTemplate from "@/components/CourseTemplate";
import { courses } from "@/lib/content";

const course = courses.find((c) => c.slug === "office-administration")!;

export const metadata: Metadata = {
  title: `${course.title} — Skillex`,
  description: course.short,
};

export default function OfficeAdministrationPage() {
  return <CourseTemplate course={course} />;
}
