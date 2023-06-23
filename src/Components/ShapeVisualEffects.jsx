import React from "react";

export const VisualEffectTopBlue = () => {
  return (
    <div className="EfectBorderRoundBlue">
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
    <div className="EfectBorderRoundWhite">
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
