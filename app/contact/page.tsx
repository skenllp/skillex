import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/ui/PageHeader";
import EnquiryForm from "@/ui/EnquiryForm";
import { courses, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Skillex",
  description: "Talk to the Skillex team by phone, WhatsApp, email or enquiry form.",
};

export default function ContactPage({ searchParams }: { searchParams?: { course?: string } }) {
  const course = courses.find((c) => c.slug === searchParams?.course)?.slug;
  const rows = [
    { Icon: Phone, label: "Call", value: siteConfig.phonePlaceholder, href: undefined as string | undefined },
    { Icon: MessageCircle, label: "WhatsApp", value: "WhatsApp Us", href: siteConfig.whatsappPlaceholder },
    { Icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { Icon: MapPin, label: "Campus", value: siteConfig.addressPlaceholder, href: undefined },
  ];
  return (
    <main>
      <PageHeader title="Talk to an Advisor" intro="Tell us what you're looking for and we'll help you choose the right program." />
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <ul className="space-y-6">
            {rows.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-offwhite text-lime-dark">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <span className="block text-[14px] text-grey">{label}</span>
                  {href ? (
                    <a href={href} className="break-all text-[18px] font-semibold text-navy hover:text-lime-dark" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{value}</a>
                  ) : (
                    <span className="text-[18px] font-semibold text-navy">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="rounded-card border border-line p-6 md:p-9">
            <h2 className="mb-6 text-[26px] font-extrabold text-navy">Send an enquiry</h2>
            <EnquiryForm defaultCourse={course} />
          </div>
        </div>
      </section>
    </main>
  );
}
