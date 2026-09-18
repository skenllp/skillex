import type { Metadata } from "next";
import CourseTemplate from "@/components/CourseTemplate";
import { courses } from "@/lib/content";

const course = courses.find((c) => c.slug === "office-administration-hr")!;

export const metadata: Metadata = {
  title: course.seo.title,
  description: course.seo.description,
};

export default function OfficeAdministrationHrPage() {
  return <CourseTemplate course={course} />;
}
