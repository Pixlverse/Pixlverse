import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "../../components/Reveal";
import CtaRadar from "../../components/CtaRadar";
import TiltCard from "../../components/TiltCard";
import Counter from "../../components/Counter";
import HeroNetwork from "../../components/HeroNetwork";
import FaqGrid from "../../components/FaqGrid";
import FlagIcon from "../../components/FlagIcon";
import WhyDeck from "../../components/WhyDeck";
import SEO from "../../components/SEO";
import ServiceArt from "../../components/ServiceArt";
import WorkShowcase from "../../components/WorkShowcase";
import "./home.css";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import {
  SERVICES,
  PROJECTS,
  TESTIMONIALS,
  PROCESS,
  STATS,
  FAQS,
  HERO_TRUST,
  WHY_POINTS,
} from "../../data/site";
import { organizationSchema, websiteSchema, faqSchema } from "../../seo/schema";

const FEATURED = PROJECTS.filter((p) => p.featured);

/* One card surface — light glass — with three accents cycling across the grid,
   so every row reads as the same trio repeating. The colour is positional
   rhythm rather than a property of the service, which is why it lives here and
   not in src/data/site.js.
   `ink` is the same hue darkened enough to hold 4.5:1 as title text on the
   light fill; `accent` is the raw hue for the illustration, badge and glow. */
/* The brand gradient sampled at four points. Walking violet -> plum along the
   track is what makes it read as progress rather than four identical markers.
   Ring and halo are pre-baked rgba of the same hue so the CSS needs no
   colour maths. */
const PROCESS_ACCENTS = [
  { c: "#7b3fe4", ring: "rgba(123, 63, 228, 0.42)", halo: "rgba(123, 63, 228, 0.09)" },
  { c: "#8e3fc8", ring: "rgba(142, 63, 200, 0.42)", halo: "rgba(142, 63, 200, 0.09)" },
  { c: "#a13fab", ring: "rgba(161, 63, 171, 0.42)", halo: "rgba(161, 63, 171, 0.09)" },
  { c: "#b43f8f", ring: "rgba(180, 63, 143, 0.42)", halo: "rgba(180, 63, 143, 0.09)" },
];

const SERVICE_ACCENTS = [
  { accent: "#7b3fe4", ink: "#7b3fe4" }, // violet
  { accent: "#d63f9a", ink: "#b03681" }, // plum
  { accent: "#12b886", ink: "#14745c" }, // emerald
];

const Home = () => {
  const reduceMotion = useReducedMotion();

  /* Hero parallax: the copy drifts up and dissolves slightly faster than the
     page scrolls, so the stage behind it appears to sit further back. */
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 120]);
  const heroFade = useTransform(heroProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.94]);

  return (
    <>
      <SEO
        title="Website Design & Development Company in Kerala | Pixlverse"
        description="Pixlverse is a Kerala web design studio building fast, SEO-ready websites that turn visitors into customers. Get a free quote in 24 hours."
        keywords="website design & development company in Kerala, web design Kerala, website developers Kerala, custom website for business, website design company India"
        path="/"
        jsonLd={[organizationSchema, websiteSchema, faqSchema]}
      />

      <main>
        {/* The hero and the Services band share one backdrop: a single
            gradient on .hero-stage and a single node canvas spanning both, so
            there is no boundary between them to match up. The network thins
            out as it travels down — see the mask in heronetwork.css. */}
        <div className="hero-stage">
          <HeroNetwork />

          {/* ===================== HERO ===================== */}
          <section className="hero" ref={heroRef}>

          <motion.div
            className="container hero-inner"
            style={
              reduceMotion
                ? undefined
                : { y: heroY, opacity: heroFade, scale: heroScale }
            }
          >
            <Reveal className="hero-copy" direction="up">
              <h1>
                Website Design &amp; Development{" "}
                <span className="hero-accent">That Connects You to Customers</span>
              </h1>
              <p className="hero-sub">
                Fast, search-friendly websites that get found on Google and turn
                visitors into enquiries — built in Kerala for businesses across
                India, the UK, Qatar and Dubai.
              </p>
              <div className="btn-row hero-cta">
                <Link to="/contact" className="btn btn--primary">
                  Get your free quote <FaArrowRight />
                </Link>
                <Link to="/projects" className="btn btn--light">
                  See our work <FaArrowRight />
                </Link>
              </div>
            </Reveal>

            {/* the three proof points, set straight on the hero — no panel, no
                fill, just figures separated by hairlines */}
            <Reveal className="hero-proof" direction="up" delay={0.15}>
              <ul>
                {HERO_TRUST.map((item) => (
                  <li className="proof-stat" key={item.label}>
                    <Counter className="proof-value" value={item.value} />
                    <span className="proof-label">{item.label}</span>

                    {item.flags ? (
                      <>
                        <span className="proof-flags" aria-hidden="true">
                          {item.flags.map((f) => (
                            <span className="proof-flag" key={f.code}>
                              <FlagIcon code={f.code} />
                            </span>
                          ))}
                        </span>
                        {/* the names stay as text — the flags are decoration */}
                        <span className="proof-note">
                          {item.flags.map((f) => f.name).join(" · ")}
                        </span>
                      </>
                    ) : (
                      item.note && <span className="proof-note">{item.note}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </motion.div>
        </section>

        {/* ===================== SERVICES ===================== */}
        <section className="section section--dark" id="services">
          <div className="container">
            <Reveal className="section-head">
              <h2>Everything Your Business Needs Online, From One Team</h2>
              <p>
                Stop juggling a designer, a developer, an SEO freelancer and a
                hosting company. We handle the whole journey, from first sketch
                to long-term growth.
              </p>
            </Reveal>

            <div className="services-grid">
              {SERVICES.map((s, i) => (
                <TiltCard
                  key={s.title}
                  className="service-card"
                  delay={(i % 3) * 0.08}
                  max={6}
                  style={{
                    "--accent": SERVICE_ACCENTS[i % 3].accent,
                    "--accent-ink": SERVICE_ACCENTS[i % 3].ink,
                  }}
                >
                  <ServiceArt name={s.slug} />
                  <h3>
                    <span className="svc-title-top">{s.titleTop}</span>
                    <span className="svc-title-bottom">{s.titleBottom}</span>
                  </h3>
                  <p>{s.card}</p>
                  <Link to={`/services#${s.slug}`} className="service-more">
                    <span className="service-more-badge">
                      <FaArrowRight />
                    </span>
                    Learn more
                  </Link>
                </TiltCard>
              ))}
            </div>

            <Reveal className="services-foot" direction="none" delay={0.1}>
              <Link to="/services" className="btn btn--ghost">
                Explore all services <FaArrowRight />
              </Link>
            </Reveal>
          </div>
          </section>
        </div>

        {/* ===================== PROCESS ===================== */}
        <section className="section" id="process">
          <div className="container">
            <Reveal className="section-head">
              <h2>Our Simple 4-Step Website Process</h2>
              <p>
                No jargon, no surprises. You'll always know what's happening and
                what comes next.
              </p>
            </Reveal>

            {/* One connected track rather than four separate cards. The steps
                are a sequence, so they are drawn as one thing: a rail that
                draws itself in, with the markers lighting up along it. An <ol>
                because the order is the point. */}
            <div className="process-track">
              <motion.span
                className="process-rail"
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0, scaleY: 0 }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.05, ease: [0.16, 0.84, 0.24, 1] }}
              />

              <ol className="process-steps">
                {PROCESS.map((p, i) => (
                  <motion.li
                    key={p.step}
                    className="process-item"
                    style={{
                      "--step": PROCESS_ACCENTS[i].c,
                      "--step-ring": PROCESS_ACCENTS[i].ring,
                      "--step-halo": PROCESS_ACCENTS[i].halo,
                    }}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.22 + i * 0.14,
                      ease: [0.16, 0.84, 0.24, 1],
                    }}
                  >
                    {/* the <ol> already carries the order for assistive tech */}
                    <span className="process-node" aria-hidden="true">
                      {p.step}
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ===================== FEATURED WORK ===================== */}
        <section className="section section--soft" id="work">
          <div className="container">
            <Reveal className="section-head">
              <h2>Websites We've Built for Real Businesses</h2>
              <p>
                A restaurant in Qatar, a travel agency in Kerala, a property
                agency in the UK. Different sectors, same standard: fast,
                findable and built to bring in enquiries.
              </p>
            </Reveal>

            {/* not wrapped in <Reveal>: the showcase is taller than the
                viewport and paces itself off scroll position */}
            <WorkShowcase projects={FEATURED} />

            <Reveal className="services-foot" direction="none" delay={0.1}>
              <Link to="/projects" className="btn btn--ghost">
                See all projects <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ===================== WHY US ===================== */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <h2>Why Businesses Choose Pixlverse as Their Web Design Partner</h2>
            </Reveal>

            <Reveal className="stats-box" direction="up">
              <div className="stats-grid">
                {STATS.map((s) => (
                  <div className="stat" key={s.label}>
                    <Counter className="stat-value" value={s.value} />
                    <span className="stat-label">{s.label}</span>
                    {s.note && <span className="stat-note">{s.note}</span>}
                  </div>
                ))}
              </div>
            </Reveal>

            <WhyDeck points={WHY_POINTS} />
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section className="section section--soft section--curve-top">
          <div className="container">
            <Reveal className="section-head">
              <h2>What Our Clients Say</h2>
              <p>
                Don't just take our word for it — here's what working with
                Pixlverse feels like.
              </p>
            </Reveal>

            <div className="testimonial-grid">
              {TESTIMONIALS.map((t, i) => (
                <TiltCard
                  key={t.name}
                  className="testimonial-card card"
                  delay={i * 0.1}
                  max={5}
                >
                  <FaQuoteLeft className="quote-mark" />
                  <p className="testimonial-text">{t.message}</p>
                  <div className="testimonial-person">
                    <img src={t.img} alt={t.name} loading="lazy" />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="section" id="faq">
          <div className="container">
            <Reveal className="section-head">
              <h2>Website Design Questions, Answered</h2>
              <p>Everything you might want to know before working with us.</p>
            </Reveal>

            <FaqGrid items={FAQS} />
          </div>
        </section>

        {/* ===================== FINAL CTA ===================== */}
        <section className="final-cta">
          <div className="container">
            <Reveal className="cta-box" direction="up">
              <CtaRadar />
              <h2>Ready for a Website That Works as Hard as You Do?</h2>
              <p>
                Tell us about your business and goals. We'll reply within 24
                hours with honest advice and a transparent quote, with no
                pressure and no obligation.
              </p>
              <div className="btn-row">
                <Link to="/contact" className="btn btn--primary">
                  Get your free quote <FaArrowRight />
                </Link>
                <Link to="/services" className="btn btn--light">
                  See what we do
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

    </>
  );
};

export default Home;
