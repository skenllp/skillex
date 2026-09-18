import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "@/ui/EnquiryForm";
import { courses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquire Now — Skillex",
  description: "Send an admission enquiry to Skillex and take the first step toward your next career.",
};

export default function EnquirePage({
  searchParams,
}: {
  searchParams?: { course?: string };
}) {
  // Arriving from a course page (e.g. /enquire?course=digital-marketing)
  // preselects that course so learners never have to type it again.
  const preselectedCourse = courses.find((c) => c.slug === searchParams?.course)?.slug;

  return (
    <main className="relative w-full overflow-hidden pt-[68px] sm:pt-[76px] lg:pt-[80px]">
      <div className="absolute inset-0">
        <Image
          src="/assets/contact-hero.jpg"
          alt="Skillex Admissions"
          fill
          priority
          className="object-cover brightness-[0.55]"
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.68) 100%)" }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-container grid-cols-1 gap-4 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-[calc(100vh-80px)]">
        {/* Left: Heading */}
        <div className="pt-0">
          <p className="mb-1 text-[11.5px] font-semibold tracking-[0.2em] text-skill-green uppercase">ENQUIRE NOW</p>
          <h1 className="max-w-[440px] text-[22px] font-bold leading-tight text-white sm:text-[30px] md:text-[38px] lg:text-[40px]">
            Tell us what you&apos;re looking for
          </h1>
          <p className="mt-1.5 max-w-[420px] text-[13.5px] leading-relaxed text-white/80 sm:mt-3 sm:text-[14.5px]">
            Share a few details and the Skillex team will reach out to guide you toward
            the right course.
          </p>
        </div>
        {/* Right: Form */}
        <div className="rounded-xl bg-white p-4 shadow-2xl shadow-black/40 sm:rounded-2xl sm:p-6 md:p-8">
          <EnquiryForm defaultCourse={preselectedCourse} />
        </div>
      </div>
    </main>
  );
}
