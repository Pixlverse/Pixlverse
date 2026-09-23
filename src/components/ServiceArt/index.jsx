import React from "react";
import "./serviceart.css";

/**
 * ServiceArt — hand-built glass illustrations, one per service.
 *
 * Everything is drawn with `currentColor` at varying opacity rather than
 * baked-in fills or gradient <defs>. That means (a) each card's tone sets the
 * artwork colour by setting `color`, and (b) there are no gradient ids to
 * collide when six of these render on the same page.
 */

/* Each drawing was authored to different vertical bounds, so they need a nudge
   to share a baseline. Without this, "website-design" floats high (content ends
   at y=134 of 165) while "domain-hosting" runs off the bottom (y=161) and gets
   clipped by the card's overflow. */
const BASELINE = {
  "website-design": 6,
  "web-development": 8,
  "seo-optimization": 4,
  "maintenance-support": 16,
  "website-revamps": 8,
  "domain-hosting": -21,
};

const ART = {
  "website-design": (
    <>
      {/* two panels receding behind the main window */}
      <rect x="98" y="16" width="88" height="62" rx="8" fill="currentColor" opacity=".09" />
      <rect x="84" y="32" width="88" height="62" rx="8" fill="currentColor" opacity=".13" />
      {/* the browser window itself */}
      <rect x="56" y="50" width="112" height="84" rx="10" fill="currentColor" opacity=".2" />
      <rect x="56" y="50" width="112" height="84" rx="10" fill="none" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.5" />
      <path d="M56 68h112" stroke="currentColor" strokeOpacity=".38" strokeWidth="1.5" />
      <circle cx="67" cy="59" r="2.4" fill="currentColor" opacity=".6" />
      <circle cx="76" cy="59" r="2.4" fill="currentColor" opacity=".42" />
      <circle cx="85" cy="59" r="2.4" fill="currentColor" opacity=".28" />
      <rect x="68" y="80" width="44" height="7" rx="3.5" fill="currentColor" opacity=".5" />
      <rect x="68" y="95" width="66" height="5" rx="2.5" fill="currentColor" opacity=".3" />
      <rect x="68" y="106" width="52" height="5" rx="2.5" fill="currentColor" opacity=".24" />
      <rect x="68" y="119" width="32" height="9" rx="4.5" fill="currentColor" opacity=".55" />
    </>
  ),

  "web-development": (
    <>
      {/* screen */}
      <rect x="46" y="22" width="122" height="84" rx="8" fill="currentColor" opacity=".18" />
      <rect x="46" y="22" width="122" height="84" rx="8" fill="none" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.5" />
      {/* code */}
      <rect x="58" y="36" width="34" height="5" rx="2.5" fill="currentColor" opacity=".55" />
      <rect x="66" y="48" width="54" height="5" rx="2.5" fill="currentColor" opacity=".34" />
      <rect x="66" y="60" width="40" height="5" rx="2.5" fill="currentColor" opacity=".44" />
      <rect x="58" y="72" width="28" height="5" rx="2.5" fill="currentColor" opacity=".3" />
      <rect x="58" y="84" width="48" height="5" rx="2.5" fill="currentColor" opacity=".24" />
      {/* base, in perspective */}
      <path d="M30 118h154l-11 14H41z" fill="currentColor" opacity=".22" />
      <path d="M30 118h154l-11 14H41z" fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" />
      <path d="M92 124h30" stroke="currentColor" strokeOpacity=".5" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),

  "seo-optimization": (
    <>
      {/* search field */}
      <rect x="40" y="18" width="126" height="28" rx="14" fill="currentColor" opacity=".15" />
      <rect x="40" y="18" width="126" height="28" rx="14" fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" />
      <circle cx="58" cy="32" r="6" fill="none" stroke="currentColor" strokeOpacity=".68" strokeWidth="1.9" />
      <path d="M62.5 36.5l4.5 4.5" stroke="currentColor" strokeOpacity=".68" strokeWidth="1.9" strokeLinecap="round" />
      <rect x="76" y="29" width="58" height="5" rx="2.5" fill="currentColor" opacity=".33" />
      {/* ranking bars */}
      <rect x="52" y="104" width="19" height="32" rx="4" fill="currentColor" opacity=".22" />
      <rect x="79" y="88" width="19" height="48" rx="4" fill="currentColor" opacity=".32" />
      <rect x="106" y="72" width="19" height="64" rx="4" fill="currentColor" opacity=".44" />
      <rect x="133" y="56" width="19" height="80" rx="4" fill="currentColor" opacity=".6" />
      {/* trend line */}
      <path d="M58 94l27-18 26 14 28-26" fill="none" stroke="currentColor" strokeOpacity=".75" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M141 62l-14 3 4-12z" fill="currentColor" opacity=".75" />
    </>
  ),

  "maintenance-support": (
    <>
      {/* orbits */}
      <ellipse cx="102" cy="88" rx="74" ry="26" fill="none" stroke="currentColor" strokeOpacity=".26" strokeWidth="1.5" transform="rotate(-18 102 88)" />
      <ellipse cx="102" cy="88" rx="74" ry="26" fill="none" stroke="currentColor" strokeOpacity=".16" strokeWidth="1.5" transform="rotate(17 102 88)" />
      {/* shield */}
      <path d="M102 26l40 16v29c0 27-17 45-40 53-23-8-40-26-40-53V42z" fill="currentColor" opacity=".2" />
      <path d="M102 26l40 16v29c0 27-17 45-40 53-23-8-40-26-40-53V42z" fill="none" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.8" />
      <path d="M86 84l12 13 23-28" fill="none" stroke="currentColor" strokeOpacity=".85" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  "website-revamps": (
    <>
      {/* old versions stacking back */}
      <rect x="100" y="18" width="84" height="60" rx="8" fill="currentColor" opacity=".1" />
      <rect x="88" y="32" width="84" height="60" rx="8" fill="currentColor" opacity=".15" />
      {/* the rebuilt one */}
      <rect x="76" y="46" width="84" height="62" rx="8" fill="currentColor" opacity=".22" />
      <rect x="76" y="46" width="84" height="62" rx="8" fill="none" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.5" />
      <path d="M76 60h84" stroke="currentColor" strokeOpacity=".38" strokeWidth="1.5" />
      <rect x="86" y="70" width="34" height="5" rx="2.5" fill="currentColor" opacity=".45" />
      <rect x="86" y="82" width="52" height="5" rx="2.5" fill="currentColor" opacity=".26" />
      <rect x="86" y="93" width="38" height="5" rx="2.5" fill="currentColor" opacity=".2" />
      {/* refresh sweep */}
      <path d="M62 104a28 28 0 1 0 8-22" fill="none" stroke="currentColor" strokeOpacity=".7" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M58 74l16 5-13 12z" fill="currentColor" opacity=".7" />
    </>
  ),

  "domain-hosting": (
    <>
      {/* cloud */}
      <path
        d="M76 76a23 23 0 0 1 44-9 18 18 0 0 1 16 21h2a13 13 0 0 1 0 26H78a19 19 0 0 1-2-38z"
        fill="currentColor"
        opacity=".2"
      />
      <path
        d="M76 76a23 23 0 0 1 44-9 18 18 0 0 1 16 21h2a13 13 0 0 1 0 26H78a19 19 0 0 1-2-38z"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".48"
        strokeWidth="1.8"
      />
      {/* racked servers */}
      <rect x="58" y="120" width="98" height="18" rx="5" fill="currentColor" opacity=".24" />
      <rect x="58" y="120" width="98" height="18" rx="5" fill="none" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.4" />
      <circle cx="71" cy="129" r="2.6" fill="currentColor" opacity=".7" />
      <circle cx="81" cy="129" r="2.6" fill="currentColor" opacity=".42" />
      <rect x="120" y="126" width="24" height="5" rx="2.5" fill="currentColor" opacity=".3" />
      <rect x="58" y="143" width="98" height="18" rx="5" fill="currentColor" opacity=".16" />
      <rect x="58" y="143" width="98" height="18" rx="5" fill="none" stroke="currentColor" strokeOpacity=".32" strokeWidth="1.4" />
      <circle cx="71" cy="152" r="2.6" fill="currentColor" opacity=".5" />
      <circle cx="81" cy="152" r="2.6" fill="currentColor" opacity=".3" />
    </>
  ),
};

export default function ServiceArt({ name }) {
  const art = ART[name];
  if (!art) return null;
  return (
    <span className="service-art" aria-hidden="true">
      <svg viewBox="0 0 200 165" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform={`translate(0 ${BASELINE[name] || 0})`}>{art}</g>
      </svg>
    </span>
  );
}
