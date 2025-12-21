import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. External package handling for PDF parsing
  serverExternalPackages: ["pdf-parse"],

  // 2. Add empty turbopack config to silence the Next.js 16 error
  turbopack: {},

  // 3. Keep webpack config for legacy compatibility/fallback
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;