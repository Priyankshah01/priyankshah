import React from "react";
import "./ProjectIntro.css";

const ProjectIntro = ({ title, subtitle, overview, services, date, agency, whatwasmyrole, images, image = [], toolsUsed = []
}) => {
  return (
    <div className="project-intro">
      <h1 className="project-intro-title">{title}</h1>
      <h2 className="project-intro-subtitle">{subtitle}</h2>

      <div className="project-intro-section">
        <div className="project-intro-label">↳ Overview</div>
        <div className="project-intro-text">{overview}</div>
      </div>

      <hr className="project-divider" />

      <div className="project-intro-section">
        <div className="project-intro-label">↳ Details</div>
        <div className="project-intro-details">
          <div className="project-detail-item">
            <strong>Services</strong>
            <span>{services}</span>
          </div>
          <div className="project-detail-item">
            <strong>Date</strong>
            <span>{date}</span>
          </div>
          <div className="project-detail-item">
            <strong>Agency</strong>
            <span>{agency}</span>
          </div>
        </div>
      </div>

      <hr className="project-divider" />

       {/* ✅ Tools Used Section */}
      {toolsUsed.length > 0 && (
        <div className="project-intro-section">
        <div className="project-intro-label">↳ Tools Used</div>
          <div className=" project-intro-text">
            <section className="section tools">
              <div className="skill-cloud1">
                {toolsUsed.map((tool, index) => (
                  <span className="skill-tag" key={index}>{tool}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}

      <hr className="project-divider" />

      {images.length > 0 && (
        <div className="project-intro-images">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Giftelle preview ${index + 1}`} />
          ))}
        </div>
      )}
      <hr className="project-divider" />

      <div className="project-intro-section">
        <div className="project-intro-label">↳ What was my role</div>
        <div className="project-intro-text">{whatwasmyrole}</div>
      </div>

      <hr className="project-divider" />

      {images.length > 0 && (
        <div className="project-intro-images">
          {image.map((img, index) => (
            <img key={index} src={img} alt={`Giftelle preview ${index + 1}`} />
          ))}
        </div>
      )}
    </div>



  );
};

export default ProjectIntro;
