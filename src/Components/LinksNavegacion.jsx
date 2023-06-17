import React from "react";
import { NavLink } from "react-router-dom";
import "./css/LinksNavegacion.css";

function LinksNavegacion(props) {
  return (
    <nav aria-label="links de navegacion">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Portafolio" activeClassName="active">
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeClassName="active">
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LinksNavegacion;
