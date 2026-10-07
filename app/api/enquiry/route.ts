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

/**
 * Basic anti-spam: per-IP rate limit (in-memory, resets when the serverless
 * instance restarts, so it is a speed bump rather than a hard guarantee).
 * For stronger protection add Cloudflare Turnstile.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
}

const countLinks = (text: string) => (text.match(/https?:\/\/|www\./gi) ?? []).length;

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, code: "RATE_LIMIT", message: "Too many enquiries from your network. Please try again in a few minutes or contact us on WhatsApp." },
      { status: 429 }
    );
  }

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

  // Drop link-stuffed submissions (typical spam). Pretend success so bots don't retry.
  if (countLinks(message) > 1 || countLinks(name) > 0) return NextResponse.json({ ok: true });

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
          // skillex.in is verified in Resend. Override with RESEND_FROM if you prefer another address.
          from: process.env.RESEND_FROM || "Skillex Website <enquiries@skillex.in>",
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
