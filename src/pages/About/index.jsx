import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SEO from "../../components/SEO";
import "./about.css";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { STATS } from "../../data/site";
import { organizationSchema, breadcrumbSchema } from "../../seo/schema";

const VALUES = [
  {
    title: "Clarity over jargon",
    text: "We explain things in plain language and never over-commit. You always know what's happening.",
  },
  {
    title: "Craft over shortcuts",
    text: "Clean, maintainable code and considered design — the kind that lasts and scales.",
  },
  {
    title: "Partnership over hand-offs",
    text: "We don't disappear at launch. We stay on as your long-term digital partner.",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Pixlverse | Website Design & Development Team in Kerala, India"
        description="Since 2023, Pixlverse has partnered with clients across India and the UK to build elegant, high-performing websites. Learn about our purpose-driven web studio in Kerala."
        keywords="about Pixlverse, website design team Kerala, web development studio India, web designers Kerala"
        path="/about"
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <Navbar />

      <main>
        <PageHero
          eyebrow="About Pixlverse"
          title="Building with purpose, pixel by pixel"
          subtitle="We craft elegant, high-performing websites that do more than look good — they work hard for your business."
        >
          {/* <div className="ph-stats">
            {STATS.map((s) => (
              <div className="ph-stat" key={s.label}>
                <b className="gradient-text">{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div> */}
        </PageHero>

        {/* Story */}
        <section className="section section--flush-top">
          <div className="container about-split">
            <Reveal className="about-media" direction="right">
              <img
                src="/images/sl3.jpg"
                alt="The Pixlverse team crafting a website"
              />
            </Reveal>
            <Reveal className="about-text" direction="left" delay={0.1}>
              <span className="eyebrow">Our story</span>
              <h2>A studio built on craft &amp; care</h2>
              <p>
                At Pixlverse, every project is built with a balance of clean,
                maintainable code and thoughtful, user-centric design — ensuring
                a smooth, fast and memorable experience for your visitors.
              </p>
              <p>
                Since <strong>2023</strong>, we've partnered with clients across
                India and the world, transforming ideas into digital realities
                that drive results. Whether you need a brand-new website or want
                to elevate an existing one, our commitment goes beyond launch —
                we provide continuous support to keep your online presence
                secure, relevant and ahead of the curve.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Why */}
        <section className="section section--dark">
          <div className="container about-split about-split--reverse">
            <Reveal className="about-media" direction="left">
              <img src="/images/sl5.jpg" alt="Pixlverse digital design work" />
            </Reveal>
            <Reveal className="about-text" direction="right" delay={0.1}>
              <span className="eyebrow">Why Pixlverse</span>
              <h2>Your idea, turned into a digital brochure</h2>
              <p>
                Your website isn't just a collection of pages — it's your
                digital brochure, the first impression that can take your brand
                to the next level. Our goal is to ensure every website we
                deliver reflects your unique vision while clearly communicating
                your value to the world.
              </p>
              <p className="about-quote">
                "Your idea. We turn it into a digital brochure."
              </p>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Our impact</span>
              <h2>Trusted by businesses, near and far</h2>
              <p>
                From tech and finance to healthcare, education, consulting and
                logistics — across 3+ countries.
              </p>
            </Reveal>
            <div className="about-stats">
              {STATS.map((s, i) => (
                <Reveal
                  key={s.label}
                  className="about-stat card"
                  delay={i * 0.08}
                >
                  <span className="about-stat-value gradient-text">
                    {s.value}
                  </span>
                  <span className="about-stat-label">{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section section--soft">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">How we think</span>
              <h2>The values behind every build</h2>
            </Reveal>
            <div className="about-values">
              {VALUES.map((v, i) => (
                <Reveal
                  key={v.title}
                  className="value-card card"
                  delay={i * 0.08}
                >
                  <span className="value-check">
                    <FaCheck />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <Reveal className="cta-box" direction="up">
              <h2>Not sure where to start?</h2>
              <p>
                We know planning a website can feel overwhelming — that's where
                we come in. We'll help you identify your goals, shape a
                strategy, and build a site that grows with your business.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Let's talk <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
