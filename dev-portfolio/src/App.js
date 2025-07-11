import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Changed

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
    <Router> {/* ✅ HashRouter ensures paths work on refresh */}
      <AppWrapper />
    </Router>
  );
}

export default App;
