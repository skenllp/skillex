import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PhotoPlaceholder from "@/ui/PhotoPlaceholder";
import { insightArticles } from "@/lib/content";

export function generateStaticParams() {
  return insightArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = insightArticles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return { title: `${article.title} — Skillex Insights`, description: article.excerpt };
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = insightArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <main>
      <section className="w-full bg-white px-5 pb-10 pt-[160px] md:px-10 md:pt-[200px]">
        <div className="mx-auto max-w-[760px]">
          <span className="mb-4 block text-[12px] font-semibold tracking-[0.2em] text-skill-green">
            {article.category.toUpperCase()}
          </span>
          <h1 className="text-[32px] font-bold leading-tight text-charcoal md:text-[42px]">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="w-full bg-white px-5 pb-20 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <div className="relative mb-10 h-[320px] overflow-hidden md:h-[420px]">
            <PhotoPlaceholder label="Article hero image" className="h-full w-full" />
          </div>
          <p className="text-[16px] leading-relaxed text-charcoal">{article.excerpt}</p>
          <p className="mt-6 text-[14.5px] leading-relaxed text-medium-gray">
            Full article content — placeholder. Replace with real written content once
            supplied.
          </p>
        </div>
      </section>
    </main>
  );
}
