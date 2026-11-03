import type { Metadata } from "next";
import PageHeader from "@/ui/PageHeader";
import EnquiryForm from "@/ui/EnquiryForm";
import { courses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquire Now | Skillex Courses, Parappanangadi",
  description: "Send an enquiry to Skillex and get course details, batch timings and career guidance from our team in Parappanangadi, Kerala.",
};

export default function EnquirePage({ searchParams }: { searchParams?: { course?: string } }) {
  const preselected = courses.find((c) => c.slug === searchParams?.course)?.slug;
  return (
    <main>
      <PageHeader title="Enquire Now" intro="Share a few details and our team will get back to you." />
      <section className="section-y bg-white">
        <div className="container-x max-w-[720px]">
          <div className="rounded-card border border-line p-6 md:p-9">
            <EnquiryForm defaultCourse={preselected} />
          </div>
        </div>
      </section>
    </main>
  );
}
