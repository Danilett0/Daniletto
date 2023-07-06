import React from "react";
import "../App.css";
import "../Styles/components/Header.css";
import LinksNavegacion from "./LinksNavegacion";
import { Link } from "react-router-dom";
import MenuHamburguer from "./MenuHamburguer";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">
          <img src="/images/logo.png" alt="logo Daniletto" />
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
