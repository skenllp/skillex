import Link from "next/link";
import { ArrowRight, Calculator, Megaphone, Users } from "lucide-react";
import { courses } from "@/lib/content";
import Reveal from "@/ui/Reveal";

const icons: Record<string, typeof Calculator> = {
  "business-administration-accounting": Calculator,
  "office-administration-hr": Users,
  "digital-marketing": Megaphone,
};

export default function CourseSection({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="courses" className="section-y bg-white">
      <div className="container-x">
        {!hideHeading && (
          <Reveal>
            <h2 className="max-w-[640px] text-[34px] font-extrabold leading-tight tracking-tight text-navy md:text-[48px]">
              Find the Course for You
            </h2>
            <p className="mt-4 max-w-[520px] text-[18px] leading-relaxed text-grey">
              Choose a practical program based on the career you want to build.
            </p>
          </Reveal>
        )}

        <div className={`${hideHeading ? "" : "mt-12 "}grid gap-5 md:grid-cols-3`}>
          {courses.map((c, i) => {
            const Icon = icons[c.slug] ?? Calculator;
            const duration = "duration" in c ? c.duration : null;
            return (
              <Reveal key={c.slug} delay={i * 70} className="h-full">
                <Link
                  href={`/courses/${c.slug}`}
                  className="group flex h-full min-h-[300px] flex-col rounded-card border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-lime md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-lime-dark">{c.n}</span>
                    <Icon size={26} strokeWidth={1.5} className="text-navy" />
                  </div>
                  <h3 className="mt-8 text-[24px] font-bold leading-snug text-navy">{c.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-grey">{c.short}</p>
                  {duration && <p className="mt-4 text-[14px] font-medium text-navy">{duration}</p>}
                  <span className="mt-auto flex items-center gap-2 pt-8 text-[16px] font-semibold text-navy">
                    View Course
                    <ArrowRight size={18} className="text-lime-dark transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
