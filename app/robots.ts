import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

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
