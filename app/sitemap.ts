import type { MetadataRoute } from "next";
import { courses, insightArticles } from "@/lib/content";

// Replace with the production domain before deploying.
const BASE_URL = "https://www.skillexcampus.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/courses",
    "/campus",
    "/about",
    "/student-stories",
    "/insights",
    "/contact",
    "/enquire",
    "/privacy-policy",
    "/terms",
  ];

  const courseRoutes = courses.map((c) => `/courses/${c.slug}`);
  const insightRoutes = insightArticles.map((a) => `/insights/${a.slug}`);

  return [...staticRoutes, ...courseRoutes, ...insightRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
