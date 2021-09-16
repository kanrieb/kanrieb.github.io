import "./App.css";
import React from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import Icon from "awesome-react-icons";
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
    path: "/",
    exact: true,
    main: () => <AboutPage />,
  },
  {
    path: "/education",
    main: () => <EducationPage />,
  },
  {
    path: "/experience",
    main: () => <ExperiencePage />,
  },
  {
    path: "/projects",
    main: () => <ProjectsPage />,
  },
  {
    path: "/skills",
    main: () => <SkillsPage />,
  },
];

function App() {
  let def = window.location.pathname;

  console.log("def " + def);

  return (
    <div>
      <Router>
        <div className="flexbox-container">
          <div>
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
                  <Nav.Link href="/">
                    {/* <Icon name="user" /> */}
                    ABOUT
                  </Nav.Link>
                  <Nav.Link href="/education">
                    {/* <Icon name="book" /> */}
                    EDUCATION
                  </Nav.Link>
                  <Nav.Link href="/experience">
                    {/* <Icon name="briefcase" />  */}
                    EXPERIENCE
                  </Nav.Link>
                  <Nav.Link href="/projects">
                    {/* <Icon name="tag" /> */}
                    PROJECTS
                  </Nav.Link>
                  <Nav.Link href="/skills">
                    {" "}
                    {/* <Icon name="sun" /> */}
                    SKILLS
                  </Nav.Link>
                </Nav>
              </div>
              <ul class="social-container">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/kanrieb"
                    title="Github"
                  >
                    <i class="fab fa-github"></i>{" "}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/kathryn-rieb-b38255189/"
                    title="Connect on Linkedin"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
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
