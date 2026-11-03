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
        <p className="mb-10 text-[13.5px] text-medium-gray">Last updated: November 2026.</p>

        <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-charcoal">
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Information we collect</h2>
            <p className="text-medium-gray">When you submit an enquiry or contact form we collect your name, phone number, email address, the course you are interested in and any message you write. We do not ask for payment details on this website.</p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">How we use your information</h2>
            <p className="text-medium-gray">We use this information only to respond to your enquiry, share course and admission details, and follow up with you. We do not sell your personal information.</p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Sharing</h2>
            <p className="text-medium-gray">Enquiries are delivered to us through email service providers that process the message on our behalf. We may share information only where required by law.</p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Cookies &amp; advertising</h2>
            <p className="text-medium-gray">This website does not currently run advertising or analytics trackers. If we add them in future, this policy will be updated.</p>
          </section>
          <section>
            <h2 className="mb-2 text-[18px] font-semibold">Your choices</h2>
            <p className="text-medium-gray">You can ask us to correct or delete the information you have sent by writing to the email address below.</p>
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
