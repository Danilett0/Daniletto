import React from "react";
import "../App.css";
import "./css/Header.css";
import LinksNavegacion from "./LinksNavegacion";

function Header(props) {
  return (
    <div className="Header">
      <div className="Logo">
        <img src="/images/logo.png" alt="" />
      </div>

      <div className="Links">
        <LinksNavegacion />
      </div>
    </div>
  );
}

export default Header;
