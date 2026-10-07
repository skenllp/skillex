import type { MetadataRoute } from "next";
import { courses, insightArticles, testimonials } from "@/lib/content";
import { BASE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/courses",
    "/campus",
    "/about",
    "/insights",
    "/contact",
    "/enquire",
    "/privacy-policy",
    "/terms",
  ];

  if (testimonials.length > 0) staticRoutes.push("/student-stories");
  const courseRoutes = courses.map((c) => `/courses/${c.slug}`);
  const insightRoutes = insightArticles.map((a) => `/insights/${a.slug}`);

  return [...staticRoutes, ...courseRoutes, ...insightRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
