import { siteConfig } from "@/data/config";

/**
 * JSON-LD builders (spec section 13): "Use Organization / LocalBusiness /
 * Service structured data - only for facts that are true and supplied."
 * Every field here is either a static, verifiable fact (name, city, state,
 * URL) or pulled from data/config.ts, and null contact fields are omitted
 * rather than filled with placeholders.
 */
export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo/solarwaala-logo.png`,
    telephone: siteConfig.contact.phone || undefined,
    email: siteConfig.contact.email || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: siteConfig.state,
    },
  };
}

export type Breadcrumb = { name: string; path: string };

export function buildBreadcrumbJsonLd(crumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };
}
