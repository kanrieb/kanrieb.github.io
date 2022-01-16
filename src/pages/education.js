import React from "react";
import "../App.css";
import { Background } from "../components/wrapper.js";
import "react-vertical-timeline-component/style.min.css";

const EducationPage = () => {
  return (
    <Background>
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          textAlign: "left",
          borderRadius: "25px",
          boxShadow: "3px 3px grey",
          overflowY: "auto",
          paddingRight: "100px",
          paddingLeft: "100px",
        }}
      ></div>
    </Background>
  );
};

export default EducationPage;
