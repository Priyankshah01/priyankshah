import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectIntro from "../components/ProjectIntro";
import Footer from "../components/Footer";
import ConnectionSection from "../components/ConnectSection";

function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("https://portfolio-admin-api.onrender.com/api/projects")
      .then(res => res.json())
      .then(data => {
        const matched = data.find(p => p.slug === slug);
        setProject(matched);
      })
      .catch(err => console.error("Failed to load project", err));
  }, [slug]);

  if (!project) {
    return <div style={{ padding: "4rem", textAlign: "center" }}>Project not found.</div>;
  }

  return (
    <>
      <ProjectIntro
        title={project.title}
        subtitle={project.subtitle}
        overview={project.overview}
        services={project.services}
        date={project.date}
        agency={project.agency}
        toolsUsed={project.tools}
        images={project.images}
        whatwasmyrole={project.whatwasmyrole}
        image={project.image || []}
      />
      <ConnectionSection />
      <Footer />
    </>
  );
}

export default ProjectDetail;
