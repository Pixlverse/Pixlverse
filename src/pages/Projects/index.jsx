import React from "react";
import "./projects.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Projects = () => {
  const projectsData = [
    {
      img: "/images/nearby.png",
      title: "Nearbymart",
      desc: "Nearbymart Hypermarket brings world-class quality-first products and convenience to your neighborhood at prices you will love every day.",
      link: "https://www.thenearbymart.com/",
    },
    {
      img: "/images/aj.png",
      title: "AJ Homes & Lettings Ltd",
      desc: "AJ Homes & Lettings Ltd is Birmingham’s leading property agency, presenting their services, property listings, and dedication to high-quality lettings and sales.",
      link: "https://www.ajhomeslettings.co.uk/",
    },
    {
      img: "/images/image.png",
      title: "Komath & Associates",
      desc: "Komath & Associates is a distinguished law firm based in Kochi, delivering exceptional legal services for around two decades with a team of dedicated professionals.",
      link: "https://komathassociates.in/",
    },
    {
      img: "/images/shibi.png",
      title: "N'Able by Shibi Anand",
      desc: "N'Able by Shibi Anand empowers individuals and institutions through personalized support, transformative learning experiences, and expert consultation.",
      link: "https://shibianand.com/",
    },
    {
      img: "/images/evolvers.png",
      title: "Evolvers Career Clinic",
      desc: "Evolvers Career Clinic is a career transformation partner offering recruiter-backed resumes, LinkedIn profiles, interview prep, and global application support.",
      link: "https://www.evolverscareerclinic.com/",
    },
    {
      img: "/images/ipdp.png",
      title: "Intern-Preneur Development Program (IPDP)",
      desc: "IPDP is India’s exclusive online finishing school, helping students, graduates, and professionals boost employability through career-ready training.",
      link: "https://internpreneur.in/",
    },
    {
      img: "/images/blindschool.png",
      title: "Govt. High School for the Blind",
      desc: "Government High School for the Blind, Olassa, Kottayam, is the only high school for the visually challenged owned by the Government of Kerala.",
      link: "https://blindschoolktm.com/",
    },
  ];

  return (
    <>
      <Navbar />
  <section className="projects-page reveal">
        <div className="projects-header">
          <h1>
            Our{" "}
            <span className="" style={{ color: "#bc3aab" }}>
              Creations
            </span>
          </h1>
          <p>Showcasing the work we’ve proudly delivered for our clients</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
              <div className="project-content">
                <h3 className="project-name"><a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">{project.title}</a></h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

  <section className="contact-box reveal">
          <div className="contact-content">
            <h2>Ready to Transform Your Online Presence?</h2>
            <p>
              From idea to execution, we’ll create a powerful digital presence
              that puts your brand at the forefront.
            </p>
            <a href="/contact" className="contact-btns">
              Start Your Project
            </a>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
