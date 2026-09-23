import React from "react";
import "./projectthumb.css";

/** "AJ Homes & Lettings Ltd" -> "AH"; "Mio Pizzeria" -> "MP" */
function initials(name) {
  return name
    .replace(/[^A-Za-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

/**
 * Renders a project screenshot, or a branded monogram tile when no image
 * is available yet. Keeps every card the same shape either way.
 */
export default function ProjectThumb({ name, image }) {
  if (image) {
    return (
      <img src={image} alt={`${name} website by Pixlverse`} loading="lazy" />
    );
  }
  return (
    <span className="project-monogram" role="img" aria-label={name}>
      <span className="project-monogram-mark">{initials(name)}</span>
    </span>
  );
}
