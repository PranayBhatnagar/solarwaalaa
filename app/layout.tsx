import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildLocalBusinessJsonLd } from "@/lib/structured-data";
import { QuoteDrawerProvider } from "@/features/lead-form/QuoteDrawerContext";

// Code-split: the drawer renders nothing until a visitor opens it, but it's
// mounted on every route from the root layout — split it into its own
// chunk rather than shipping it as part of every page's initial JS.
const QuoteDrawer = dynamic(() => import("@/features/lead-form/QuoteDrawer").then((m) => m.QuoteDrawer));

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const defaultTitle = `${siteConfig.name} | Solar Plant Installation in Uttar Pradesh`;
const defaultDescription =
  "Solarwaala is a Lucknow-based solar plant installation company serving homes and businesses across Uttar Pradesh. Request a site assessment and solar consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    url: siteConfig.url,
    locale: "en_IN",
    images: [{ url: "/logo/solarwaala-logo.png", width: 1200, height: 412, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo/solarwaala-logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <QuoteDrawerProvider>
          <a
            href="#main-content"
            className="sr-only-focusable fixed top-2 left-2 z-50 rounded-control bg-deep px-4 py-2 text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
          <StickyMobileCta />
          <QuoteDrawer />
        </QuoteDrawerProvider>
      </body>
    </html>
  );
}
