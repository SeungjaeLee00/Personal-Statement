import React, { forwardRef } from "react";

import Card from "../components/Card";
import "../style/details/ArchivingDetail.css";

const ArchivingDetail = forwardRef((props, ref) => {
  return (
    <div className="archiving" ref={ref}>
      <h1 className="archiving-title">
        <a name="Archiving">Archiving</a>
      </h1>
      <div className="card-wrapper">
        <Card className="github-card">
          <h2 className="github-title">GitHub</h2>
          <a href="https://github.com/SeungjaeLee00">
            github.com/SeungajaeLee00
          </a>
          <p>작업한 소스를 업로드해 둔 저장소입니다.</p>
        </Card>
        <Card className="blog-card">
          <h2 className="blog-title">Blog</h2>
          <a href="https://jaejae-sosp.tistory.com">JAEJAE imojeomo</a>
          <p>공부 기록, 프로젝트 진행 과정을 기록해둔 블로그입니다.</p>
        </Card>
      </div>
    </div>
  );
});

export default ArchivingDetail;
