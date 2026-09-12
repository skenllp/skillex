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
        <p className="mb-10 text-[13.5px] text-medium-gray">
          Placeholder terms — replace with Skillex&apos;s reviewed, legally accurate
          terms before publishing.
        </p>

        <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-charcoal">
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Use of this website</h2>
            <p className="text-medium-gray">
              Placeholder — standard terms of use for browsing the Skillex website and
              submitting enquiries.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Course enrolment</h2>
            <p className="text-medium-gray">
              Placeholder — describe enrolment process, fees and cancellation terms once
              confirmed.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Intellectual property</h2>
            <p className="text-medium-gray">
              Placeholder — Skillex branding, content and course materials remain the
              property of Skillex.
            </p>
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
