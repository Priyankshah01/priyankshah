import React from "react";
import "./ProjectIntro.css";

const ProjectIntro = ({
  title,
  subtitle,
  overview,
  services = "Not specified",
  agency = "Not specified",
  whatwasmyrole = "Not specified",
  images = [],
  toolsUsed = [],
  problem,
  solution,
  designProcess
}) => {
  return (
    <div className="project-intro">
      <h1 className="project-intro-title">{title}</h1>
      <h2 className="project-intro-subtitle">{subtitle}</h2>

      {/* Overview Section */}
      <div className="project-intro-section">
        <div className="project-intro-label">↳ Overview</div>
        <div className="project-intro-text">
          {overview || "No overview available."}
        </div>
      </div>

      <hr className="project-divider" />

      {/* Problem */}
      {problem && (
        <>
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Problem</div>
            <div className="project-intro-text">{problem}</div>
          </div>
          <hr className="project-divider" />
        </>
      )}

      {/* Solution */}
      {solution && (
        <>
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Solution</div>
            <div className="project-intro-text">{solution}</div>
          </div>
          <hr className="project-divider" />
        </>
      )}

      {/* Design Process */}
      {designProcess && (
        <>
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Design Process</div>
            <div className="project-intro-text">{designProcess}</div>
          </div>
          <hr className="project-divider" />
        </>
      )}

      {/* Details Section */}
      <div className="project-intro-section">
        <div className="project-intro-label">↳ Details</div>
        <div className="project-intro-details">
          <div className="project-detail-item">
            <strong>Services</strong>
            <span>{services}</span>
          </div>
          <div className="project-detail-item">
            <strong>Agency</strong>
            <span>{agency}</span>
          </div>
        </div>
      </div>

      {/* Tools Used */}
      {toolsUsed.length > 0 && (
        <>
          <hr className="project-divider" />
          <div className="project-intro-section">
            <div className="project-intro-label">↳ Tools Used</div>
            <div className="project-intro-text">
              <section className="section tools">
                <div className="skill-cloud1">
                  {toolsUsed.map((tool, index) => (
                    <span className="skill-tag" key={index}>
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </>
      )}

      {/* Images */}
      {images.length > 0 && (
        <>
          <hr className="project-divider" />
          <div className="project-intro-images">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Project visual ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* What was my role */}
      <hr className="project-divider" />
      <div className="project-intro-section">
        <div className="project-intro-label">↳ What was my role</div>
        <div className="project-intro-text">{whatwasmyrole}</div>
      </div>
    </div>
  );
};

export default ProjectIntro;
