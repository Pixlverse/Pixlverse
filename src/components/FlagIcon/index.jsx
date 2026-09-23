import React from "react";

/*
 * Flags drawn to fill a 40x40 box ("cover" framing, the way circular flag sets
 * do it) because every one of these is rendered inside a round mask. They are
 * decorative: the country names are always present as real text beside them.
 */

const India = (
  <>
    <rect width="40" height="13.34" fill="#FF9933" />
    <rect y="13.33" width="40" height="13.34" fill="#FFFFFF" />
    <rect y="26.66" width="40" height="13.34" fill="#138808" />
    <g stroke="#000080" strokeWidth="0.7" fill="none">
      <circle cx="20" cy="20" r="5" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <line
            key={i}
            x1={20 + Math.cos(a) * 1.4}
            y1={20 + Math.sin(a) * 1.4}
            x2={20 + Math.cos(a) * 5}
            y2={20 + Math.sin(a) * 5}
          />
        );
      })}
    </g>
    <circle cx="20" cy="20" r="1.3" fill="#000080" />
  </>
);

const UK = (
  <>
    <rect width="40" height="40" fill="#012169" />
    {/* white saltire, then the red saltire laid over it */}
    <path d="M0 0 L40 40 M40 0 L0 40" stroke="#FFFFFF" strokeWidth="9" />
    <path d="M0 0 L40 40 M40 0 L0 40" stroke="#C8102E" strokeWidth="3.6" />
    {/* white cross, then the red cross */}
    <path d="M20 0 V40 M0 20 H40" stroke="#FFFFFF" strokeWidth="13" />
    <path d="M20 0 V40 M0 20 H40" stroke="#C8102E" strokeWidth="7.5" />
  </>
);

const Qatar = (
  <>
    <rect width="40" height="40" fill="#8A1538" />
    {/* the hoist band and its nine-point serrated edge */}
    <path
      d={
        "M0 0 H12 " +
        Array.from({ length: 9 }, (_, i) => {
          const step = 40 / 9;
          return `L18 ${step * (i + 0.5)} L12 ${step * (i + 1)}`;
        }).join(" ") +
        " H0 Z"
      }
      fill="#FFFFFF"
    />
  </>
);

const UAE = (
  <>
    <rect width="40" height="13.34" fill="#00732F" />
    <rect y="13.33" width="40" height="13.34" fill="#FFFFFF" />
    <rect y="26.66" width="40" height="13.34" fill="#000000" />
    <rect width="10" height="40" fill="#FF0000" />
  </>
);

const FLAGS = { in: India, gb: UK, qa: Qatar, ae: UAE };

export default function FlagIcon({ code, className }) {
  const art = FLAGS[code];
  if (!art) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      width="40"
      height="40"
      aria-hidden="true"
      focusable="false"
    >
      {art}
    </svg>
  );
}
