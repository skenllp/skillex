import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BASE_URL } from "@/lib/site";
import { siteConfig } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Skillex — Learn Skills. Build Your Career.",
    template: "%s",
  },
  description:
    "Practical, career-focused programs in Office Administration & Accounting, Sales Management & HR, and AI-Integrated Digital Marketing.",
  alternates: { canonical: "./" },
  twitter: { card: "summary_large_image" },
  openGraph: {
    images: [{ url: "/assets/hero-poster.jpg", alt: "Skillex — Learn Skills. Build Your Career." }],
    locale: "en_IN",
    title: "Skillex — Learn Skills. Build Your Career.",
    description:
      "Practical, career-focused programs designed to turn learning into real-world skills.",
    type: "website",
    url: BASE_URL,
    siteName: "Skillex",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: BASE_URL,
  logo: `${BASE_URL}/assets/skillex-logo.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Panayathil Complex, opposite bus stand, Ullanam",
    addressLocality: "Parappanangadi",
    addressRegion: "Kerala",
    postalCode: "676303",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-5 focus:py-3 focus:font-semibold focus:text-navy">Skip to content</a>
        <Navbar />
        <div id="main">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
