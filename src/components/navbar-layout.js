import React from "react";
import "../App.css";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export function LocalNav({ children }) {
  return (
    <div
      style={{
        margin: 0,
        height: "100%",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {children}
    </div>
  );
}

export default LocalNav;
