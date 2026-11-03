import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions — Skillex",
  description: "Terms and conditions for using the Skillex website and enrolling in Skillex programs.",
};

export default function TermsPage() {
  return (
    <main className="w-full bg-white px-5 pb-24 pt-[160px] md:px-10 md:pt-[200px]">
      <div className="mx-auto max-w-[760px]">
        <h1 className="mb-4 text-[32px] font-bold text-charcoal md:text-[42px]">Terms &amp; Conditions</h1>
        <p className="mb-10 text-[13.5px] text-medium-gray">Last updated: November 2026.</p>

        <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-charcoal">
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Use of this website</h2>
            <p className="text-medium-gray">The content on this website is provided for general information about Skillex and its programs. Course details, schedules and fees may change; please confirm them with our team before enrolling.</p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Enquiries and enrolment</h2>
            <p className="text-medium-gray">Submitting an enquiry does not guarantee admission. Enrolment, fees and refund terms are confirmed directly by Skillex at the time of admission.</p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Outcomes</h2>
            <p className="text-medium-gray">Skillex provides training and career guidance. We do not guarantee any specific job, salary or placement outcome.</p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Intellectual property</h2>
            <p className="text-medium-gray">Skillex branding, content and course materials remain the property of Skillex and may not be copied or reused without permission.</p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Contact</h2>
            <p className="text-medium-gray">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-skill-green">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
