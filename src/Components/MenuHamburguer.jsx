import React, { useState } from "react";
import "../styles/components/MenuHamburguer.css";
import LinksNavegacion from "./LinksNavegacion";
import { Link } from "react-router-dom";

function MenuHamburguer(props) {
  const [menu, setMenu] = useState("close");

  const animarMenu = () => {
    menu === "close" ? setMenu("open") : setMenu("close");
  };

  return (
    <div className="MenuHamburguer">
      <div className="hamburguer" onClick={animarMenu}>
        <line></line>
        <line></line>
        <line></line>
      </div>

      {menu === "open" && (
        <div className="box-menu">
          <div className="Logo">
            <Link to="/">
              <img src="/images/logo.png" alt="logo Daniletto" />
            </Link>
          </div>

          <LinksNavegacion />
        </div>
      )}
    </div>
  );
}

export default MenuHamburguer;
