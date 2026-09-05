import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

// Required for `output: "export"` (GitHub Pages hosting) — this route has
// no request-dependent data, so it's safe to force static generation.
export const dynamic = "force-static";

/**
 * Next.js metadata route — generates /sitemap.xml (spec section 13).
 * Static routes only; add dynamic project/blog URLs here once those
 * data sources exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/solutions",
    "/solutions/residential-solar",
    "/solutions/commercial-solar",
    "/solutions/industrial-solar",
    "/solutions/institutional-solar",
    "/financing",
    "/how-it-works",
    "/projects",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/photo-credits",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
