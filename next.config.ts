import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep development and production manifests isolated. Running `next build`
  // while a local preview is open must not invalidate the dev server's RSC
  // client manifest.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  output: "standalone",
  serverExternalPackages: ["@sparticuz/chromium"],
  outputFileTracingIncludes: {
    "/api/pdf": ["./node_modules/@sparticuz/chromium/bin/**"],
  },
};

export default nextConfig;
