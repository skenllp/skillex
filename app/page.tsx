import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CourseSection from "@/components/CourseSection";
import WhySkillex from "@/components/WhySkillex";
import CareerJourney from "@/components/CareerJourney";
import CampusPreview from "@/components/CampusPreview";
import StudentStories from "@/components/StudentStories";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Skillex | Skill Training Courses in Parappanangadi, Kerala",
  description:
    "6-month job-oriented courses in office administration, accounting & taxation, and AI digital marketing & graphic designing. Parappanangadi, Malappuram.",
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
