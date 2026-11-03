import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { BASE_URL } from "@/lib/site";
import { insightArticles } from "@/lib/content";

export function generateStaticParams() {
  return insightArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = insightArticles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — Skillex Insights`,
    description: article.excerpt,
    openGraph: { type: "article", title: article.title, description: article.excerpt, images: [article.image] },
  };
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = insightArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: `${BASE_URL}${article.image}`,
            author: { "@type": "Organization", name: "Skillex" },
            publisher: { "@type": "Organization", name: "Skillex" },
          }),
        }}
      />
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
            <Image src={article.image} alt={article.title} fill priority sizes="760px" className="object-cover" />
          </div>
          <p className="text-[17px] leading-relaxed text-charcoal">{article.excerpt}</p>
          {article.body.map((sec) => (
            <section key={sec.heading} className="mt-8">
              <h2 className="mb-2 text-[22px] font-bold text-navy">{sec.heading}</h2>
              <p className="text-[16px] leading-relaxed text-charcoal">{sec.text}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
