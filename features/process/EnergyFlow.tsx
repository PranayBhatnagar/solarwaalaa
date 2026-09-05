"use client";

import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const NODES = [
  { key: "sun", label: "Sun", x: 60, icon: "☀️" },
  { key: "panels", label: "Panels", x: 220, icon: "🔲" },
  { key: "inverter", label: "Inverter", x: 380, icon: "🔁" },
  { key: "property", label: "Home / Business", x: 560, icon: "🏠" },
  { key: "grid", label: "Grid", x: 740, icon: "🔌" },
];

/**
 * Energy Flow Visualization (spec section 6): Sun → Panels → Inverter →
 * Home/Business → Grid. Nodes/labels are always static HTML; only the
 * traveling pulse along the connecting line animates. That pulse uses SVG
 * SMIL (`<animateMotion>`), which CSS `prefers-reduced-motion` overrides
 * can't reach, so it's explicitly gated on `useReducedMotion()` here rather
 * than relying on the global CSS override (spec section 12).
 */
export function EnergyFlow() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="overflow-x-auto">
      <svg viewBox="0 0 800 160" className="w-full min-w-[640px] h-auto" role="img" aria-label="Diagram: energy flows from the sun through solar panels and an inverter to power your home or business, with any surplus exported to the grid.">
        <line x1="60" y1="80" x2="740" y2="80" stroke="#E8EEF5" strokeWidth="4" />
        {inView && !reduced ? (
          <circle r="6" className="fill-lime">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M60,80 L740,80" />
          </circle>
        ) : null}

        {NODES.map((node) => (
          <g key={node.key}>
            <circle cx={node.x} cy={80} r={28} className="fill-white stroke-action" strokeWidth="2" />
            <text x={node.x} y={87} textAnchor="middle" fontSize="20">
              {node.icon}
            </text>
            <text x={node.x} y={128} textAnchor="middle" fontSize="13" className="fill-ink font-medium">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
