import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/ui/ScrollProgress";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Replace with the production domain before deploying — used for canonical
// URLs, Open Graph, and the sitemap/robots files in this project.
const BASE_URL = "https://www.skillexcampus.example";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Skillex — Learn. Grow. Succeed.",
    template: "%s",
  },
  description:
    "Industry-focused training in Office Administration, Hospitality and Digital Marketing. Build skills. Build your future with Skillex.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Skillex — Learn. Grow. Succeed.",
    description:
      "Industry-focused training in Office Administration, Hospitality and Digital Marketing.",
    type: "website",
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
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
