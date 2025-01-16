import React, { useRef, useState, useEffect } from "react";

import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TopButton from "./components/TopBotton";

import AboutDetail from "./details/AboutDetail";

function App() {
  const HomeRef = useRef(null);

  const moveToHomeHandler = () => {
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header moveToHome={moveToHomeHandler} />
      <AboutDetail ref={HomeRef} moveToArc={moveToHomeHandler} />
      <TopButton />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
