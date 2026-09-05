import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import { photoCredits } from "@/data/photo-credits";

export const metadata = buildMetadata({
  title: "Photo Credits",
  description: "Attribution for photography used on this website.",
  path: "/photo-credits",
});

export default function PhotoCreditsPage() {
  return (
    <Container className="py-16 sm:py-24 max-w-2xl flex flex-col gap-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-ink">Photo Credits</h1>
      <p className="text-ink/70 leading-relaxed">
        Real project photography is not yet available, so this site uses openly licensed photographs
        from Wikimedia Commons as placeholders until Solarwaala&apos;s own installation photos are
        ready. Attribution below.
      </p>
      <ul className="flex flex-col gap-5">
        {photoCredits.map((credit) => (
          <li key={credit.id} className="rounded-card border border-line bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">{credit.usedFor}</p>
            <p className="mt-1 font-medium text-ink">
              <a href={credit.source} className="text-deep underline" target="_blank" rel="noopener noreferrer">
                {credit.title}
              </a>
            </p>
            <p className="mt-1 text-sm text-ink/70">
              {credit.author} · {credit.license}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
