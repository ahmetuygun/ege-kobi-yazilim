import type { NextConfig } from "next";

import { SITE_FAVICON_REDIRECT_DESTINATION } from "./lib/site-assets";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    localPatterns: [{ pathname: "/images/**" }],
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: SITE_FAVICON_REDIRECT_DESTINATION,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
