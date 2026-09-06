import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export - GitHub Pages serves plain HTML/CSS/JS, no Node.js server.
  output: "export",

  // Only relevant for a project-page URL (username.github.io/repo/); the
  // GitHub Actions workflow sets this via configure-pages, which resolves
  // to "" once a custom domain (CNAME) is attached, so this stays a no-op
  // once solarwaalaa.com is live.
  basePath: process.env.PAGES_BASE_PATH,

  images: {
    // Next's built-in Image Optimization API needs a server, which GitHub
    // Pages doesn't provide. Images are still served (as plain <img>s via
    // next/image), just without on-demand resizing/format conversion.
    unoptimized: true,
  },
};

export default nextConfig;
