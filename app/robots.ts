import type { MetadataRoute } from "next";

const BASE_URL = "https://www.skillexcampus.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
