import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/LinksNavegacion.css";

const Home = React.lazy(() => import("../Pages/Home"));
const About = React.lazy(() => import("../Pages/About"));
const Contacto = React.lazy(() => import("../Pages/Contacto"));
const Portafolio = React.lazy(() => import("../Pages/Portafolio"));

function LinksNavegacion(props) {
  return (
    <nav aria-label="links de navegacion">
      <ul>
        <li>
          <NavLink to={<Home />} activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={<Portafolio />} activeclassname="active">
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink to={<About />} activeclassname="active">
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink
            className="LinkContacto"
            to={<Contacto />}
            activeclassname="active"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LinksNavegacion;
