import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * Shared max-width content wrapper. Mobile-first horizontal padding per
 * spec section 8 (Responsive Rules).
 */
export function Container({ as: As = "div", className = "", children }: ContainerProps) {
  return (
    <As className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </As>
  );
}
