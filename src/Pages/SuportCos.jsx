import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/pages/SuportCos.css";

function SuportCos() {
 

  return (
    <div className="Tecnologias">
      <img src="/images/Home/daniletto-cotizacion-online-animada.svg" alt="" />
      <Link className=" Red" to={"https://suportcos.netlify.app/"}>Ir a aplicacion</Link>
    </div>
  );
}

export default SuportCos;
