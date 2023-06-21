import React from "react";
import "../App.css";
import "../styles/components/Header.css";
import LinksNavegacion from "./LinksNavegacion";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <img src="./images/logo.png" alt="" />
        </Link>
      </div>

      <div className="Links">
        <LinksNavegacion />
      </div>
    </div>
  );
}

export default Header;
