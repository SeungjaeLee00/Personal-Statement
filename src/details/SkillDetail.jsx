import React, { forwardRef } from "react";

import Card from "../components/Card";
import "../style/details/SkillDetail.css";

import reactImg from "../assets/react.png";
import cssImg from "../assets/css.png";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/js.png";
import nodejsImg from "../assets/node.png";
import mongoDBImg from "../assets/mongo.png";
import pythonImg from "../assets/python.png";
import githubImg from "../assets/git.png";
import awsImg from "../assets/aws.png";

const skillDetail = forwardRef((props, ref) => {
  return (
    <div className="Skills" ref={ref}>
      <h1 className="skill-title">
        <a name="Skills">Tech Skills</a>
      </h1>
      <div className="card-wrapper">
        <Card className="front-card">
          <h3 className="front-title">Frontend</h3>
          <div className="front-img">
            <img src={cssImg} alt="CSS" />
            <img src={htmlImg} alt="HTML" />
            <img src={jsImg} alt="JS" />
            <img src={reactImg} alt="React" />
          </div>
        </Card>
        <Card className="back-card">
          <h3 className="back-title">Backend</h3>
          <div className="back-img">
            <img src={nodejsImg} alt="Node.js" />
            <img src={mongoDBImg} alt="MongoDB" />
            <img src={awsImg} alt="Aws" />
          </div>
        </Card>
        <Card className="etc-card">
          <h3 className="etc-title">ETC</h3>
          <div className="etc-img">
            <img src={githubImg} alt="Github" />
            <img src={pythonImg} alt="Python" />
          </div>
        </Card>
      </div>
    </div>
  );
});

export default skillDetail;
