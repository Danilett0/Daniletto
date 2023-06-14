import React from "react";
import { Link } from "react-router-dom";

function LinksNavegacion(props) {
  return (
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
  );
}

LinksNavegacion.propTypes = {};

export default LinksNavegacion;
