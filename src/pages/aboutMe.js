import React from "react";
import "../App.css";
import Wrapper from "../components/wrapper.js";
import hiking from "../images/hiking.jpg";
import "@fortawesome/fontawesome-free/js/all.js";

//include skills here too!
const AboutPage = () => {
  return (
    <Wrapper>
      <div className="flex-about">
        <div className="about-col about-col1">
          <img src={hiking} className="aboutImg" />
        </div>
        <div className="about-col about-col2">
          <div className="about-text">
            <div className="sub">HELLO, I AM</div>
            <h1>
              <b>KATHRYN RIEB</b>
            </h1>
            <p>
              I am currently pursuing a Software Engineering degree at the
              University of Victoria. I enjoy learning and maintaining a variety
              of skills, and I have done software development work in
              front/back-end web, database management, and testing. I have also
              explored mobile app creation and video game development.
            </p>
            <div className="contact">
              <i className="far fa-envelope"></i>{" "}
              <p1>&emsp;kanrieb@gmail.com</p1>
              <br />
              <i className="fas fa-map-marker-alt"></i>{" "}
              <p1>&emsp;&nbsp;Victoria, BC</p1>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
