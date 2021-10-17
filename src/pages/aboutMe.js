import React from "react";
import "../App.css";
import Wrapper from "../components/wrapper.js";
import surf from "../images/surfing.png";
import hiking from "../images/hiking.jpg";
import "@fortawesome/fontawesome-free/js/all.js";

//include skills here too!
const AboutPage = () => {
  return (
    <Wrapper>
      <div class="flex-about">
        <div class="about-col">
          <img src={hiking} class="aboutImg" />
        </div>
        <div class="about-col">
          <div class="about-text">
            <div class="sub">HELLO, I AM</div>
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
            <div class="contact">
              <i class="far fa-envelope"></i> <p1>&emsp;kanrieb@gmail.com</p1>{" "}
              <br />
              <i class="fas fa-map-marker-alt"></i>{" "}
              <p1>&emsp;&nbsp;Victoria, BC</p1>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
