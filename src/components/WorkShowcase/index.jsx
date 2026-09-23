import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../Reveal";
import SiteFrame from "../SiteFrame";
import "./workshowcase.css";

/**
 * WorkShowcase — the featured work, one row per project. Rows alternate:
 * the write-up leads on even rows, the site leads on odd ones, so the eye
 * zig-zags down the section instead of running in one straight column.
 *
 * Deliberately static. An earlier version pinned the preview and swapped it
 * from scroll position, which was more machinery than three projects warrant
 * and meant you could only ever see one of them at a time.
 */
export default function WorkShowcase({ projects }) {
  return (
    <ol className="showcase">
      {projects.map((p, i) => (
        <Reveal
          as="li"
          key={p.name}
          className={`showcase-row${i % 2 ? " showcase-row--flip" : ""}`}
          direction="up"
          delay={(i % 2) * 0.08}
          amount={0.15}
        >
          <div className="showcase-copy">
            <span className="showcase-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="showcase-name">{p.name}</h3>
            <span className="showcase-cat">
              {p.category}
              {p.location && <em> · {p.location}</em>}
            </span>
            <p className="showcase-blurb">{p.blurb}</p>
            {p.url && (
              <a
                className="showcase-visit"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site <FaArrowRight />
              </a>
            )}
          </div>

          {p.url ? (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-shot"
              aria-label={`${p.name} — open the live site in a new tab`}
              tabIndex={-1}
            >
              <SiteFrame name={p.name} image={p.image} url={p.url} fit />
            </a>
          ) : (
            <span className="showcase-shot">
              <SiteFrame name={p.name} image={p.image} fit />
            </span>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
