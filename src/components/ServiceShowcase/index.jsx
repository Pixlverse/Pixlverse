import React from "react";
import { FaCheck } from "react-icons/fa";
import Reveal from "../Reveal";
import ServiceIcon from "../ServiceIcon";
import ServiceArt from "../ServiceArt";
import "./serviceshowcase.css";

/* Keyed by slug rather than by position, so reordering the services in
   site.js cannot silently reassign every colour. */
const ACCENTS = {
  "website-design": "#7b3fe4",
  "web-development": "#2b7fff",
  "seo-optimization": "#12b886",
  "maintenance-support": "#f08c28",
  "website-revamps": "#d63f9a",
  "domain-hosting": "#12a5c4",
};

/**
 * ServiceShowcase — each service as a full-width row: its own illustration on
 * one side, the detail on the other, sides swapping as you go down.
 *
 * Replaces a two-up grid of flat cards. Those stacked four blocks of text into
 * a box and left the studio's own drawings buried as a watermark on the home
 * page; here each drawing gets a panel of its own.
 */
export default function ServiceShowcase({ services }) {
  return (
    <ol className="svc-showcase">
      {services.map((s, i) => (
        <Reveal
          as="li"
          key={s.slug}
          id={s.slug}
          className={`svc-row${i % 2 ? " svc-row--flip" : ""}`}
          direction="up"
          amount={0.18}
          style={{ "--accent": ACCENTS[s.slug] || "#7b3fe4" }}
        >
          <div className="svc-art">
            <span className="svc-art-index" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="svc-art-sheen" aria-hidden="true" />
            <ServiceArt name={s.slug} />
          </div>

          <div className="svc-body">
            <span className="svc-kicker">
              <ServiceIcon name={s.icon} />
              {s.title}
            </span>
            <h2>{s.heading}</h2>
            <p className="svc-blurb">{s.blurb}</p>

            <ul className="svc-points">
              {s.points.map((p) => (
                <li key={p}>
                  <FaCheck aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="svc-best">
              <strong>Best for:</strong> {s.bestFor}
            </p>

          </div>
        </Reveal>
      ))}
    </ol>
  );
}
