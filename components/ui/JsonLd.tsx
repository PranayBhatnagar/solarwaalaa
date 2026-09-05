/** Renders a JSON-LD <script> tag. Input always comes from lib/structured-data.ts builders. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD requires a raw <script> body; data always comes from lib/structured-data.ts builders, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
