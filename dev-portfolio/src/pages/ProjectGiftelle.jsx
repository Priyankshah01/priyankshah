import React from "react";
import ProjectIntro from "../components/ProjectIntro";
import Footer from "../components/Footer";
import ConnectSection from "../components/ConnectSection";
import giftelleImg1 from "../data/images/giftelle-ui.jpg";
import giftelleImg2 from "../data/images/Giftelle-ui2.jpg";

const ProjectGiftelle = () => {
  return (
    <>
      <ProjectIntro
        title="Giftelle Platform"
        subtitle="Gifting Marketplace Platform"
        overview="Giftelle is a curated gifting platform offering floral arrangements, gourmet baskets, and personalized items. The site includes a CMS, vendor analytics, and custom product flows."
        services="Product Design, UX/UI, Frontend Dev"
        date="2025"
        agency="Capstone Project"
        toolsUsed={["Figma", "HTML", "CSS", "JavaScript", "React", "MongoDB", "Express"]}
        images={[giftelleImg1, giftelleImg2]}
        whatwasmyrole={`• Led UX research and user flow design\n• Created high-fidelity wireframes\n• Built dynamic forms and admin dashboard\n• Integrated backend with API & CMS views`}
      />
      <ConnectSection />
      <Footer />
    </>
  );
};

export default ProjectGiftelle;