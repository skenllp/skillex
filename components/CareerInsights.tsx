import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PhotoPlaceholder from "@/ui/PhotoPlaceholder";
import Reveal from "@/ui/Reveal";
import { insightArticles } from "@/lib/content";

export default function CareerInsights() {
  return (
    <section className="w-full bg-light-gray px-5 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] text-skill-green">
              <span className="inline-block h-[2px] w-[18px] bg-skill-green" />
              CAREER INSIGHTS
            </p>
            <h2 className="max-w-[520px] text-[32px] font-bold leading-tight text-charcoal md:text-[42px]">
              Learn. Grow. Stay ahead.
            </h2>
          </div>
          <a
            href="/insights"
            className="group hidden items-center gap-2 text-[14.5px] font-semibold text-charcoal md:inline-flex"
          >
            View All Insights
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {insightArticles.map((a) => {
            return (
              <a key={a.slug} href={`/insights/${a.slug}`} className="group flex flex-col justify-between rounded-xl bg-white p-4 shadow-sm border border-black/6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-skill-green/40">
                <div>
                  <div className="relative mb-4 h-[170px] overflow-hidden rounded-lg bg-charcoal">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-[64%_36%] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                  </div>
                  <span className="mb-2 block text-[11.5px] font-bold tracking-wide text-skill-green uppercase">
                    {a.category}
                  </span>
                  <h3 className="mb-2 text-[16px] font-bold leading-snug text-charcoal transition-colors duration-300 group-hover:text-skill-green">
                    {a.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-medium-gray line-clamp-2">
                    {a.excerpt}
                  </p>
                </div>
                <span className="mt-4 pt-3 border-t border-black/6 flex items-center gap-1.5 text-[12.5px] font-semibold text-charcoal group-hover:text-skill-green transition-colors">
                  Read Full Article &rarr;
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
