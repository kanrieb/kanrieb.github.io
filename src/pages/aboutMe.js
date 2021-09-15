import React from "react";
import "../App.css";
import Wrapper from "../components/wrapper.js";

//include skills here too!
const AboutPage = () => {
  return (
    <Wrapper>
      <h1>About Me</h1>
      <p>
        Welcome to my website! My name is Kathryn Rieb, and I am currently
        studying software engineering at the University of Victoria. I enjoy
        learning and maintaining a variety of skills, and my current projects
        range from making android apps using SQL databases to creating
        VR-compatible games in Unity. Outside of programming, my other interests
        include volunteering, rock climing, reading, and baking.
      </p>
    </Wrapper>
  );
};

export default AboutPage;
