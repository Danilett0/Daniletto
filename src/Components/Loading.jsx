import React from "react";
import "./css/Loading.css";

function Loading() {
  return (
    <div className="loading">
      <img src="./images/logo.png" alt="imagen de carga" />
      <div className="loading-text">
        Cargando
        <span className="loading-dot"> .</span>
        <span className="loading-dot"> .</span>
        <span className="loading-dot"> .</span>
      </div>
    </div>
  );
}

export default Loading;
