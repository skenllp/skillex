import Link from "next/link";

/**
 * Minimal & Premium Typography-Led Hero.
 *
 * NO images, NO video, NO generated artwork, NO photographs.
 * Typography and whitespace are the primary visual elements.
 * Subtle dot pattern and logo-inspired arrow at 10-15% opacity.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      {/* Subtle dot pattern at approx 10-12% opacity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        style={{
          backgroundImage: "radial-gradient(#0D0E2B 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Tasteful logo-inspired arrow graphic, sized moderately at 12-14% opacity */}
      <svg
        aria-hidden
        viewBox="0 0 320 320"
        className="pointer-events-none absolute -bottom-10 -right-10 h-[220px] w-[220px] text-lime opacity-[0.12] md:-right-4 md:top-1/2 md:h-[340px] md:w-[340px] md:-translate-y-1/2 md:opacity-[0.14]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 280 L260 60" />
        <path d="M140 55 H265 V180" />
      </svg>

      <div className="container-x relative flex min-h-[520px] flex-col justify-center py-20 md:min-h-[calc(100svh-76px)] md:max-h-[700px] md:py-24">
        {/* Subtle pill tag */}
        <div className="rise mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-lime" />
          <span className="text-[13px] font-semibold tracking-wide text-navy">
            SKILLEX CAREER INSTITUTE
          </span>
        </div>

        <h1 className="rise max-w-[820px] text-[44px] font-extrabold leading-[1.05] tracking-tight text-navy sm:text-[60px] md:text-[80px]">
          Learn <span className="text-lime">Skills.</span>
          <br />
          Build Your Career.
        </h1>

        <p
          className="rise mt-6 max-w-[540px] text-[18px] leading-relaxed text-grey md:text-[21px]"
          style={{ animationDelay: "80ms" }}
        >
          Practical, career-focused programs designed to turn learning into real-world skills.
        </p>

        <div
          className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "160ms" }}
        >
          <Link href="#courses" className="btn btn-primary shadow-sm hover:shadow">
            Explore Courses
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Talk to an Advisor
          </Link>
        </div>

        <div
          className="rise mt-12 flex flex-wrap items-center gap-y-2 text-[14px] font-medium text-grey"
          style={{ animationDelay: "240ms" }}
        >
          <span>Practical Learning</span>
          <span className="mx-2.5 text-lime-dark">•</span>
          <span>Career Guidance</span>
          <span className="mx-2.5 text-lime-dark">•</span>
          <span>Industry-Relevant Training</span>
        </div>
      </div>
    </section>
  );
}
