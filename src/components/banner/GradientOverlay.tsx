import React from "react";

const GradientOverlay = ({ direction = "right", color = "white", style = {} }) => (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to "+direction+", "+color+", transparent)",
        zIndex: 1,
        pointerEvents: "none",
        ...style,
      }}
    ></div>
  );

export default GradientOverlay;