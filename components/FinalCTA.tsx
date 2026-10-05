import Link from "next/link";
import { siteConfig } from "@/lib/content";
import Reveal from "@/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-navy">
      <div className="container-x py-20 text-center md:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-[720px] text-[34px] font-extrabold leading-tight tracking-tight text-white md:text-[52px]">
            Ready to Build Your Next Skill?
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-relaxed text-white/70">
            Talk to our team and find the right program for your career goals.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/enquire" className="btn btn-primary">Enquire Now</Link>
            <a href={siteConfig.whatsappPlaceholder} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
