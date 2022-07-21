import React from "react";
import "../App.css";
import Wrapper from "../components/wrapper.js";
import portrait from "../images/portrait.jpg";
import "@fortawesome/fontawesome-free/js/all.js";

//include skills here too!
const AboutPage = () => {
  return (
    <Wrapper>
      <div className="flex-about">
        <div className="about-col about-col1">
          <img src={portrait} className="aboutImg" />
        </div>
        <div className="about-col about-col2">
          <div className="about-text">
            <div className="sub">HELLO, I AM</div>
            <h1>
              <b>KATHRYN RIEB</b>
            </h1>
            <p>
              I am a Software Engineering graduate from the University of
              Victoria, and I currently work as front-end developer for Assembly
              Technologies. I enjoy learning and maintaining a variety of
              skills, and I have work experience in front/back-end web
              development, database management, CI/CD management, and testing. I
              also received a degree specialization in data mining and
              artificial intelligence.
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
