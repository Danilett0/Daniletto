import React from "react";

export const VisualEffectTopBlue = () => {
  return (
    <div
      style={{
        height: "150px",
        overflow: "hidden",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "#092239" }}
        ></path>
      </svg>
    </div>
  );
};

export const VisualEffectTopWhite = () => {
  return (
    <div
      style={{
        height: "150px",
        overflow: "hidden",
        backgroundColor: "#092239",
        width: "100%",
      }}
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "white" }}
        ></path>
      </svg>
    </div>
  );
};
