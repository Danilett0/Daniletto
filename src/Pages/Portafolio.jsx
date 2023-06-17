import React from "react";
import { Link } from "react-router-dom";
import { VisualEffectTopWhite } from "../Components/ShapeVisualEffects";
import "../App.css";
import "./css/Portafolio.css";

function Portafolio(props) {
  return (
    <div className="Portafolio">
      <div className="Encabezado">
        <div className="Texto">
          <h1>PORTAFOLIO DE DISEÑO WEB</h1>
          <p>
            En Daniletto, nos enfocamos en tres cosas: calidad, personalización
            y atención al cliente. Nos aseguramos de que cada sitio web sea
            único y refleje la marca y los valores de nuestros clientes.
          </p>
        </div>
        <img src="/images/landing.png" alt="imagen landing page" />
      </div>

      <VisualEffectTopWhite />

      <div className="Proyectos">
        <h2>ALGUNOS EJEMPLOS DE LO QUE PODEMOS HACER POR TI</h2>

        <div className="Box-Proyectos">
          <div className="Proyecto">
            <img src="/images/proyecto-fyllo.jpg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="">VER SITIO WEB</Link>
          </div>
          <div className="Proyecto">
            <img src="/images/proyecto-fyllo.jpg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="">VER SITIO WEB</Link>
          </div>
          <div className="Proyecto">
            <img src="/images/proyecto-fyllo.jpg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="">VER SITIO WEB</Link>
          </div>
        </div>

        <div className="Box-Proyectos">
          <div className="Proyecto">
            <img src="/images/proyecto-fyllo.jpg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="">VER SITIO WEB</Link>
          </div>
          <div className="Proyecto">
            <img src="/images/proyecto-fyllo.jpg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="">VER SITIO WEB</Link>
          </div>
          <div className="Proyecto">
            <img src="/images/proyecto-fyllo.jpg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="">VER SITIO WEB</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Portafolio;
