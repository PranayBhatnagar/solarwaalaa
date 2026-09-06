import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-control font-semibold transition-colors duration-200 " +
  "min-h-[44px] focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

// Action Blue (#0D8BFF) reads beautifully as an accent but only hits ~3.4:1
// against white - short of WCAG AA's 4.5:1 for normal-size text/button fills
// (confirmed by Lighthouse). Deep Solar Blue (#0A4FB3) is the same brand
// family at ~7.5:1, so it's used wherever brand-blue carries text/fill
// contrast; Action Blue stays for hover states, borders, and decorative use.
const variants: Record<Variant, string> = {
  primary: "bg-deep text-white hover:bg-deep/90 active:bg-deep/80",
  secondary: "bg-white text-ink border border-line hover:border-action hover:text-action",
  ghost: "bg-transparent text-ink hover:text-action",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Shared CTA control - renders a <button> or, when given `href`, a Next <Link>. */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...rest
}: ButtonAsButton | ButtonAsLink) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
