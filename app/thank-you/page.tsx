import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — Skillex",
  description: "Your enquiry has been received.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-charcoal px-5 pt-[96px] text-center">
      <CheckCircle2 size={48} className="mb-6 text-skill-green" />
      <h1 className="max-w-[500px] text-[32px] font-bold leading-tight text-white md:text-[42px]">
        Thanks — your enquiry is in.
      </h1>
      <p className="mt-5 max-w-[440px] text-[15.5px] leading-relaxed text-white/70">
        A member of the Skillex team will get back to you shortly. In the meantime, feel
        free to keep exploring our courses.
      </p>
      <a
        href="/courses"
        className="mt-9 inline-flex min-h-[50px] items-center gap-2 bg-skill-green px-7 text-[15px] font-semibold text-charcoal transition-transform duration-300 hover:-translate-y-0.5"
      >
        Explore Courses <ArrowRight size={16} />
      </a>
    </main>
  );
}
