import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/LinksNavegacion.css";

function LinksNavegacion(props) {
  return (
    <nav aria-label="links de navegación">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/Portafolio" activeclassname="active">
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeclassname="active">
          ¿Quien soy?
          </NavLink>
        </li>
        <li>
          <NavLink
            className="LinkContacto"
            to="/Contacto"
            activeclassname="active"
          >
            CONTÁCTAME
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LinksNavegacion;
