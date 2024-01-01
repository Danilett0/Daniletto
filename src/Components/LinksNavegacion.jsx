import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/LinksNavegacion.css";

function LinksNavegacion(props) {
  const navigation = [
    { id: 0, title: "Inicio", path: "/" },
    { id: 1, title: "Portafolio", path: "/Portafolio" },
    { id: 2, title: "Sobre Mi", path: "/About" },
    { id: 3, title: "Blog", path: "/Blog" },
    { id: 4, title: "Contactame", path: "/Contacto" },
  ];

  const cerrarMenu = () => {
    if (props.cerrarMenu) {
      props.cerrarMenu();
    }
  };

  return (
    <nav aria-label="links de navegación">
      <ul>
        {navigation.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                activeclassname="active"
                className={item.title === "Contactame" ? "LinkContacto" : null}
                onClick={cerrarMenu}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default LinksNavegacion;
