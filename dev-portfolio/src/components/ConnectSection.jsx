import React from "react";
import "./ConnectSection.css";

const GetStarted = () => {
  return (
    <section className="get-started-section">
      <h2 className="get-started-title">Let’s Work Together</h2>
      <p className="get-started-subtext">
        Have a project in mind? Let's bring it to life.
      </p>
      <a href="#chat" className="get-started-button">
        Contact Me
      </a>
    </section>
  );
};

export default GetStarted;