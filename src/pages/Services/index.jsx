import React from "react";
import "./services.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  {
    icon: "/images/graphic-designer.png",
    title: "Website Design",
    desc: "Pixel-Perfect Interfaces, Purpose-Driven Layouts",
    details: [
      "Custom UI/UX wireframes",
      "Responsive mobile-first layouts",
      "Brand color and typography matching",
      "Figma mockups (on request)",
    ],
  },
  {
    icon: "/images/app-development.png",
    title: "Web Development",
    desc: "Modern Code for High-Performance Sites",
    details: [
      "Static, dynamic, or full-stack websites",
      "Optimized code & lazy loading",
      "Cross-browser compatibility",
      "APIs & integrations",
    ],
  },
  {
    icon: "/images/content-management.png",
    title: "CMS Integration",
    desc: "Control Your Content. No Code Needed.",
    details: [
      "CMS selection and setup",
      "Custom templates",
      "CMS training/support",
      "SEO-friendly structure",
    ],
  },
  {
    icon: "/images/optimizing (1).png",
    title: "Maintenance & Support",
    desc: "We Stay With You, So Your Website Stays Strong",
    details: [
      "Monthly backups",
      "Performance audits",
      "Bug fixes and updates",
      "Security monitoring",
    ],
  },
  {
    icon: "/images/turnaround.png",
    title: "Website Revamps",
    desc: "Upgrade Your Digital Look Without Starting from Scratch",
    details: [
      "Visual and functional audit",
      "Redesigned UI/UX",
      "Content optimization",
      "Rebranding support",
    ],
  },
  {
    icon: "/images/search-engine-optimization.png",
    title: "SEO Optimization",
    desc: "Make Your Website Findable, From Day One",
    details: [
      "Meta titles/descriptions",
      "Page speed optimization",
      "Sitemap.xml and robots.txt setup",
      "Analytics & tracking",
    ],
  },
  {
    icon: "/images/www.png",
    title: "Domain & Hosting Support",
    desc: "We Take Care of the Technical Stuff",
    details: [
      "Domain registration help",
      "DNS & CNAME configuration",
      "Hosting setup",
      "SSL certificate installation",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="services-section">
        <h2 className="services-title">
          Our{" "}
          <span className="" style={{ color: "#bc3aab" }}>
            Services
          </span>
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="circle-accent"></span>
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <ul>
                {service.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
