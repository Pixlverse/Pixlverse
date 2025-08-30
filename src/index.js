import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // keep or delete if not needed
import "./styles/reveal.css";
import initScrollReveal from "./utils/scrollReveal";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// initialize after initial render — guard with requestAnimationFrame for safety
requestAnimationFrame(() => {
	// if a previous initializer exists (hot reload), clean it up first
	try { if (window.__scrollRevealCleanup) window.__scrollRevealCleanup(); } catch (e) {}
	window.__scrollRevealCleanup = initScrollReveal();
});
