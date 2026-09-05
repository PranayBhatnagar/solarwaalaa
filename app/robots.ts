import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

// Required for `output: "export"` (GitHub Pages hosting) — this route has
// no request-dependent data, so it's safe to force static generation.
export const dynamic = "force-static";

/** Next.js metadata route — generates /robots.txt (spec section 13). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
