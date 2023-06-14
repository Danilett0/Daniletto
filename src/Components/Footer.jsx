import React from "react";
import "../App.css";
import "./css/Footer.css";
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

Footer.propTypes = {};

export default Footer;
