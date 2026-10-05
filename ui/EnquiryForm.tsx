"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { courses, siteConfig } from "@/lib/content";

interface EnquiryFormProps {
  dark?: boolean;
  defaultCourse?: string;
}

/**
 * Sends each enquiry by email to siteConfig.email (skillexcampus@gmail.com)
 * through FormSubmit's AJAX endpoint. The very first submission triggers a
 * one-time activation email from FormSubmit to that inbox — click the
 * confirm link in it, and every later enquiry arrives normally.
 */
export default function EnquiryForm({ dark = false, defaultCourse }: EnquiryFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const courseTitle = courses.find((c) => c.slug === data.get("course"))?.title ?? "Not selected";

    setSubmitting(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          course: courseTitle,
          message: data.get("message") || "(none)",
          page: window.location.href,
          _subject: `New Skillex enquiry: ${courseTitle}`,
          _template: "table",
          _captcha: "false",
          _honey: data.get("_honey") || "",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) throw new Error("failed");
      router.push("/thank-you");
    } catch {
      setError(`Sorry, we couldn't send your enquiry. Please try again, or email ${siteConfig.email} or WhatsApp us.`);
      setSubmitting(false);
    }
  };

  const labelClass = `mb-1.5 block text-[15px] font-medium ${dark ? "text-white/80" : "text-navy"}`;
  const inputClass = `w-full rounded-xl border px-4 py-3 text-[16px] outline-none transition-colors focus:border-navy ${
    dark
      ? "border-white/20 bg-transparent text-white placeholder:text-white/40"
      : "border-line bg-white text-navy placeholder:text-grey/60"
  }`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
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

      {error && (
        <p role="alert" className={`text-[15px] ${dark ? "text-red-300" : "text-red-600"}`}>
          {error}
        </p>
      )}

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
