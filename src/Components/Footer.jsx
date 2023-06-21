import React from "react";
import "../App.css";
import "../styles/components/Footer.css";
import LinksNavegacion from "./LinksNavegacion";

function Footer(props) {
  return (
    <div className="Footer">
      <div className="Links">
        <LinksNavegacion />
      </div>
    </div>
  );
}

export default Footer;