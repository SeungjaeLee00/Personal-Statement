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
  const [visibleSections, setVisibleSections] = useState([]);

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: ArchivingRef, id: "archiving" },
        { ref: SkillsRef, id: "skills" },
        { ref: ContactRef, id: "contact" },
      ];

      const visibleSections = sections
        .filter(({ ref }) => {
          const rect = ref.current.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 4
          );
        })
        .map(({ id }) => id);

      setVisibleSections(visibleSections);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header
        moveToHome={moveToHomeHandler}
        moveToArc={moveToArcHandler}
        moveToSkill={moveToSkillsHandler}
        moveToContact={moveToContactHandler}
      />
      <AboutDetail ref={HomeRef} moveToArc={moveToHomeHandler} />
      {/* <ArchivingDetail ref={ArchivingRef} />
      <SkillDetail ref={SkillsRef} />
      <ContactDetail ref={ContactRef} /> */}
      <div
        ref={ArchivingRef}
        className={`section ${
          visibleSections.includes("archiving") && "visible"
        }`}
      >
        <ArchivingDetail />
      </div>
      <div
        ref={SkillsRef}
        className={`section ${visibleSections.includes("skills") && "visible"}`}
      >
        <SkillDetail />
      </div>
      <div
        ref={ContactRef}
        className={`section ${
          visibleSections.includes("contact") && "visible"
        }`}
      >
        <ContactDetail />
      </div>
      <TopButton />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
