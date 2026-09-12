import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/ui/EnquiryForm";
import { siteConfig } from "@/lib/content";
import ChromaGrid from "@/ui/ChromaGrid";
import ChromaSpotlight from "@/ui/ChromaSpotlight";

export const metadata: Metadata = {
  title: "Contact — Skillex",
  description: "Get in touch with Skillex by phone, WhatsApp, email or enquiry form.",
};

export default function ContactPage() {
  return (
    <main>
      {/* 1. Cinematic Hero Section with Welcoming Reception Photography */}
      <section className="relative flex min-h-[55vh] w-full items-end overflow-hidden bg-black pt-[150px] pb-16 md:pt-[190px] md:pb-24">
        {/* Real Reception / Admissions Photography */}
        <div className="absolute inset-0">
          <Image
            src="/assets/contact-hero.jpg"
            alt="Skillex Admissions & Student Advisory Reception Desk"
            fill
            priority
            className="object-cover brightness-[0.92] contrast-[1.05]"
          />
        </div>

        {/* Cinematic Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.92) 100%)",
          }}
        />

        {/* Interactive Chroma Grid */}
        <ChromaGrid baseOpacity={0.06} gridSize={46} interactiveRadius={350} />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-container px-5 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-skill-green/40 bg-black/50 px-3.5 py-1 backdrop-blur-md mb-4">
            <Sparkles size={14} className="text-skill-green" />
            <span className="text-[11.5px] font-semibold tracking-[0.2em] text-skill-green uppercase">
              Admissions &amp; Advisory
            </span>
          </div>

          <h1 className="max-w-[720px] text-[36px] font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[46px] md:text-[54px]">
            Let&apos;s talk about your next step
          </h1>

          <p className="mt-4 max-w-[580px] text-[16px] leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:text-[17.5px]">
            Connect directly with our admissions counselors to learn about program batches, syllabus details, campus visits, and placement assistance.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-white/80">
            <span className="flex items-center gap-1.5">
              <Clock size={15} className="text-skill-green" /> Fast Response within 24h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-skill-green" /> Free Career Counseling
            </span>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Form */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-12 lg:grid-cols-[380px_1fr]">
          
          {/* Contact Direct Channels */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[22px] font-bold text-charcoal">Get in touch directly</h2>
            <div className="space-y-4">
              <ChromaSpotlight className="rounded-xl border border-black/8 bg-light-gray/40 p-5 transition-all" radius={240}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-skill-green/15 text-skill-green">
                    <Phone size={19} />
                  </div>
                  <div>
                    <span className="block text-[12px] font-medium text-medium-gray">Call Our Admissions Desk</span>
                    <span className="text-[15px] font-semibold text-charcoal">{siteConfig.phonePlaceholder}</span>
                  </div>
                </div>
              </ChromaSpotlight>

              <ChromaSpotlight className="rounded-xl border border-black/8 bg-light-gray/40 p-5 transition-all" radius={240}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-skill-green/15 text-skill-green">
                    <MessageCircle size={19} />
                  </div>
                  <div>
                    <span className="block text-[12px] font-medium text-medium-gray">WhatsApp Instant Chat</span>
                    <a href={siteConfig.whatsappPlaceholder} className="text-[15px] font-semibold text-charcoal hover:text-skill-green transition-colors">
                      Message us on WhatsApp &rarr;
                    </a>
                  </div>
                </div>
              </ChromaSpotlight>

              <ChromaSpotlight className="rounded-xl border border-black/8 bg-light-gray/40 p-5 transition-all" radius={240}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-skill-green/15 text-skill-green">
                    <Mail size={19} />
                  </div>
                  <div>
                    <span className="block text-[12px] font-medium text-medium-gray">Official Email</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-[15px] font-semibold text-charcoal hover:text-skill-green transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </ChromaSpotlight>

              <ChromaSpotlight className="rounded-xl border border-black/8 bg-light-gray/40 p-5 transition-all" radius={240}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-skill-green/15 text-skill-green">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <span className="block text-[12px] font-medium text-medium-gray">Campus Address</span>
                    <span className="text-[14.5px] font-medium text-charcoal leading-relaxed">{siteConfig.addressPlaceholder}</span>
                  </div>
                </div>
              </ChromaSpotlight>
            </div>
          </div>

          {/* Enquiry Form Card */}
          <ChromaSpotlight
            className="rounded-2xl border border-black/8 bg-white p-7 sm:p-10 shadow-lg shadow-black/5"
            borderGlowColor="rgba(140, 198, 63, 0.9)"
            radius={380}
          >
            <span className="text-[11.5px] font-bold tracking-widest text-skill-green uppercase block mb-1">
              Online Registration
            </span>
            <h2 className="mb-2 text-[24px] font-bold text-charcoal">Send an admission enquiry</h2>
            <p className="mb-8 text-[14px] text-medium-gray">
              Fill in your details below and our counseling team will get back to you with the syllabus breakdown and fee structure.
            </p>
            <EnquiryForm />
          </ChromaSpotlight>

        </div>
      </section>
    </main>
  );
}
