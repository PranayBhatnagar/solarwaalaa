type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

/**
 * Consistent section-heading pattern reused across the homepage and inner
 * pages. Exactly one <h1> should exist per page (spec section 12) — pass
 * `as="h1"` only on the page's single primary heading (the Hero).
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Heading = as;
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-deep">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink text-balance">
        {title}
      </Heading>
      {subtitle ? <p className="text-base sm:text-lg text-ink/70 text-pretty">{subtitle}</p> : null}
    </div>
  );
}
