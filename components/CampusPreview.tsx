import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/ui/ImagePlaceholder";
import Reveal from "@/ui/Reveal";

export default function CampusPreview() {
  return (
    <section className="section-y bg-offwhite">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-navy md:text-[48px]">A Better Place to Learn.</h2>
          <p className="mt-5 max-w-[460px] text-[18px] leading-relaxed text-grey">
            An environment built for focused learning, practical training and career development.
          </p>
          <Link href="/campus" className="btn btn-secondary group mt-8">
            Explore Campus
            <ArrowRight size={18} className="text-lime-dark transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
        {/* Swap in a real campus photo: <ImagePlaceholder src="/assets/campus.jpg" ... /> */}
        <ImagePlaceholder src={null} alt="SKILLEX campus (photo to be added)" label="Campus photo coming soon" className="aspect-[4/3] w-full" />
      </div>
    </section>
  );
}
