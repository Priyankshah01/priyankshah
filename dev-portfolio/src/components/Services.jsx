import React from "react";
import "./Services.css";

const services = [
  {
    title: "UI/UX Design",
    description: "Creating clean, user-centered interfaces through wireframes, high-fidelity mockups, and design systems.",
  },
  {
    title: "Prototyping & Interaction",
    description: "Building functional prototypes in Figma or Framer to visualize flows and gather feedback early.",
  },
  {
    title: "Frontend Development",
    description: "Implementing responsive, accessible designs using React, HTML, CSS, Tailwind, and JavaScript.",
  },
  {
    title: "Usability & Testing",
    description: "Running tests and research sessions to refine designs based on real user feedback.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>What I Offer</h2>
        <p>Services tailored to deliver meaningful, functional, and beautiful digital experiences.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
