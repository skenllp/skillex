import { testimonials } from "@/lib/content";
import Reveal from "@/ui/Reveal";

/** Renders only genuine testimonials from lib/content.ts. Hidden while that list is empty. */
export default function StudentStories() {
  const items = testimonials.slice(0, 3);
  if (items.length === 0) return null;
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Reveal>
          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-navy md:text-[48px]">Student Experiences</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-card border border-line p-7">
              <blockquote className="text-[17px] leading-relaxed text-navy">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6">
                <span className="block text-[16px] font-bold text-navy">{t.name}</span>
                <span className="block text-[14px] text-grey">{t.course}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
