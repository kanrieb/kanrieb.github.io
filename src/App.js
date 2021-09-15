import './App.css';
import React from "react";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import NavBar from "./components/navbar-layout";
import { useHistory, useLocation } from "react-router-dom";
import Routes from "./routes";





function App() {
  const history = useHistory();

  return (
    <div>

    <div className="flexbox-container">
      <div><NavBar /></div>
      <div className="two"><Routes /></div>


    </div>
    </div>
  );
}

export default App;
