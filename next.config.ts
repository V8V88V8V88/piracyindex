import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Turbopack configuration (now stable)
    rules: {
      // Use glob pattern instead of file extension
      "*.md": ["mdx-loader"],
    },
  },
};

export default nextConfig;
