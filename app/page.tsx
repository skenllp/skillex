import Hero from "@/components/Hero";
import CourseSection from "@/components/CourseSection";
import EssentialAddons from "@/components/EssentialAddons";
import WhoCanLearn from "@/components/WhoCanLearn";
import SkillsDeveloped from "@/components/SkillsDeveloped";
import CareerOutcomes from "@/components/CareerOutcomes";
import WhySkillex from "@/components/WhySkillex";
import CampusExperience from "@/components/CampusExperience";
import FloorPlan from "@/components/FloorPlan";
import CareerJourney from "@/components/CareerJourney";
import StudentStories from "@/components/StudentStories";
import CareerInsights from "@/components/CareerInsights";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/ui/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal direction="up" delay={40}>
        <CourseSection />
      </Reveal>
      <Reveal direction="scale" delay={40}>
        <EssentialAddons />
      </Reveal>
      <Reveal direction="up" delay={40}>
        <WhoCanLearn />
      </Reveal>
      <Reveal direction="up" delay={40}>
        <SkillsDeveloped />
      </Reveal>
      <Reveal direction="scale" delay={40}>
        <CareerOutcomes />
      </Reveal>
      <Reveal direction="up" delay={40}>
        <WhySkillex />
      </Reveal>
      <Reveal direction="up" delay={40}>
        <CampusExperience />
      </Reveal>
      <Reveal direction="scale" delay={40}>
        <FloorPlan />
      </Reveal>
      <Reveal direction="up" delay={40}>
        <CareerJourney />
      </Reveal>
      <Reveal direction="up" delay={40}>
        <StudentStories />
      </Reveal>
      <Reveal direction="up" delay={40}>
        <CareerInsights />
      </Reveal>
      <Reveal direction="scale" delay={40}>
        <FinalCTA />
      </Reveal>
    </main>
  );
}
