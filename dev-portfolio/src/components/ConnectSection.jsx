import React, { useState } from "react";
import ConnectModal from "./ConnectModal";
import "./ConnectSection.css";

const GetStarted = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="get-started-section">
      <h2 className="get-started-title">Let’s Work Together</h2>
      <p className="get-started-subtext">
        Have a project in mind? Let's bring it to life.
      </p>
      <button className="get-started-button" onClick={() => setIsOpen(true)}>
        Contact Me
      </button>

      <ConnectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default GetStarted;
