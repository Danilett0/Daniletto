import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/LinksNavegacion.css";

function LinksNavegacion(props) {
  return (
    <nav aria-label="links de navegacion">
      <ul>
        <li>
          <Link to="/Daniletto" >
            Home
          </Link>
        </li>
        <li>
          <Link to="/Portafolio" >
            Portafolio
          </Link>
        </li>
        <li>
          <Link to="/About" >
            Sobre mí
          </Link>
        </li>
        <li>
          <Link
            className="LinkContacto"
            to="/Contacto"
            
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LinksNavegacion;
