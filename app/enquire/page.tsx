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
    <main className="relative flex min-h-screen w-full items-center overflow-hidden pt-[96px]">
      <PhotoPlaceholder label="Enquire background — placeholder" className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(100deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.35) 100%)" }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-container grid-cols-1 gap-14 px-5 py-16 md:px-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-[12px] font-semibold tracking-[0.2em] text-skill-green">ENQUIRE NOW</p>
          <h1 className="max-w-[440px] text-[34px] font-bold leading-tight text-white md:text-[44px]">
            Tell us what you&apos;re looking for
          </h1>
          <p className="mt-5 max-w-[420px] text-[15.5px] leading-relaxed text-white/75">
            Share a few details and the Skillex team will reach out to guide you toward
            the right course.
          </p>
        </div>
        <div className="bg-white p-7 md:p-10">
          <EnquiryForm defaultCourse={preselectedCourse} />
        </div>
      </div>
    </main>
  );
}
