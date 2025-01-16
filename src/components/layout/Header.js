import React from "react";
import "../../style/components/layout/Header.css";

function Header() {
  return (
    <header className="menu-bar">
      <div className="menu-contents">
        <div className="menu-title">
          <a href="#Home" style={{ fontWeight: "bold" }}>
            About JAEJAE
          </a>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="#Archiving">Archiving</a>
          </div>
          <div className="menu-item">
            <a href="#Skills">Tech Skills</a>
          </div>
          <div className="menu-item">
            <a href="#Contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
