import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — Skillex",
  description: "How Skillex collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white px-5 pb-24 pt-[160px] md:px-10 md:pt-[200px]">
      <div className="mx-auto max-w-[760px]">
        <h1 className="mb-4 text-[32px] font-bold text-charcoal md:text-[42px]">Privacy Policy</h1>
        <p className="mb-10 text-[13.5px] text-medium-gray">
          Placeholder policy — replace with Skillex&apos;s reviewed, legally accurate
          privacy policy before publishing.
        </p>

        <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-charcoal">
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Information we collect</h2>
            <p className="text-medium-gray">
              Placeholder — describe what personal information is collected through
              enquiry forms, cookies, analytics and ad platforms.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">How we use your information</h2>
            <p className="text-medium-gray">
              Placeholder — describe how enquiry and contact information is used to
              respond to admissions enquiries.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Cookies &amp; advertising</h2>
            <p className="text-medium-gray">
              Placeholder — disclose use of cookies and tracking for Google Ads / Meta
              Ads, if applicable.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Contact</h2>
            <p className="text-medium-gray">
              Questions about this policy can be sent to{" "}
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
