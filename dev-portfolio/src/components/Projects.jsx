import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import featuredProjects from "../data/featuredProject"; // ✅ hardcoded projects
import "./Project.css";

const ProjectShowcase = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState(featuredProjects); // ✅ show featured immediately
  const navigate = useNavigate();

  // 👁️‍🗨️ Animate on scroll
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

  // 🌐 Fetch backend projects and combine with featured
  useEffect(() => {
    fetch("https://portfolio-admin-api-kria.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const combined = [...featuredProjects, ...data];
        setProjects(combined);
      })
      .catch((err) => {
        console.error("Error loading backend projects:", err);
        // Do nothing – already showing featured projects
      });
  }, []);

  return (
    <section
      className={`project-grid-section ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <div className="project-title">
        <h2>Projects</h2>
      </div>

      <div className="project-grid-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.slug || project._id || index}
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            <img
              src={project.image1}
              alt={project.title}
              className="project-image"
              loading="lazy"
            />
            <div className="project-meta">
              <span>
                {new Date(
                  project.createdAt || project.date || "2024-01-01"
                ).getFullYear()}
              </span>
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
