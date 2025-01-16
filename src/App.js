import React, { useRef, useState, useEffect } from "react";

import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TopButton from "./components/TopBotton";

import AboutDetail from "./details/AboutDetail";
import ArchivingDetail from "./details/ArchivingDetail";
import SkillDetail from "./details/SkillDetail";
import ContactDetail from "./details/ContactDetail";

function App() {
  const HomeRef = useRef(null);
  const ArchivingRef = useRef(null);
  const SkillsRef = useRef(null);
  const ContactRef = useRef(null);

  const moveToHomeHandler = () => {
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToArcHandler = () => {
    ArchivingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToSkillsHandler = () => {
    SkillsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToContactHandler = () => {
    ContactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header
        moveToHome={moveToHomeHandler}
        moveToArc={moveToArcHandler}
        moveToSkill={moveToSkillsHandler}
        moveToContact={moveToContactHandler}
      />
      <AboutDetail ref={HomeRef} moveToArc={moveToHomeHandler} />
      <ArchivingDetail ref={ArchivingRef} />
      <SkillDetail ref={SkillsRef} />
      <ContactDetail ref={ContactRef} />
      <TopButton />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
