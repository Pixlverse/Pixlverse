import React, { useState } from "react";
import "./contact.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SEO from "../../components/SEO";
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import { SITE } from "../../data/site";
import { organizationSchema, breadcrumbSchema } from "../../seo/schema";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mblqpgkg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        setTimeout(() => setFormStatus(""), 4000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(""), 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Pixlverse | Hire a Website Designer & Developer in Kerala"
        description="Get in touch with Pixlverse to build or revamp your website. Based in Kerala, serving clients across India and the UK. We reply within 24 hours — request a free quote."
        keywords="contact Pixlverse, hire website developer Kerala, website design quote India, web developer Kerala contact"
        path="/contact"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]}
      />
      <Navbar />

      <main>
        <PageHero
          eyebrow="Get in touch"
          title="Let's chat about your project"
          subtitle="Have questions or an idea in mind? Send us a message and we'll respond within 24 hours."
        >
          <div className="page-hero-meta">
            <span className="ph-chip"><FaClock /> 24-hour response</span>
            <span className="ph-chip"><FaPaperPlane /> Free, no-obligation quote</span>
            <span className="ph-chip"><FaMapMarkerAlt /> Kerala · India · Worldwide</span>
          </div>
        </PageHero>

        <section className="section section--flush-top contact-section">
          <div className="container contact-grid">
            <Reveal className="contact-form-box card" direction="right">
              <h2>Send us a message</h2>
              <p className="contact-form-lead">Tell us a little about what you need — we'll take it from there.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label className="field">
                    <span>First name</span>
                    <input type="text" name="firstName" placeholder="Jane" required />
                  </label>
                  <label className="field">
                    <span>Last name</span>
                    <input type="text" name="lastName" placeholder="Doe" required />
                  </label>
                </div>
                <label className="field">
                  <span>Email address</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label className="field">
                  <span>Contact number</span>
                  <input type="tel" name="phone" placeholder="+91 00000 00000" required />
                </label>
                <label className="field">
                  <span>Your message</span>
                  <textarea name="message" rows="5" placeholder="Tell us about your project, timeline and goals…" required></textarea>
                </label>

                {formStatus === "success" && (
                  <p className="form-feedback form-success">✓ Message sent successfully! We'll get back to you soon.</p>
                )}
                {formStatus === "error" && (
                  <p className="form-feedback form-error">✗ Oops! Something went wrong. Please try again.</p>
                )}

                <button type="submit" className="btn btn--primary contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : (<>Send message <FaPaperPlane /></>)}
                </button>
              </form>
            </Reveal>

            <Reveal className="contact-aside" direction="left" delay={0.1}>
              <div className="contact-card card">
                <span className="contact-icon"><FaEnvelope /></span>
                <h3>Email us</h3>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="contact-card card">
                <span className="contact-icon"><FaMapMarkerAlt /></span>
                <h3>Where we are</h3>
                <p>Based in Kerala — serving clients across India &amp; internationally.</p>
              </div>
              <div className="contact-card card">
                <span className="contact-icon"><FaClock /></span>
                <h3>Response time</h3>
                <p>We typically reply within 24 hours on business days.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
