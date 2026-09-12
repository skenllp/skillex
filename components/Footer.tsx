import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { courses, navLinks, siteConfig } from "@/lib/content";
import Logo from "@/ui/Logo";

const quickLinks = navLinks.filter((l) => l.label !== "Contact").concat({ label: "Contact", href: "/contact" });

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal px-5 pb-8 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo onDark height={32} />
            <p className="mt-5 max-w-[220px] text-[13.5px] leading-relaxed text-white/55">
              Skills create opportunities. We help you take the next step.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link — placeholder"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-skill-green hover:text-skill-green"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[13px] font-semibold tracking-wide text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[14px] text-white/60 transition-colors hover:text-skill-green">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/student-stories" className="text-[14px] text-white/60 transition-colors hover:text-skill-green">
                  Student Stories
                </a>
              </li>
              <li>
                <a href="/insights" className="text-[14px] text-white/60 transition-colors hover:text-skill-green">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[13px] font-semibold tracking-wide text-white">Our Courses</h4>
            <ul className="flex flex-col gap-3">
              {courses.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`/courses/${c.slug}`}
                    className="text-[14px] text-white/60 transition-colors hover:text-skill-green"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[13px] font-semibold tracking-wide text-white">Get in Touch</h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-center gap-2.5 text-[14px] text-white/60">
                <Mail size={15} className="shrink-0 text-skill-green" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-skill-green">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-white/60">
                <Phone size={15} className="shrink-0 text-skill-green" />
                <span>{siteConfig.phonePlaceholder}</span>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] text-white/60">
                <MapPin size={15} className="mt-0.5 shrink-0 text-skill-green" />
                <span>{siteConfig.addressPlaceholder}</span>
              </li>
            </ul>
            <a
              href="/enquire"
              className="mt-6 inline-flex items-center gap-2 bg-skill-green px-5 py-2.5 text-[13.5px] font-semibold text-charcoal"
            >
              Enquire Now
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-[12.5px] text-white/45 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Skillex. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="hover:text-skill-green">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-skill-green">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
