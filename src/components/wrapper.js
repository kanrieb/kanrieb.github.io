import React from "react";
import "../App.css";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import background from "../images/gold.jpg";

export function Background({ children }) {
  return (
    <div
      className="back"
      style={{
        backgroundImage: `url(${background})`,
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
        className="infoContainer"
        style={{
          position: "relative",
          backgroundColor: "white",
          maxHeight: "80%",
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
