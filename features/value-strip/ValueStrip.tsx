import { Sun, Wrench, Leaf, MapPinned } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Value Strip (spec 5.3): four compact benefits with a simple icon + 1-2
 * lines. Titles are bold text, not headings — this strip sits directly
 * after the Hero's H1 with no H2 in between, so giving it heading elements
 * would skip a level (spec section 12: logical heading hierarchy).
 */
const ITEMS = [
  { icon: Sun, title: "Solar Solutions", body: "Systems designed around your property and usage." },
  { icon: Wrench, title: "Professional Installation", body: "Site assessment through to commissioning." },
  { icon: Leaf, title: "Clean Energy", body: "Generate your own power, cut grid dependence." },
  { icon: MapPinned, title: "Across Uttar Pradesh", body: "Lucknow-based, serving the whole state." },
];

export function ValueStrip() {
  return (
    <section className="border-y border-line bg-cloud">
      <Container className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-10 sm:py-12">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-action shadow-sm ring-1 ring-line"
            >
              <item.icon size={20} strokeWidth={2} />
            </span>
            <p className="font-semibold text-ink">{item.title}</p>
            <p className="text-sm text-ink/70">{item.body}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
