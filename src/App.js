import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import PageTransition from "./components/PageTransition";
import PageLoader from "./components/PageLoader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

/**
 * The chrome (navbar, footer, progress bar) lives outside AnimatePresence so it
 * stays put while pages swap — that's also what keeps the navbar's sliding
 * active-link pill continuous from one route to the next.
 */
/* How long the splash holds before it lifts. A deliberate pause, not a
   measurement of anything real — the routes are already bundled and render
   instantly. Lower it here to shorten the wait. */
const SPLASH_MS = 2000;

const AnimatedRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  /* First load only. Moving between routes is instant, and putting a curtain
     over every internal navigation made the site feel slower than it is. */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), SPLASH_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <PageLoader show={loading} />

      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>
          {/* inside the transition so the scroll resets once the new page is
              mounted, not while the old one is still fading out */}
          <ScrollToTop />
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <BackToTop />
    </Router>
  );
};

export default App;
