import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";
import giftelleImg from '../images/Giftelle-ui1.jpg';
import schoolImg from '../images/School-ui1.jpg';
import basicsImg from '../images/Basics-ui1.jpg';

const projects = [
  {
    slug: "giftelle",
    title: "Giftelle",
    year: 2024,
    status: "Design",
    image: giftelleImg
  },
  // Add more projects with unique slugs
  {
    slug: "schoolregistration",
    title: "School Registration System",
    year: 2024,
    status: "Design & Development",
    image: schoolImg
  },
    {
    slug: "basics",
    title: "Basics: A online Clothing Store",
    year: 2022,
    status: "Design & Development",
    image: basicsImg
  },
];

const ProjectShowcase = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`project-grid-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
      <div className="project-title">
        <h2>Projects</h2>
      </div>
      <div className="project-grid-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-meta">
              <span>{project.year}</span>
              <span>{project.status}</span>
            </div>
            <hr className="project-divider" />

            <h3 className="project-title">
              {project.title} <span className="arrow">↗</span>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;