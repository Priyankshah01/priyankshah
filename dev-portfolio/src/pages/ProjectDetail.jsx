import React from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
// import "./ProjectDetail.css";
import ProjectIntro from "../components/ProjectIntro";
import Footer from "../components/Footer";
import ConnectionSection from "../components/ConnectSection";


function ProjectDetail() {
    const { slug } = useParams();
    const project = projectData[slug];

    console.log(slug);

    if (!project) {
        return <div style={{ padding: "4rem", textAlign: "center" }}>Project not found.</div>;
    }

    return (
        <>
            {slug === "giftelle" && (
                <ProjectIntro
                    title="Giftelle"
                    subtitle="Smart Gifting Platform Connecting People & Local Vendors"
                    overview="Giftelle is a personalized gifting experience that reduces decision fatigue and enhances local vendor visibility. I led the UX design and frontend development to streamline the shopping journey — from discovery to checkout — making the process feel human and intuitive."
                    services="UX/UI Design, Frontend Development"
                    date="March 2024"
                    agency="HRX Connect"
                    toolsUsed={[
                        "Figma",
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "User Testing",
                        "Responsive Design",
                        "Prototyping"
                    ]}
                    images={[
                        require("../images/Giftelle-ui1.jpg"),
                        require("../images/Giftelle-ui2.jpg"),
                        require("../images/Giftelle-ui3.jpg")
                    ]}
                    whatwasmyrole="My role in the project Worked together with the designer Lucija, on creating a new website for Blank Farm.
            Converted the designs from Figma onto Webflow.
            Setup the e-commerce side of the Website.
            Integrated all the necessary APIs and third party tools to allow purchases and transactions.
            Created different variations of the imagery to showcase the product."
                    image={[
                        require("../images/Giftelle-ui1.jpg")
                    ]}

                />
            )}
            {slug === "schoolregistration" && (
                <ProjectIntro
                    title="School Registration System"
                    subtitle="A Streamlined Digital Platform for Managing Private School Enrollments"
                    overview="The School Registration System is a centralized web-based platform that replaces outdated, manual enrollment methods used by private schools. Our goal was to create a user-friendly experience for both administrators and parents. I led the design and development efforts to improve workflow, reduce paperwork, and create a modern interface tailored for private institutions."
                    services="UX/UI Design, Frontend Development, Database Architecture"
                    date="March 2024"
                    agency="Capstone Project"
                    toolsUsed={[
                        "Figma",
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "User Testing",
                        "Responsive Design",
                        "Prototyping"
                    ]}
                    images={[
                        require("../images/Giftelle-ui1.jpg"),
                        require("../images/Giftelle-ui2.jpg"),
                        require("../images/Giftelle-ui3.jpg")
                    ]}
                    whatwasmyrole="I collaborated with a small team to plan and deliver this capstone project for a real-world private school client.
- Conducted stakeholder interviews to understand legacy system pain points
- Designed wireframes and task flows for admin and parent portals
- Built out responsive frontend with HTML, CSS, and JavaScript
- Designed and normalized the MySQL database structure
- Implemented document upload and email verification flows"
                    image={[
                        require("../images/Giftelle-ui1.jpg")
                    ]}
                />
            )}

            {slug === "basics" && (
                <ProjectIntro
                    title="Basics"
                    subtitle="Basics is a cutting-edge Fashion E-commerce mobile app designed to enhance your shopping experience."
                    overview="With its sleek and intuitive interface, you can effortlessly browse the latest trends, receive personalized recommendations, and make seamless purchases. Enjoy vibrant visuals and exclusive deals, all tailored to keep you stylish on the go. Elevate your fashion game with the Basics app, where style meets convenience."
                    services="UX/UI Design, Frontend Development, Database Architecture"
                    date="March 2022"
                    agency="WebClues Infotech LLP"
                    toolsUsed={[
                        "Figma",
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "User Testing",
                        "Responsive Design",
                        "Prototyping"
                    ]}
                    images={[
                        require("../images/Basics-ui1.jpg"),
                        require("../images/Basics-ui2.jpg"),
                        require("../images/Basics-ui3.jpg")
                    ]}
                    whatwasmyrole="I collaborated with a small team to plan and deliver this capstone project for a real-world private school client.
- Conducted stakeholder interviews to understand legacy system pain points
- Designed wireframes and task flows for admin and parent portals
- Built out responsive frontend with HTML, CSS, and JavaScript
- Designed and normalized the MySQL database structure
- Implemented document upload and email verification flows"
                    image={[
                        require("../images/Basics-ui4.jpg")
                    ]}
                />
            )}


            <ConnectionSection />
            <Footer />
        </>

    );


}
export default ProjectDetail;