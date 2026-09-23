import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");

const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* The build writes real HTML for every route (scripts/prerender.js). When that
   markup is present we hydrate it, so the page a crawler reads is the same one
   the visitor ends up interacting with. A cold container falls back to a
   normal client render. */
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
