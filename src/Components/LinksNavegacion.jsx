import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/LinksNavegacion.css";

function LinksNavegacion(props) {
  return (
    <nav aria-label="links de navegacion">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
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
          <NavLink to="/Contacto" activeclassname="active">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LinksNavegacion;
