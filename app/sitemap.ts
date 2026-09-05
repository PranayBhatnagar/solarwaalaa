import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

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
    "/how-it-works",
    "/projects",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
