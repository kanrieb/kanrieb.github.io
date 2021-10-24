import React from "react";
import "../App.css";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import background from "../images/gold.jpg";
import { useHistory, useLocation } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";

export function Background({ children }) {
  return (
    <div
      className="back"
      style={{
        margin: 0,
        height: "100vh",
        minHeight: "560px",
        minWidth: "850px",
        textAlign: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
        display: "flex",
      }}
    >
      {children}
    </div>
  );
}

export default function Wrapper({ children }) {
  return (
    <Background>
      <div
        classname="infoContainer"
        style={{
          position: "relative",
          backgroundColor: "white",
          maxHeight: "80vh",
          width: "80%",
          textAlign: "left",
          borderRadius: "25px",
          boxShadow: "3px 3px grey",
          overflowY: "auto",
          margin: "auto",
        }}
      >
        {children}
      </div>
    </Background>
  );
}
