import React from "react";
import "../App.css";
import "react-vertical-timeline-component/style.min.css";
import { Background } from "../components/wrapper.js";

const Resume = () => {
  return (
    <Background>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1lZzuSIkPfHte_xY9SSfFLTq0bgQb53-a/preview"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
      </div>
    </Background>
  );
};

export default Resume;
