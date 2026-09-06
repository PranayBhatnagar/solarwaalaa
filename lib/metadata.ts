import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

/**
 * Per-page metadata helper (spec section 13). Next's Metadata API doesn't
 * auto-derive `openGraph`/`twitter` from a page's plain `title`/
 * `description` - without this, every inner page would show the homepage's
 * OG/Twitter preview text. This keeps each page's social-preview in sync
 * with its actual title/description with one call.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
}
