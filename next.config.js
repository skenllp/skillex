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
      {
        source: "/courses/office-administration",
        destination: "/courses/office-administration-hr",
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
