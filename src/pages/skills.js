import React from "react";
import "../App.css";
import Wrapper from "../components/wrapper.js";
import SkillBar from "react-skillbars";

//include skills here too!
const skills = [
  { type: "HTML/CSS", level: 73 },
  { type: "SQL", level: 68 },
  { type: "Javascript", level: 67 },
  { type: "Python", level: 65 },
  { type: "Java", level: 60 },
  { type: "C", level: 45 },
  { type: "PHP", level: 40 },
];

const colors = {
  bar: "#27AE60",
  title: {
    text: "white",
    background: "green",
  },
};

const SkillsPage = () => {
  return (
    <Wrapper>
      <div class="skill-box">
        <h1>
          <b>Skills</b>
        </h1>
        <div class="skill-bars">
          <SkillBar
            skills={skills}
            colors={colors}
            animationDelay={400}
            animationDuration={2000}
            height={"5vh"}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SkillsPage;
