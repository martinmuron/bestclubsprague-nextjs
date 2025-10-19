import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Temporary workaround for image optimization bug
  },
};

export default nextConfig;
