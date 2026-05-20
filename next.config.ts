import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16: local `Image` src with query strings (e.g. ?v= for cache busting) must be allowed here.
    localPatterns: [
      { pathname: "/services-category-*" },
      { pathname: "/services-featured-*" },
      { pathname: "/services.jpg" },
    ],
  },
};

export default nextConfig;
