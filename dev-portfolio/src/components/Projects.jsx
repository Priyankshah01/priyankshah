import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";

const ProjectShowcase = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState([]);
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

  useEffect(() => {
    fetch("https://portfolio-admin-api-kria.onrender.com/api/projects") // ✅ CORRECT PATH
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error loading projects:", err));
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
            key={project._id}
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            <img
              src={project.image1}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-meta">
              <span>{new Date(project.createdAt).getFullYear()}</span>
              <span>{project.status || "Design"}</span>
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