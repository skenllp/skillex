import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { insightArticles, insightCategories } from "@/lib/content";
import ChromaGrid from "@/ui/ChromaGrid";
import ChromaSpotlight from "@/ui/ChromaSpotlight";

export const metadata: Metadata = {
  title: "Insights — Skillex",
  description: "Career guides and industry insights across Digital Marketing, Business Administration & Accounting, and Office Administration & HR.",
};

export default function InsightsPage() {
  return (
    <main>
      {/* 1. Cinematic Hero Section with High-Res Strategy & Workplace Photography */}
      <section className="relative flex min-h-[55vh] w-full items-end overflow-hidden bg-black pt-[150px] pb-16 md:pt-[190px] md:pb-24">
        {/* Real Workplace Analytics Photo */}
        <div className="absolute inset-0">
          <Image
            src="/assets/insights-hero.jpg"
            alt="Skillex Industry Insights & Career Intelligence"
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
              Knowledge &amp; Career Guides
            </span>
          </div>

          <h1 className="max-w-[720px] text-[36px] font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-[46px] md:text-[54px]">
            Learn. Grow. Stay ahead.
          </h1>

          <p className="mt-4 max-w-[580px] text-[16px] leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] sm:text-[17.5px]">
            Practical advice, hiring trends, interview strategies, and tool breakdowns from corporate recruiters and senior trainers.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {insightCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/25 bg-black/40 px-4 py-1.5 text-[12.5px] font-medium text-white backdrop-blur-md"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Article Grid with Chroma Spotlight Border Glow */}
      <section className="w-full bg-white px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insightArticles.map((a) => (
            <ChromaSpotlight
              key={a.slug}
              className="flex h-full flex-col justify-between rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-skill-green/10"
              borderGlowColor="rgba(140, 198, 63, 0.9)"
              radius={300}
            >
              <a href={`/insights/${a.slug}`} className="group flex h-full flex-col justify-between">
                <div>
                  <div className="relative mb-5 h-[190px] overflow-hidden rounded-xl bg-light-gray">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="mb-2 block text-[11.5px] font-bold tracking-wider text-skill-green uppercase">
                    {a.category}
                  </span>
                  <h2 className="mb-2 text-[19px] font-bold leading-snug text-charcoal group-hover:text-skill-green transition-colors">
                    {a.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed text-medium-gray">{a.excerpt}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/6 flex items-center gap-2 text-[13.5px] font-semibold text-charcoal group-hover:text-skill-green transition-colors">
                  Read Article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-skill-green" />
                </div>
              </a>
            </ChromaSpotlight>
          ))}
        </div>
      </section>
    </main>
  );
}
