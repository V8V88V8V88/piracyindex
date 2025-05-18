import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      // Enable Turbopack compilation
      rules: {
        // Use glob pattern instead of file extension
        "*.md": ["mdx-loader"],
      },
    },
  },
};

export default nextConfig;
