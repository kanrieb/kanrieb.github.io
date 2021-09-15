import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AboutPage from "./pages/aboutMe";
import ProjectsPage from "./pages/projects";
import EducationPage from "./pages/education";
import ExperiencePage from "./pages/experience";


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/education">
            <EducationPage />
          </Route>
          <Route path="/experience">
            <ExperiencePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;
  