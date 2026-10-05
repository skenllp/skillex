"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import Logo from "@/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white">
        <div className="container-x flex h-[68px] items-center justify-between md:h-[76px]">
          <Link href="/" aria-label="Skillex home" className="flex items-center">
            <Logo height={30} />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative py-2 text-[15px] font-medium transition-colors hover:text-navy ${
                  isActive(l.href) ? "text-navy" : "text-grey"
                }`}
              >
                {l.label}
                {isActive(l.href) && <span className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded bg-lime" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/enquire" className="btn btn-primary hidden !min-h-[44px] !px-6 !text-[15px] sm:inline-flex">
              Enquire Now
            </Link>
            <button
              ref={menuBtn}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-[380px] flex-col bg-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[68px] items-center justify-between border-b border-line px-5">
            <Logo height={28} />
            <button
              ref={closeBtn}
              onClick={() => {
                setOpen(false);
                menuBtn.current?.focus();
              }}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full"
            >
              <X size={26} />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col px-5 pt-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                tabIndex={open ? 0 : -1}
                className={`border-b border-line py-4 text-[20px] font-semibold ${
                  isActive(l.href) ? "text-navy" : "text-navy/80"
                }`}
              >
                {l.label}
                {isActive(l.href) && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-lime" />}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-5">
            <Link href="/enquire" tabIndex={open ? 0 : -1} className="btn btn-primary w-full">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
