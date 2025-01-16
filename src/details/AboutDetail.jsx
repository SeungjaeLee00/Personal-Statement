import React, { forwardRef } from "react";
import "../style/details/AboutDetail.css";
// import myphoto from "../img/potfoilo.png";

const aboutDetail = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="home-myPhoto">
        {/* <img src={myphoto} alt="My Photo" /> */}
      </div>
      <div className="home-about">
        <h1 className="home-title">안녕하세요.</h1>
        <div className="home-text">
          <p>
            <span className="highlight">이승재</span> 입니다.
          </p>
        </div>
      </div>
    </div>
  );
});

export default aboutDetail;
