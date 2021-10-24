import "./App.css";
import React from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import avatar from "./images/avatar.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LocalNav from "./components/navbar-layout";

import AboutPage from "./pages/aboutMe";
import ProjectsPage from "./pages/projects";
import EducationPage from "./pages/education";
import ExperiencePage from "./pages/experience";
import SkillsPage from "./pages/skills";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

const routes = [
  {
    path: "/kathryn-rieb",
    exact: true,
    main: () => <AboutPage />,
  },
  // {
  //   path: "/kathryn-rieb/education",
  //   main: () => <EducationPage />,
  // },
  {
    path: "/kathryn-rieb/experience",
    main: () => <ExperiencePage />,
  },
  {
    path: "/kathryn-rieb/projects",
    main: () => <ProjectsPage />,
  },
  // {
  //   path: "/kathryn-rieb/skills",
  //   main: () => <SkillsPage />,
  // },
];

function App() {
  let def = window.location.pathname;

  return (
    <div>
      <Router>
        <div className="flexbox-container">
          <div className="one">
            <LocalNav>
              <div className="nav-heading ">
                <img src={avatar} alt="Avatar" className="Avatar" />
                <br />
                <span className="nav-name"> Kathryn Rieb</span>
                <br />
                <span className="nav-sub">Software Engineering Student</span>
              </div>

              <div className="links">
                <Nav
                  defaultActiveKey={def}
                  className="flex-column"
                  variant="tabs"
                >
                  <Nav.Link href="/kathryn-rieb/">
                    {/* <Icon name="user" /> */}
                    ABOUT
                  </Nav.Link>
                  {/* <Nav.Link href="/kathryn-rieb/education">
                    EDUCATION
                  </Nav.Link> */}
                  <Nav.Link href="/kathryn-rieb/experience">
                    {/* <Icon name="briefcase" />  */}
                    EXPERIENCE
                  </Nav.Link>
                  <Nav.Link href="/kathryn-rieb/projects">
                    {/* <Icon name="tag" /> */}
                    PROJECTS
                  </Nav.Link>
                  {/* <Nav.Link href="/kathryn-rieb/skills">
                    SKILLS
                  </Nav.Link> */}
                </Nav>
              </div>
              <div className="social-container">
                <div className="col">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/kanrieb"
                    title="Github"
                  >
                    <i className="fab fa-github fa-lg icon-grey"></i>
                  </a>
                </div>
                <div className="col">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/kathryn-rieb-b38255189/"
                    title="Connect on Linkedin"
                  >
                    <i className="fab fa-linkedin fa-lg icon-grey"></i>
                  </a>
                </div>
                <div className="col">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.devpost.com/kanrieb"
                    title="Check out my Devpost"
                  >
                    <i className="fas fa-laptop-code fa-lg icon-grey"></i>
                  </a>
                </div>
              </div>
            </LocalNav>
          </div>
          <div className="two">
            <div style={{ flex: 1 }}>
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
