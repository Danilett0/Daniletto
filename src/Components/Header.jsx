import React from "react";
import "../App.css";
import "../styles/components/Header.css";
import LinksNavegacion from "./LinksNavegacion";
import { Link } from "react-router-dom";
import MenuHamburguer from "./MenuHamburguer";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <img src="/images/logo-daniletto.png" alt="logo Daniletto" />
        </Link>
      </div>

      <div className="Links">
        <LinksNavegacion />
      </div>

      <MenuHamburguer />
    </div>
  );
}

export default Header;
