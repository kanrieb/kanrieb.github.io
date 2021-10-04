import React from "react";
import { ProductCard } from "react-ui-cards";
import "../App.css";
import Wrapper from "../components/wrapper.js";
import goodfriend0 from "../images/project-pictures/goodfriend0.jpeg";
import checkfront from "../images/project-pictures/checkfront.png";

import tree from "../images/project-pictures/decision-tree.png";

export function ProfileCard({
  title = "",
  description = "",
  buttonTitle = "",
  time = "",
  buttonLink = "",
  image,
}) {
  return (
    <div className="projectCard">
      <div className="pictureContainer">
        <div className="projectDate">{time}</div>
        <img src={image} className="projectPicture" />
      </div>

      <div className="projectDesc">
        <h3>{title}</h3>
        <p>{description}</p>

        {buttonTitle ? (
          <>
            <a href={buttonLink} target="_blank">
              <button>{buttonTitle}</button>
            </a>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

//include skills here too!
const ProjectsPage = () => {
  return (
    <Wrapper>
      <div class="box">
        <h1>
          <b>Projects</b>
        </h1>

        <div className="card-container">
          <ProfileCard
            title="Checkfront Daily Companion"
            description="For my degree capstone project, I worked on a team of 12 to collaborate with a 
            client company called Checkfront. Our team implemented requirements engineering, software testing 
            principles, and the Scrum methodology to develop the Daily Companion application. Ultimately, 
            we were able to successfully develop a PWA optimized for mobile using React, Typescript, and other 
            libraries (Jest, Tailwind), which displayed information from their API."
            time="May - Aug 2021"
            image={checkfront}
          />
          <ProfileCard
            title="Malicious URL Detection"
            description="As a class project (ECE 470), myself and my two other team members created a 
            Machine Learning program designed to classify URLs as malicious or benign. We implemented a 
            decision tree using Python’s Scikit-Learn library and datasets of thousands of URLs, and 
            researched relevant features for data and optimization techniques for the classifier."
            buttonTitle="Github"
            time="May - Aug 2021"
            buttonLink="https://github.com/MahumAzeem/malicious-domain-detection-using-ml"
            image={tree}
          />
          <ProfileCard
            title="GoodFriend Web App"
            description="Collaborated with a small group of programmers using Git to create a web application for the SheHacks Hackathon.
          We designed a mockup, implemented front- and back-end, and launched app on Heroku within 36 hours. 
          The front-end was implemented using the Python framework Flask, HTML, and CSS, and additionally
          created and connected an Apache Cassandra database for back-end functionality using CQL."
            buttonTitle="Devpost"
            time="Jan 2021"
            buttonLink="https://devpost.com/software/good-friend"
            image={goodfriend0}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
