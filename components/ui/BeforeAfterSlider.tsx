"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

/**
 * Roof-before / system-after comparison slider (spec section 6): "for real
 * projects only". Keyboard accessible via a native range input — arrow
 * keys move the reveal point, no drag-only interaction.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-card ${className}`}>
      <Image src={beforeSrc} alt={beforeAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ width: `${100 / (position / 100) || 0}%`, maxWidth: "none" }}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${position}%` }}
      />
      <label className="sr-only" htmlFor="before-after-range">
        Slide to compare before and after
      </label>
      <input
        id="before-after-range"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-0 bottom-3 mx-auto w-[calc(100%-2rem)] accent-action"
      />
    </div>
  );
}
