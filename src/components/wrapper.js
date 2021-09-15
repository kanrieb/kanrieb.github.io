import React from "react";
import "../App.css";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import background from "../images/gold.jpg";
import { useHistory, useLocation } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";

export default function Wrapper({ children }) {
  return (
    <div
      className="back"
      style={{
        margin: 0,
        height: "100vh",
        textAlign: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        classname="infoContainer"
        style={{
          position: "absolute",
          left: "65%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          height: "600px",
          width: "55%",
          textAlign: "left",
          borderRadius: "25px",
          boxShadow: "3px 3px grey",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
