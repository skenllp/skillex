import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CourseSection from "@/components/CourseSection";
import WhySkillex from "@/components/WhySkillex";
import CareerJourney from "@/components/CareerJourney";
import CampusPreview from "@/components/CampusPreview";
import StudentStories from "@/components/StudentStories";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Skillex — Career Training Institute in Parappanangadi, Kerala",
  description:
    "Practical, career-focused courses in Office Administration & Accounting, Sales Management & HR, and AI-Integrated Digital Marketing at Skillex, Parappanangadi, Kerala.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CourseSection />
      <WhySkillex />
      <CareerJourney />
      <CampusPreview />
      <StudentStories />
      <FinalCTA />
    </main>
  );
}
