import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectIntro from "../components/ProjectIntro";
import Footer from "../components/Footer";
import ConnectionSection from "../components/ConnectSection";
import featuredProjects from "../data/featuredProject"; // ✅ Local fallback

function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://portfolio-admin-api-kria.onrender.com/api/projects/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => setProject(data))
      .catch(() => {
        const localProject = featuredProjects.find(p => p.slug === slug);
        if (localProject) {
          setProject(localProject);
        } else {
          setProject(null);
        }
      });
  }, [slug]);

  if (!project) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        Loading or Project not found.
      </div>
    );
  }

  return (
    <>
      <ProjectIntro
        title={project.title}
        subtitle={project.tag || project.subtitle}
        overview={project.summary || project.overview}
        services={project.services || "UX/UI Design, Frontend Dev"}
        agency={project.agency || "—"}
        toolsUsed={project.tools || project.toolsUsed || []}
        images={project.images || [project.image1, project.image2].filter(Boolean)}
        whatwasmyrole={Array.isArray(project.approach)
          ? project.approach.join("\n")
          : project.whatwasmyrole}
        problem={project.problem}
        solution={project.solution}
        designProcess={project.designProcess}
      />
      <ConnectionSection />
      <Footer />
    </>
  );
}

export default ProjectDetail;
