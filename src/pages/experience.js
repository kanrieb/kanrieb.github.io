import React from "react";
import "../App.css";
import { Background } from "../components/wrapper.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//include skills here too!
const ExperiencePage = () => {
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
      >
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2017 - Present"
            iconStyle={{ background: "green", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Software Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              The University of Victoria{" "}
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2021 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Redbrick - Assembly
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Full-Stack Developer Co-op
            </h4>
            <p>
              Assembly is a digital publishing company housed by Redbrick that
              implements technology-driven publishing. I began my co-op by
              developing tests for their various platforms, and then
              transitioned to working on Statera, which collects and analyzes
              reader behaviour.
              <br /> <br />
              <b>
                Technical Skills: Version control (Git), Testing (Jest),
                Javascript/Typescript, CI/CD.
              </b>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept - Dec 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              James Evans & Associates (JEA)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Junior Database/ADF Developer Co-op
            </h4>
            <p>
              JEA is a pension systems company that provides custom pension
              solutions. My work involved manipulating databases with
              information on thousands of users, updating code to fit client
              requirements, and ADF interface development. I was placed on a
              Scrum team and completed tickets for each sprint cycle, and it was
              a great environmet to work with more senior developers and learn
              about larger company code standards. <br /> <br />
              <b>
                Technical Skills: Version control (SVN), SQL scripts, Oracle
                ADF.
              </b>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan - April 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              UVIC Faculty of Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Systems Technical Team Co-op
            </h4>
            <p>
              For this co-op position, I was hired by the security team for the
              UVIC Faculty of Engineering. My largest project was creating a
              password security tool that would track the age of passwords, and
              corresponding risk levels of Engineering faculty accounts. This
              tool displayed any publically-known security breaches that faculty
              email addresses may have been involved in by running a nightly
              cron job querying an API, and recording the data in a database.
              Through this task I learned the importance of requirements
              analysis and design functionality. <br /> <br />{" "}
              <b>
                Technical Skills: PHP/HTML/JS/CSS web design, complex SQL
                queries
              </b>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May - Aug 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Science Venture</h3>
            <h4 className="vertical-timeline-element-subtitle">
              STEM Instructor Co-op
            </h4>
            <p>
              Science Venture is a non-profit organization located in Victoria,
              BC, that provides science, engineering, and technology education
              for youth on Vancouver Island. As my first co-op, I will never
              forget my experience working at Science Venture. This co-op term
              involved working with a large team of other people to plan and
              deliver STEM workshops to schools and foster excitment in young
              students about science. Over the summer we travelled to multiple
              schools per week all over the Greater Victoria area, and later
              hosted summer camps that we had to completely design ourselves. I
              learned valuable teamwork, organization, time-management, public
              speaking and communication skills that I use in my life to this
              day.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sept 2018 - Present"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              UVic Seniors Program
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Volunteer</h4>
            <p>
              The UVic Seniors Program is a student-run program that aims to
              assist seniors with basic technology. There are four sessions each
              year, and the topics cover Google, Email, Social Media, and
              Microsoft Word. As a general volunteer, I am able to provide
              one-on-one assistance for attendees and answer any additional
              questions they may have. This experience has been extremely
              rewarding as I am able to make a direct positive impact for the
              members of my community.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2018 - Present"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              The University of Victoria (UVIC)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Volunteer</h4>
            <p>
              I have volunteered for multiple events at UVIC, including: <br />
              <t /> • UVic Orientation and Student Recruitment - As an
              orientation leader, it was my job to guide a group of incoming
              Engineering undergraduate students around campus, and recite
              necessary information <br />
              <t />• Explore UVic - For this event, I was a student
              representative for the BSeng program and I answered questions from
              potential UVic students
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Background>
  );
};

export default ExperiencePage;
