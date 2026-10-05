import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Student Experiences — Skillex",
};

export default function StudentStoriesPage() {
  if (testimonials.length === 0) {
    redirect("/");
  }
  return null;
}
