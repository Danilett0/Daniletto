import React from "react";
import "../App.css";
import "../styles/components/Header.css";
import LinksNavegacion from "./LinksNavegacion";
import { Link } from "react-router-dom";
import MenuHamburguer from "./MenuHamburguer";

function Header() {
  return (
    <header>
      <div className="Logo">
        <Link to="/">
          <img src="/images/logo-daniletto.webp" alt="logo Daniletto" />
        </Link>
      </div>

      <div className="Links">
        <LinksNavegacion />
      </div>

      <MenuHamburguer />
    </header>
  );
}

export default Header;
