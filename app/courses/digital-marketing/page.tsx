import type { Metadata } from "next";
import CourseTemplate from "@/components/CourseTemplate";
import { courses } from "@/lib/content";

const course = courses.find((c) => c.slug === "digital-marketing")!;

export const metadata: Metadata = {
  title: course.seo.title,
  description: course.seo.description,
};

export default function DigitalMarketingPage() {
  return <CourseTemplate course={course} />;
}
