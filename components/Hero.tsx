import Image from "next/image";
import Link from "next/link";

/**
 * Hero: typography on the left, one students image on the right.
 * The image is a transparent WebP (public/images/hero-students.webp) so it
 * sits directly on the soft off-white background. Replace the file to change it.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      <div className="container-x relative z-10 flex flex-col justify-center pb-4 pt-14 md:min-h-[calc(100svh-76px)] md:max-h-[720px] md:py-24">
        <h1 className="rise max-w-[820px] text-[42px] font-extrabold leading-[1.06] tracking-tight text-navy xs:text-[46px] sm:text-[56px] md:text-[60px] lg:text-[72px]">
          Learn <span className="text-lime">Skills.</span>
          <br />
          Build Your Career.
        </h1>

        <p className="rise mt-6 max-w-[500px] text-[18px] leading-relaxed text-grey md:text-[20px]" style={{ animationDelay: "80ms" }}>
          Practical, career-focused programs designed to turn learning into real-world skills.
        </p>

        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "160ms" }}>
          <Link href="#courses" className="btn btn-primary">Explore Courses</Link>
          <Link href="/contact" className="btn btn-secondary">Talk to an Advisor</Link>
        </div>

        <p className="rise mt-8 flex flex-wrap items-center gap-y-1 text-[14px] font-medium text-grey" style={{ animationDelay: "240ms" }}>
          <span>Practical Learning</span>
          <span className="mx-2.5 text-lime-dark">•</span>
          <span>Career Guidance</span>
          <span className="mx-2.5 text-lime-dark">•</span>
          <span>Industry-Relevant Training</span>
        </p>
      </div>

      {/* Students image: below the text on mobile, anchored right on desktop */}
      <div className="pointer-events-none relative mt-2 h-[300px] w-full sm:h-[360px] md:absolute md:inset-y-0 md:right-0 md:mt-0 md:h-auto md:w-[58%]">
        <Image
          src="/images/hero-students.webp"
          alt="Students learning together at a laptop"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-contain object-bottom md:object-right-bottom"
        />
      </div>
    </section>
  );
}
