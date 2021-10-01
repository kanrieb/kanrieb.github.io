import React from "react";
import { ProductCard } from "react-ui-cards";
import "../App.css";
import Wrapper from "../components/wrapper.js";
import goodfriend0 from "../images/project-pictures/goodfriend0.jpeg";
import goodfriend1 from "../images/project-pictures/goodfriend1.jpeg";

import surf from "../images/surfing.png";

//include skills here too!
const ProjectsPage = () => {
  return (
    <Wrapper>
      <div class="box">
        <h1>
          <b>Projects</b>
        </h1>
        <div className="card-container">
          <ProductCard
            price="May - Aug 2021"
            photos={[surf]}
            productName="Checkfront Daily Companion"
            description="Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet."
            buttonText="Github"
            url="https://github.com/nukeop"
          />
          <ProductCard
            price="May - Aug 2021"
            photos={[surf]}
            productName="Malicious URL Detection"
            description="Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet."
            buttonText="Github"
            url="https://github.com/nukeop"
          />
          <ProductCard
            photos={[goodfriend0, goodfriend1]}
            price="Jan 2021"
            productName="GoodFriend Web App"
            description="Collaborated with a small group of programmers using Git to create a web application for the SheHacks Hackathon.
          We designed a mockup, implemented front- and back-end, and launched app on Heroku within 36 hours. 
          The front-end was implemented using the Python framework Flask, HTML, and CSS, and additionally
          created and connected an Apache Cassandra database for back-end functionality using CQL.
"
            buttonText="Devpost"
            url="https://devpost.com/software/good-friend"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
