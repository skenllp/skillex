import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import PageHeader from "@/ui/PageHeader";
import FinalCTA from "@/components/FinalCTA";
import ImageSlot from "@/ui/ImageSlot";
import Reveal from "@/ui/Reveal";
import { insightArticles, insightCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights — Skillex",
  description:
    "Career guides and practical industry insights across Digital Marketing, Business Administration & Accounting, and Office Administration & HR.",
};

export default function InsightsPage() {
  return (
    <main>
      <PageHeader
        title="Knowledge & Career Guides"
        intro="Practical advice, workplace skills, and career preparation insights from trainers and industry mentors."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          {/* Categories Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-10">
            {insightCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-line bg-offwhite px-4 py-1.5 text-[13px] font-medium text-navy"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {insightArticles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70} className="h-full">
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex h-full flex-col justify-between rounded-card border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-lime hover:shadow-md"
                >
                  <div>
                    {/* Prepared Image Slot - hides gracefully if no photo exists */}
                    <ImageSlot
                      src={a.image}
                      alt={a.title}
                      label="Article Image"
                      fallbackMode="hide"
                      aspectRatio="aspect-[16/10]"
                      className="mb-5 w-full rounded-2xl"
                    />

                    <span className="mb-2 block text-[12px] font-bold uppercase tracking-wider text-lime-dark">
                      {a.category}
                    </span>
                    <h2 className="text-[20px] font-bold leading-snug text-navy group-hover:text-navy sm:text-[22px]">
                      {a.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-grey">{a.excerpt}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-line/70 pt-4 text-[14px] font-bold text-navy">
                    <span>Read Guide</span>
                    <ArrowRight
                      size={15}
                      className="text-lime-dark transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
