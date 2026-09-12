import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found — Skillex",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-charcoal px-5 pt-[96px] text-center">
      <span className="mb-4 text-[13px] font-semibold tracking-[0.2em] text-skill-green">
        404
      </span>
      <h1 className="max-w-[480px] text-[32px] font-bold leading-tight text-white md:text-[42px]">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-5 max-w-[420px] text-[15.5px] leading-relaxed text-white/70">
        The page you&apos;re looking for may have moved or been removed. Let&apos;s get
        you back on track.
      </p>
      <a
        href="/"
        className="mt-9 inline-flex min-h-[50px] items-center gap-2 bg-skill-green px-7 text-[15px] font-semibold text-charcoal transition-transform duration-300 hover:-translate-y-0.5"
      >
        Back to Home <ArrowRight size={16} />
      </a>
    </main>
  );
}
