import React from "react";
import ProjectThumb from "../ProjectThumb";
import "./siteframe.css";

/** "https://www.thenearbymart.com/" -> "thenearbymart.com" */
export function hostOf(url) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, "");
  }
}

/**
 * SiteFrame — a project screenshot presented as a browser window.
 *
 * Two jobs. The chrome makes a hero crop read as a website rather than as a
 * photograph, and the address bar shows the real domain, so a visitor can see
 * where the card goes before deciding to click it. The shot is taller than its
 * window and pans up on hover, which reads as scrolling the page.
 */
export default function SiteFrame({ name, image, url, fit = false }) {
  const host = hostOf(url);

  return (
    /* `fit` shows the screenshot whole — the window takes the image's own
       height instead of cropping to a band. There is then no overflow to
       scroll, so the hover pan is off in this mode. */
    <span className={`site-frame${fit ? " site-frame--fit" : ""}`}>
      <span className="site-frame-bar" aria-hidden="true">
        <span className="site-frame-dots">
          <i />
          <i />
          <i />
        </span>
        {host && <span className="site-frame-url">{host}</span>}
      </span>

      <span className="site-frame-shot">
        <ProjectThumb name={name} image={image} />
        {url && (
          <span className="site-frame-open" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        )}
      </span>
    </span>
  );
}
