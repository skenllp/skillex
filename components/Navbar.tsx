"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import Logo from "@/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const SCROLL_DELTA = 10; // Hysteresis threshold to prevent trackpad flutter

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalDocHeight > 0 ? (currentScrollY / totalDocHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));

      setScrolled(currentScrollY > 30);

      // Smart hide / show detection
      const diff = currentScrollY - lastScrollY;

      if (currentScrollY <= 30) {
        // At the very top, always show
        setHidden(false);
      } else if (diff > SCROLL_DELTA && currentScrollY > 80) {
        // Scrolling down -> hide navbar
        setHidden(true);
      } else if (diff < -SCROLL_DELTA) {
        // Scrolling back up -> reveal navbar
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // All pages have rich dark hero imagery, so when at top, use crisp white branding
  const dark = !scrolled;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden && !drawerOpen
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100 pointer-events-auto"
        }`}
        style={{
          background: scrolled
            ? "rgba(255, 255, 255, 0.92)"
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.45) 55%, transparent 100%)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(4px)",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(4px)",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: scrolled ? "0 8px 30px -4px rgba(0, 0, 0, 0.08)" : "none",
        }}
      >
        <div className="mx-auto flex h-[76px] max-w-container items-center justify-between px-5 md:px-10">
          {/* Logo with drop shadow for guaranteed readability */}
          <a href="/" className="flex select-none items-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            <Logo onDark={dark} height={30} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group relative text-[14.5px] font-medium transition-colors duration-300 ${
                    isActive ? "font-semibold" : ""
                  }`}
                  style={{
                    color: dark
                      ? isActive
                        ? "#8cc63f"
                        : "rgba(255, 255, 255, 0.95)"
                      : isActive
                      ? "#8cc63f"
                      : "#1A1A1A",
                    textShadow: dark ? "0 1px 6px rgba(0, 0, 0, 0.85)" : "none",
                  }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-skill-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right side CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/enquire"
              className="btn-sweep hidden items-center gap-2 border border-skill-green bg-skill-green px-6 py-2.5 text-[14px] font-semibold text-charcoal shadow-md transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Enquire Now <ArrowRight size={15} />
              </span>
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 lg:hidden drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
              aria-label="Open menu"
            >
              <Menu size={26} color={dark ? "#FFFFFF" : "#1A1A1A"} />
            </button>
          </div>
        </div>

        {/* Dynamic Chromatic Reading Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2.5px] w-full bg-transparent overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-skill-green via-[#00f2fe] to-skill-green transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div
          className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-[360px] flex-col bg-charcoal border-l border-white/10 transition-transform duration-500 ease-out ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[76px] items-center justify-between px-6 border-b border-white/10">
            <Logo onDark height={26} />
            <button onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <X size={26} color="#FFFFFF" />
            </button>
          </div>
          <nav className="mt-6 flex flex-col px-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`border-b border-white/5 py-3.5 text-[18px] transition-colors ${
                    isActive ? "font-bold text-skill-green" : "font-medium text-white/90 hover:text-skill-green"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="mb-10 mt-auto px-6">
            <a
              href="/enquire"
              className="flex w-full items-center justify-center gap-2 bg-skill-green py-3.5 text-[15px] font-semibold text-charcoal shadow-lg shadow-skill-green/20"
            >
              Enquire Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
