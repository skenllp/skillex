import Hero from "@/components/Hero";
import CourseSection from "@/components/CourseSection";
import WhySkillex from "@/components/WhySkillex";
import CareerJourney from "@/components/CareerJourney";
import CampusPreview from "@/components/CampusPreview";
import StudentStories from "@/components/StudentStories";
import FinalCTA from "@/components/FinalCTA";

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
