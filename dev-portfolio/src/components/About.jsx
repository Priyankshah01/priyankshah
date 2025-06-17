import React, { useEffect, useState } from "react";
import "./About.css"; // keep your styles

function About() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-admin-api-kria.onrender.com/api/skills")
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error("Error loading skills:", err));
  }, []);

  return (
    <div className="info-row">
      <div className="info-label">↳ Skills</div>

      <div className="info-text info-services">
        <section id="skills" className="section skills">
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span className="skill-tag" key={skill._id}>{skill.name}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
