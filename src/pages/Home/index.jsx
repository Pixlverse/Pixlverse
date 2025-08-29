import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./home.css";
import {
  FaPaintBrush,
  FaCode,
  // FaPuzzlePiece,
  FaTools,
  FaFlask,
  FaChartLine,
  FaCloud,
  FaCheckCircle,
  FaBolt,
  FaComments,
  FaBrain,
} from "react-icons/fa";

const Home = () => {
  const testimonials = [
    {
      name: "Rahul Menon",
      designation: "Founder, TechSpark",
      message:
        "Pixlverse turned our vision into reality! The website not only looks stunning but also performs flawlessly. Their support is top-notch.",
      img: "https://via.placeholder.com/100",
    },
    {
      name: "Sarah Johnson",
      designation: "CEO, BrightHomes",
      message:
        "Professional, creative, and always reliable. The team guided us step by step, and the end result exceeded our expectations.",
      img: "https://via.placeholder.com/100",
    },
    {
      name: "Amit Verma",
      designation: "Director, SkillHub",
      message: `Their attention to detail and dedication is unmatched. Weve seen real growth since launching our new website with Pixlverse.`,
      img: "https://via.placeholder.com/100",
    },
  ];


  return (
    <>
      <Navbar />
      <section
        style={{
          padding: "2rem",
          marginTop: "50px",
        }}
      >
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h1>Unleashing Creativity at Pixlverse</h1>
            <p className="slogan">Infinite Possibilities, Pixel Perfect!</p>
            <p className="description">
              Crafting elegant, high-performing websites with unmatched support.
              We don’t just build websites. We build digital experiences backed
              by clean code, thoughtful design, and continuous support.
            </p>
            <button
              className="cta-button1"
              onClick={() => (window.location.href = "/projects")}
            >
              Browse Our Creations
            </button>
            <button
              className="cta-button"
              onClick={() => (window.location.href = "/contact")}
            >
              Get a Quote
            </button>
          </div>

          <div className="hero-image">
            <img src="/images/sl2.jpg" alt="Pixlverse Work" />
          </div>
        </section>
      </section>
      <section id="services" className="services-sectionn">
        <div className="bokeh-background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="services-header">
          <h2>
            What We{" "}
            <span className="" style={{ color: "#bc3aab" }}>
              Offer
            </span>
          </h2>
          <p>Expertly crafted digital solutions for modern brands</p>
        </div>
        <div className="services-gridd">
          <div className="service-cardd">
            <div className="icon-circle">
              <FaPaintBrush className="service-iconn" />
            </div>
            <h3>Website Design</h3>
            <p>
              Clean, modern, user-focused UI/UX crafted to tell your brand story
              effectively.
            </p>
          </div>

          <div className="service-cardd">
            <div className="icon-circle">
              <FaCode className="service-iconn" />
            </div>
            <h3>Web Development</h3>
            <p>
              Fast, scalable websites built with the latest tech — from static
              pages to web apps.
            </p>
          </div>

          {/* <div className="service-cardd">
            <div className="icon-circle">
              <FaPuzzlePiece className="service-iconn" />
            </div>
            <h3>CMS Integration</h3>
            <p>
              Easily manage your content with WordPress, Webflow, or headless
              CMS setups.
            </p>
          </div> */}

          <div className="service-cardd">
            <div className="icon-circle">
              <FaTools className="service-iconn" />
            </div>
            <h3>Maintenance & Support</h3>
            <p>
              We don’t disappear after launch. We keep your site updated, fast,
              and secure.
            </p>
          </div>

          <div className="service-cardd">
            <div className="icon-circle">
              <FaFlask className="service-iconn" />
            </div>
            <h3>Website Revamps</h3>
            <p>
              Outdated site? We’ll redesign and rebuild it into something
              stunning.
            </p>
          </div>

          <div className="service-cardd">
            <div className="icon-circle">
              <FaChartLine className="service-iconn" />
            </div>
            <h3>SEO Optimization</h3>
            <p>
              Built-in technical SEO and performance practices to improve
              discoverability.
            </p>
          </div>

          <div className="service-cardd">
            <div className="icon-circle">
              <FaCloud className="service-iconn" />
            </div>
            <h3>Domain & Hosting</h3>
            <p>
              Complete setup of domains, DNS, and hosting – so you don’t worry
              about the tech.
            </p>
          </div>
        </div>
      </section>
      <section className="enquiry-section">
        <div className="enquiry-container">
          <h2>Have a project in mind?</h2>
          <p>
            Whether you're starting from scratch or want to revamp your site,
            we’re here to turn your ideas into a pixel-perfect digital
            experience.
          </p>
          <button
            className="cta-button3"
            onClick={() => (window.location.href = "/contact")}
          >
            Get a Quote
          </button>
        </div>
      </section>

      <section className="creations-section">
        <div className="creations-header">
          <h2>
            Our <span className="highlight">Creations</span>
          </h2>
          <p>Take a look at some of our recent projects.</p>
        </div>

        <div className="creations-grid">
          <div className="creation-card">
            <img
              src="/images/nearby.png"
              alt="Project 1"
              className="project-image"
            />

            <div className="project-details">
              <h3 className="project-title">Nearbymart</h3>
              <p style={{ letterSpacing: 0.2 }}>
                <strong>Nearbymart Hypermarket</strong> brings world-class
                quality-first products and convenience to your neighborhood at
                prices you will love every day.
              </p>
              <a
                href="https://www.thenearbymart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-btn"
              >
                Go to Site
              </a>
            </div>
          </div>
          <div className="creation-card">
            <img
              src="/images/aj.png"
              alt="Project 1"
              className="project-image"
            />

            <div className="project-details">
              <h3 className="project-title">AJ Homes & Lettings Ltd</h3>
              <p style={{ letterSpacing: 0.2 }}>
                <strong> AJ Homes & Lettings Ltd</strong> is{" "}
                <strong>Birmingham’s</strong> leading property agency,
                presenting their services, property listings, and dedication to
                high-quality lettings and sales.
              </p>
              <a
                href="https://www.ajhomeslettings.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-btn"
              >
                Go to Site
              </a>
            </div>
          </div>
          <div className="creation-card">
            <img
              src="/images/image.png"
              alt="Project 1"
              className="project-image"
            />

            <div className="project-details">
              <h3 className="project-title">Komath & Associates</h3>
              <p>
                <strong>Komath & Associates </strong> is a distinguished law
                firm based in Kochi, known for delivering exceptional legal
                services for around two decades with a team of highly
                experienced and dedicated professionals.
              </p>
              <a
                href="https://komathassociates.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-btn"
              >
                Go to Site
              </a>
            </div>
          </div>
          <div className="creation-card">
            <img
              src="/images/shibi.png"
              alt="Project 1"
              className="project-image"
            />

            <div className="project-details">
              <h3 className="project-title">N'Able by Shibi Anand</h3>
              <p>
                <strong>N'Able by Shibi Anand</strong> empowers individuals and
                educational institutions to realize their full potential through
                personalized support, transformative learning experiences, and
                expert consultation.
              </p>
              <a
                href="https://shibianand.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-btn"
              >
                Go to Site
              </a>
            </div>
          </div>
          <div className="creation-card">
            <img
              src="/images/evolvers.png"
              alt="Project 1"
              className="project-image"
            />

            <div className="project-details">
              <h3 className="project-title">Evolvers Career Clinic</h3>
              <p>
                <strong>Evolvers Career Clinic</strong> is a career
                transformation partner offering recruiter-backed resumes,
                LinkedIn profiles, interview prep, and global application
                support tailored to real hiring standards.
              </p>
              <a
                href="https://www.evolverscareerclinic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-btn"
              >
                Go to Site
              </a>
            </div>
          </div>
          <div className="creation-card">
            <img
              src="/images/ipdp.png"
              alt="Project 1"
              className="project-image"
            />

            <div className="project-details">
              <h3 className="project-title">
                Intern-Preneur Development Program (IPDP)
              </h3>
              <p>
                <strong>IPDP</strong> is India’s exclusive online finishing
                school, helping students, graduates, and professionals boost
                employability through real-world skills and career-ready
                training.
              </p>
              <a
                href="https://internpreneur.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-btn"
              >
                Go to Site
              </a>
            </div>
          </div>
        </div>
        <div className="creations-header">
          <a
            rel="noopener noreferrer"
            className="projects-btn"
            href="/projects"
          >
            {`Explore More Projects >`}
          </a>
        </div>
      </section>

      <section className="why-us-section">
        <div className="why-us-header">
          <h2>
            Why <span className="highlight">Pixlverse?</span>
          </h2>
          <p>
            We don’t just build websites. We build digital experiences backed by
            clean code, thoughtful design, and continuous support. Whether
            you're launching or scaling, we stand by you from concept to code to
            customer.
          </p>
        </div>

        <div className="why-us-grid">
          <div className="why-us-card">
            <FaCheckCircle
              className="why-us-icon"
              style={{ color: "#24b700" }}
            />
            <h3>Pixel-perfect execution</h3>
          </div>

          <div className="why-us-card">
            <FaBolt className="why-us-icon" style={{ color: "#ffbf00" }} />
            <h3>Optimized for speed and SEO</h3>
          </div>

          <div className="why-us-card">
            <FaComments className="why-us-icon" style={{ color: "#00abff" }} />
            <h3>Ongoing support & collaboration</h3>
          </div>

          <div className="why-us-card">
            <FaBrain className="why-us-icon" style={{ color: "#ff0052" }} />
            <h3>Tech + design strategy</h3>
          </div>
        </div>
      </section>

      <section className="contact-cta-section">
        <div className="contact-cta-box">
          <div className="contact-cta-image" style={{ width: "10%" }}>
            <img src="/images/jigsaw.png" alt="CTA" />
          </div>

          <div className="contact-cta-content">
            <h2>Not sure where to start?</h2>
            <p>
              Let’s craft a website that perfectly aligns with your business
              goals — while guiding you seamlessly from the very first idea to a
              successful launch and beyond.
            </p>
            <a href="/contact" className="contact-cta-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="testimonial-section">
        <h2 className="testimonial-title">What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <h3>{t.name}</h3>
              <p className="designation">{t.designation}</p>
              <p className="message">“{t.message}”</p>
            </div>
          ))}
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default Home;
