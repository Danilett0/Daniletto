import React from "react";
import "../App.css";
import "../styles/components/Header.css";
import {Link, NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/Daniletto">
          <img src="./images/logo.png" alt="logo Daniletto" />
        </Link>
      </div>

      <div className="Links">
      <nav aria-label="links de navegacion">
      <ul>
        <li>
          <NavLink to="/Daniletto" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Portafolio" activeclassname="active">
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeclassname="active">
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink
            className="LinkContacto"
            to="/Contacto"
            activeclassname="active"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
      </div>
    </div>
  );
}

export default Header;
