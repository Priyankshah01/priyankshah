import React, { useState, useEffect } from "react";
import "./About.css";


function About() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("https://portfolio-admin-api-kria.onrender.com/api/skills")
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.error("Error loading skills:", err));
    }, []);


    return (
        <section className="info-section">
            <h1 className="info-title">Info</h1>

            <div className="info-row">
                <div className="info-label">↳ Overview</div>
                <div className="info-text">
                    <p>
                        Hi, I’m Priyank — a UX/UI Designer with a developer’s logic and a designer’s heart.
                        I craft digital experiences that feel intuitive, look beautiful, and perform effortlessly.
                        My journey includes freelancing, co-op roles, and academic recognition in design.
                    </p>
                </div>
            </div>

            <div className="info-row">
                <div className="info-label">↳ Services</div>
                <div className="info-services">
                    <ul>
                        <li>UX/UI Design</li>
                        <li>Product Design</li>
                        <li>Responsive Web Design</li>
                    </ul>
                    <ul>
                        <li>Frontend Development</li>
                        <li>Design Systems</li>
                        <li>Brand Identity</li>
                    </ul>
                </div>
            </div>

            <div className="info-row">
                <div className="info-label">↳ Experince</div>

                <div className="info-text info-services">
                    <ul>
                        <strong>HRX Connect</strong>
                        <li>
                            At HRX Connect, a talent intelligence company, I led the redesign of internal dashboards and marketing pages to support the product and growth teams. I focused on improving the usability and visual consistency of their web platform.
                        </li>
                    </ul>
                    <ul>
                        <strong>CanSTEM</strong>
                        <li>At Canstem, an immigration and educational consultancy, I revamped their entire website and student portal interface. The goal was to make their digital experience more accessible, professional, and trustworthy.</li>
                    </ul>
                    <ul>
                        <strong>Webclues Infothech LLP.</strong>
                        <li>As a design intern at WebClues, I worked closely with the senior design team to support mobile and web-based client projects. It was my first deep dive into industry-level design processes.</li>
                    </ul>

                </div>
            </div>

            <div className="info-row">
                <div className="info-label">↳ Skills</div>

                <div className="info-text info-services">
                    <section id="skills" className="section skills">
                        <div className="skill-cloud">
                            <span className="skill-tag">Test</span>
                            {skills.map((skill) => (
                                <span className="skill-tag" key={skill._id}>{skill.name}</span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default About;