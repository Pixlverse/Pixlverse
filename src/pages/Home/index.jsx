import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import SEO from "../../components/SEO";
import ServiceIcon from "../../components/ServiceIcon";
import "./home.css";
import {
  FaArrowRight,
  FaCheckCircle,
  FaBolt,
  FaComments,
  FaBrain,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  SERVICES,
  PROJECTS,
  TESTIMONIALS,
  PROCESS,
  STATS,
  FAQS,
} from "../../data/site";
import { organizationSchema, websiteSchema, faqSchema } from "../../seo/schema";

const WHY = [
  {
    icon: <FaCheckCircle />,
    color: "#24b700",
    title: "Pixel-perfect execution",
    text: "Every detail crafted with care, from spacing to micro-interactions.",
  },
  {
    icon: <FaBolt />,
    color: "#f5a524",
    title: "Built for speed & SEO",
    text: "Fast-loading, search-optimised sites that get found and convert.",
  },
  {
    icon: <FaComments />,
    color: "#00abff",
    title: "Ongoing collaboration",
    text: "Clear communication and continuous support well beyond launch.",
  },
  {
    icon: <FaBrain />,
    color: "#b43f8f",
    title: "Tech + design strategy",
    text: "We pair clean engineering with thoughtful, business-driven design.",
  },
];

const Home = () => {
  const newLocal = (
    <span className="hero-pill hero-pill-4">
      <FaBrain style={{ color: "#b43f8f" }} /> Strategy-led design
    </span>
  );
  return (
    <>
      <SEO
        title="Pixlverse | Best Website Design & Development Company in India"
        description="Pixlverse is a top website design & development studio in Kerala, India. We build elegant, fast, SEO-optimised websites for businesses. Get a free quote today."
        keywords="website design Kerala, web development Kerala, best website builder Kerala, website development company India, website designers in Kerala, SEO optimization Kerala, affordable website design India, custom website development"
        path="/"
        jsonLd={[organizationSchema, websiteSchema, faqSchema]}
      />
      <Navbar />

      <main>
        {/* ===================== HERO ===================== */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="blob blob-1"></span>
            <span className="blob blob-2"></span>
            <span className="grid-fade"></span>
          </div>
          <div className="container hero-inner">
            <Reveal className="hero-copy" direction="up">
              {/* <span className="eyebrow">Website Studio · Kerala, India</span> */}
              <h1>
                We build websites that{" "}
                <span className="gradient-text">win you customers</span>.
              </h1>
              <p className="hero-sub">
                We design and build elegant, high-performing websites that load
                fast, rank well and turn visitors into customers — backed by
                clean code, thoughtful design and support that never stops at
                launch. Infinite possibilities, pixel perfect.
              </p>
              <div className="btn-row hero-cta">
                <Link to="/contact" className="btn btn--primary">
                  Get a free quote <FaArrowRight />
                </Link>
                <Link to="/projects" className="btn btn--ghost">
                  View our work
                </Link>
              </div>

              <div className="hero-trust">
                <div className="hero-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span>
                  Trusted by 20+ businesses across India &amp; the UK since 2023
                </span>
              </div>
            </Reveal>
          </div>

          <div className="hero-pills" aria-hidden="true">
            <span className="hero-pill hero-pill-1">
              <FaBolt /> Fast &amp; SEO-ready
            </span>
            <span className="hero-pill hero-pill-2">
              <FaCheckCircle style={{ color: "#24b700" }} /> Pixel-perfect
              design
            </span>
            <span className="hero-pill hero-pill-3">
              <FaComments style={{ color: "#00abff" }} /> Ongoing support
            </span>
            {newLocal}
          </div>
        </section>

        {/* ===================== SERVICES ===================== */}
        <section className="section section--dark" id="services">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">What we offer</span>
              <h2>Everything your website needs, in one team</h2>
              <p>
                Expertly crafted digital solutions for modern brands — from
                first pixel to long-term growth.
              </p>
            </Reveal>

            <div className="services-grid">
              {SERVICES.map((s, i) => (
                <Reveal
                  key={s.title}
                  className="service-card card"
                  delay={(i % 3) * 0.08}
                >
                  <div className="service-icon">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="services-foot" direction="none" delay={0.1}>
              <Link to="/services" className="btn btn--ghost">
                Explore all services <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ===================== PROCESS ===================== */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">How we work</span>
              <h2>A simple process, a polished result</h2>
              <p>
                We guide you from the very first idea to a successful launch —
                and stay on long after.
              </p>
            </Reveal>

            <div className="process-grid">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} className="process-card" delay={i * 0.08}>
                  <span className="process-step">{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FEATURED WORK ===================== */}
        <section className="section section--soft">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Our creations</span>
              <h2>Recent work we're proud of</h2>
              <p>
                A look at some of the websites we've designed and built for our
                clients.
              </p>
            </Reveal>

            <div className="work-grid">
              {PROJECTS.slice(0, 4).map((p, i) => (
                <Reveal
                  key={p.name}
                  className="work-card card"
                  delay={(i % 3) * 0.08}
                >
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-media"
                  >
                    <img
                      src={p.image}
                      alt={`${p.name} website by Pixlverse`}
                      loading="lazy"
                    />
                    <span className="work-cat">{p.category}</span>
                  </a>
                  <div className="work-body">
                    <h3>
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        {p.name}
                      </a>
                    </h3>
                    <p>{p.blurb}</p>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-link"
                    >
                      Visit site <FaArrowRight />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="services-foot" direction="none" delay={0.1}>
              <Link to="/projects" className="btn btn--ghost">
                Explore more projects <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ===================== WHY US ===================== */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Why Pixlverse</span>
              <h2>More than a website — a digital partner</h2>
              <p>
                We don't just build websites. We build digital experiences and
                stand by you from concept to code to customer.
              </p>
            </Reveal>

            <Reveal className="stats-box" direction="up">
              <div className="stats-grid">
                {STATS.map((s) => (
                  <div className="stat" key={s.label}>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="why-grid">
              {WHY.map((w, i) => (
                <Reveal
                  key={w.title}
                  className="why-card card"
                  delay={(i % 2) * 0.08}
                >
                  <span className="why-icon" style={{ color: w.color }}>
                    {w.icon}
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section className="section section--soft">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Client love</span>
              <h2>What our clients say</h2>
              <p>
                Don't just take our word for it — here's what working with
                Pixlverse feels like.
              </p>
            </Reveal>

            <div className="testimonial-grid">
              {TESTIMONIALS.map((t, i) => (
                <Reveal
                  key={t.name}
                  className="testimonial-card card"
                  delay={i * 0.1}
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="section">
          <div className="container faq-wrap">
            <Reveal className="section-head">
              <span className="eyebrow">FAQ</span>
              <h2>Questions, answered</h2>
              <p>Everything you might want to know before working with us.</p>
            </Reveal>

            <div className="faq-list">
              {FAQS.map((f, i) => (
                <Reveal
                  key={i}
                  as="details"
                  className="faq-item"
                  delay={(i % 3) * 0.05}
                >
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FINAL CTA ===================== */}
        <section className="final-cta">
          <div className="container">
            <Reveal className="cta-box" direction="up">
              <h2>Not sure where to start?</h2>
              <p>
                Let's craft a website that aligns perfectly with your business
                goals — and guide you seamlessly from the first idea to a
                successful launch and beyond.
              </p>
              <div className="btn-row">
                <Link to="/contact" className="btn btn--primary">
                  Get a free quote <FaArrowRight />
                </Link>
                <Link to="/services" className="btn btn--light">
                  See what we do
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
