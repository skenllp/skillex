import type { Metadata } from "next";
import PhotoPlaceholder from "@/ui/PhotoPlaceholder";
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
    <main className="relative w-full overflow-hidden pt-[72px] sm:pt-[80px]">
      <PhotoPlaceholder label="Enquire background — placeholder" className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.6) 100%)" }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-container grid-cols-1 gap-6 px-5 py-8 md:px-10 md:py-12 lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-[calc(100vh-80px)]">
        {/* Left: Heading */}
        <div className="pt-0">
          <p className="mb-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">ENQUIRE NOW</p>
          <h1 className="max-w-[440px] text-[26px] font-bold leading-tight text-white sm:text-[32px] md:text-[40px]">
            Tell us what you&apos;re looking for
          </h1>
          <p className="mt-3 max-w-[420px] text-[14.5px] leading-relaxed text-white/75">
            Share a few details and the Skillex team will reach out to guide you toward
            the right course.
          </p>
        </div>
        {/* Right: Form */}
        <div className="bg-white p-5 sm:p-7 md:p-8">
          <EnquiryForm defaultCourse={preselectedCourse} />
        </div>
      </div>
    </main>
  );
}
