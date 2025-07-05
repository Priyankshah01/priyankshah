import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectIntro from "../components/ProjectIntro";
import Footer from "../components/Footer";
import ConnectionSection from "../components/ConnectSection";

function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://portfolio-admin-api-kria.onrender.com/api/projects/${slug}`) // ✅ CORRECT PATH
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error("Project not found", err));
  }, [slug]);

  if (!project) {
    return <div style={{ padding: "4rem", textAlign: "center" }}>Loading or Project not found.</div>;
  }

  return (
    <>
      <ProjectIntro
        title={project.title}
        subtitle={project.tag}
        overview={project.summary}
        services={project.services || "UX/UI Design, Frontend Dev"}
        // date={project.date}
        agency={project.agency}
        toolsUsed={project.tools}
        images={project.images || []}
        whatwasmyrole={project.approach?.join("\n")}
        image={[project.image1, project.image2]}
      />
      <ConnectionSection />
      <Footer />
    </>
  );
}

export default ProjectDetail;