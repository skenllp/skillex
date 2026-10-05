import { ReactNode } from "react";

/** Simple typographic page intro used by inner pages — no photo hero. */
export default function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-offwhite">
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-1/3 opacity-60 md:block [mask-image:linear-gradient(to_left,black,transparent)]" style={{ backgroundImage: "radial-gradient(#D5D9CB 1.2px, transparent 1.2px)", backgroundSize: "28px 28px" }} />
      <div className="container-x relative py-14 md:py-20">
        <h1 className="max-w-[760px] text-[40px] font-extrabold leading-[1.08] tracking-tight text-navy md:text-[60px]">{title}</h1>
        {intro && <p className="mt-5 max-w-[560px] text-[18px] leading-relaxed text-grey">{intro}</p>}
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
