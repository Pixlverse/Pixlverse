import React from "react";
import "./sectormarquee.css";

/**
 * SectorMarquee — the sectors we work in, running past continuously.
 *
 * The track holds the list twice and slides exactly -50%, so the second copy
 * arrives where the first started and the loop is seamless with no jump. The
 * duplicate is aria-hidden, so assistive tech and crawlers read each sector
 * once rather than twice.
 *
 * Plain CSS rather than Framer: this is one linear, never-ending translate,
 * and a keyframe animation runs it off the compositor without a JS frame loop.
 */
export default function SectorMarquee({ items }) {
  const row = (hidden) => (
    <ul className="sector-row" aria-hidden={hidden || undefined}>
      {items.map((sector, i) => (
        <li key={sector} className="sector-item">
          <span className="sector-name">{sector}</span>
          <span className="sector-sep" aria-hidden="true">
            {/* a mark between entries, not a bullet character — it keeps its
                shape at any size and takes the brand gradient */}
            <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
              <path
                d="M6 0 L7.4 4.6 L12 6 L7.4 7.4 L6 12 L4.6 7.4 L0 6 L4.6 4.6 Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="sector-marquee">
      <div className="sector-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
