import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/memberships", destination: "/packages", permanent: true },
      { source: "/memberships/:package", destination: "/packages/:package", permanent: true },
    ];
  },
  images: {
    // Next.js 16: local `Image` src with query strings (e.g. ?v= for cache busting) must be allowed here.
    localPatterns: [
      { pathname: "/services-category-*" },
      { pathname: "/services-featured-*" },
      { pathname: "/services.jpg" },
      { pathname: "/membership-package-*" },
    ],
  },
};

export default nextConfig;
