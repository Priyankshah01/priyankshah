import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import Hero from "./components/Hero";
import Projects from "./components/Projects";

import About from "./components/About";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

import ProjectDetail from "./pages/ProjectDetail";



function AppWrapper() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hey"><Hero /></section>
              <section id="work"><Projects /></section>

              <section id="story"><About /></section>
              <section id="chat"><ConnectSection /></section>
              {/* <Services /> */}
              <Footer />
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />


      </Routes>

    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
