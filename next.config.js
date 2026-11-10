/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Preserve old course URLs after the 2026 course-lineup update so no
  // external links or bookmarks break. Update/remove if those routes are
  // retired entirely in the future.
  async redirects() {
    return [
      // Old website (booking/shop platform) URLs that Google still has on record.
      { source: "/shop/:path*", destination: "/courses", permanent: true },
      { source: "/m/:path*", destination: "/", permanent: true },
      // Sales Management & HR was replaced by the Professional Diploma in Accounting & Taxation.
      {
        source: "/courses/office-administration-hr",
        destination: "/courses/professional-diploma-accounting-taxation",
        permanent: true,
      },
      {
        source: "/courses/office-administration",
        destination: "/courses/business-administration-accounting",
        permanent: true,
      },
      {
        source: "/courses/hospitality",
        destination: "/courses/business-administration-accounting",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
