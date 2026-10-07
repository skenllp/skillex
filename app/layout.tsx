import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BASE_URL } from "@/lib/site";
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
  openGraph: {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-5 focus:py-3 focus:font-semibold focus:text-navy">Skip to content</a>
        <Navbar />
        <div id="main">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
