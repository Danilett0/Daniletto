import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/pages/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound">
      <img
        loading="lazy"
        src="/images/Not-Found.png"
        alt="imagen pagina no encontrada"
      />
      <Link to="/"> Home </Link>
    </div>
  );
}

export default NotFound;
