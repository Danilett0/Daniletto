import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./css/Header.css";

function Header(props) {
  return (
    <div className="Header">
      <div className="Logo">
        <img src="/images/logo.png" alt="" />
      </div>

      <div className="Links">
        <nav aria-label="links de navegacion">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Portafolio">Portafolio</Link>
            </li>
            <li>
              <Link to="/About">Sobre mí</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
