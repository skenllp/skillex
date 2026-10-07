import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { courses, siteConfig } from "@/lib/content";

export const runtime = "nodejs";

/**
 * Receives enquiries from <EnquiryForm /> and emails them to siteConfig.email.
 *
 * Option A (simplest, no Google security setup): set RESEND_API_KEY (from resend.com,
 *   signed up with the same address as siteConfig.email).
 * Option B: Gmail SMTP — set these environment variables on your host
 *   SMTP_USER = skillexcampus@gmail.com
 *   SMTP_PASS = a Gmail "App Password" (Google Account > Security > 2-Step Verification > App passwords)
 * Fallback if they are not set: the enquiry is forwarded to FormSubmit (needs one-time activation).
 */

const clean = (v: unknown, max = 500) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field. Pretend success and drop it.
  if (clean(body._honey)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const message = String(body.message ?? "").trim().slice(0, 2000) || "(none)";
  const courseTitle = courses.find((c) => c.slug === body.course)?.title ?? "Not selected";
  const page = clean(body.page, 300);

  if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, message: "Please enter your name, phone number and a valid email." }, { status: 400 });
  }

  const subject = `New Skillex enquiry: ${courseTitle}`;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const resendKey = process.env.RESEND_API_KEY;

  try {
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Skillex Website <onboarding@resend.dev>",
          to: [siteConfig.email],
          reply_to: `${name} <${email}>`,
          subject,
          text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCourse: ${courseTitle}\n\nMessage:\n${message}\n\nSent from: ${page}`,
        }),
      });
      if (res.ok) return NextResponse.json({ ok: true });
      const detail = await res.text().catch(() => "");
      console.error("Resend failed:", res.status, detail);
      return NextResponse.json({ ok: false, code: `RESEND_${res.status}`, message: "We couldn't send your enquiry right now." }, { status: 502 });
    }

    if (user && pass) {
      const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
      await transporter.sendMail({
        from: `"Skillex Website" <${user}>`,
        to: siteConfig.email,
        replyTo: `${name} <${email}>`,
        subject,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCourse: ${courseTitle}\n\nMessage:\n${message}\n\nSent from: ${page}`,
      });
      return NextResponse.json({ ok: true });
    }

    // Fallback: forward to FormSubmit from the server
    const res = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, phone, email, course: courseTitle, message, page, _subject: subject, _template: "table", _captcha: "false" }),
    });
    const json = await res.json().catch(() => ({} as Record<string, unknown>));
    if (res.ok && (json.success === true || json.success === "true")) return NextResponse.json({ ok: true });
    const hint = typeof json.message === "string" ? json.message : "";
    console.error("FormSubmit failed:", res.status, hint);
    return NextResponse.json(
      {
        ok: false,
        code: "SMTP_NOT_SET",
        message: /activat/i.test(hint)
          ? "Email service needs one-time activation. Check skillexcampus@gmail.com (and spam) for the FormSubmit activation email, click the link, then submit again."
          : "We couldn't send your enquiry right now.",
      },
      { status: 502 }
    );
  } catch (err) {
    console.error("Enquiry email failed:", err);
    const e = err as { code?: string; responseCode?: number };
    const code = e.code === "EAUTH" || e.responseCode === 535 ? "SMTP_AUTH" : `SMTP_${e.code || "ERROR"}`;
    return NextResponse.json({ ok: false, code, message: "We couldn't send your enquiry right now." }, { status: 502 });
  }
}
