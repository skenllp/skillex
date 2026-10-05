import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/content";
import Logo from "@/ui/Logo";

const links = navLinks.filter((l) => l.href !== "/");
const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1.4fr]">
          <div>
            <Logo onDark height={32} />
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`${label} (link to be added)`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-lime hover:text-lime"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[16px] text-white/75 transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="space-y-3 text-[16px] text-white/75">
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-lime" />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-lime">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-lime" />
              <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-lime">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-lime" />
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-snug hover:text-lime"
              >
                {siteConfig.address}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[14px] text-white/55 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Skillex. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-lime">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-lime">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
