import React from "react";
import "../App.css";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Icon from "awesome-react-icons";
import avatar from "../images/avatar.jpg";
import { useHistory, useLocation } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";

export function LocalNav({ children }) {
  return (
    <div
      style={{
        margin: 0,
        width: 400,
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {children}
    </div>
  );
}

const NavBar = () => {
  let history = useHistory();

  return <div className="App"></div>;
};

export default LocalNav;
