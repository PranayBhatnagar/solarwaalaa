# Solarwaala

Marketing/lead-generation website for **Solarwaala**, a Lucknow-based solar plant
installation company serving customers across Uttar Pradesh.

Built with Next.js (App Router) + TypeScript + Tailwind CSS, implemented against a
full product/UX/content specification: homepage sections (hero, solutions, process,
qualification estimator, UP coverage map, project showcase, trust/evidence, FAQ,
final CTA), dedicated pages for each solution segment, `/how-it-works`, `/projects`,
`/about`, `/contact`, `/privacy`, `/terms`, plus SEO metadata/structured data,
accessibility, and performance work throughout.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project conventions

- `data/config.ts` — central business-facts config (phone/email/social/feature flags).
  Flip `flags.hasProjects` / `hasTestimonials` once real, verified data exists in
  `data/projects.ts` / `data/testimonials.ts` — those sections stay hidden until then.
- `data/` — typed content (solutions, projects, testimonials, FAQ, service locations).
- `features/` — page sections, one folder per feature.
- `components/ui/` — shared primitives (Button, Accordion, ModalDrawer, etc.).
- `lib/analytics.ts` / `lib/leads.ts` — typed abstractions ready to wire to a real
  analytics provider / CRM without touching call sites.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
