"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { courses } from "@/lib/content";

interface EnquiryFormProps {
  dark?: boolean;
  defaultCourse?: string;
}

/**
 * NOTE: This form is UI-only. Wire `handleSubmit` up to your form
 * backend / API route / CRM of choice before going live — it currently
 * just redirects to /thank-you.
 */
export default function EnquiryForm({ dark = false, defaultCourse }: EnquiryFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: replace with a real submission (API route / form service / CRM)
    setTimeout(() => {
      router.push("/thank-you");
    }, 400);
  };

  const labelClass = `mb-1.5 block text-[15px] font-medium ${dark ? "text-white/80" : "text-navy"}`;
  const inputClass = `w-full rounded-xl border px-4 py-3 text-[16px] outline-none transition-colors focus:border-navy ${
    dark
      ? "border-white/20 bg-transparent text-white placeholder:text-white/40"
      : "border-line bg-white text-navy placeholder:text-grey/60"
  }`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input id="name" name="name" required type="text" placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input id="phone" name="phone" required type="tel" placeholder="Your phone number" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" required type="email" placeholder="you@email.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="course" className={labelClass}>
          Course you&apos;re interested in
        </label>
        <select
          id="course"
          name="course"
          defaultValue={defaultCourse ?? ""}
          className={inputClass}
        >
          <option value="" disabled>
            Select a course
          </option>
          {courses.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us a little about what you're looking for"
          className={`${inputClass} sm:min-h-[70px]`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        aria-live="polite"
        className="btn btn-primary mt-1 w-full disabled:opacity-70 sm:w-auto"
      >
        {submitting ? "Sending..." : "Enquire Now"}
      </button>
    </form>
  );
}
