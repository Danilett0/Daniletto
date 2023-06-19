import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VisualEffectTopWhite } from "../Components/ShapeVisualEffects";
import "../App.css";
import "../styles/pages/Portafolio.css";

function Portafolio() {
  const [showProyectos, setShowProyectos] = useState(false);

  const Mostrar = () => {
    setShowProyectos(true);
  };

  return (
    <div className="Portafolio">
      <div className="Encabezado">
        <div className="Texto">
          <h1>PORTAFOLIO DE DISEÑO WEB</h1>
          <p>
            En Daniletto, me enfoco en tres cosas: calidad, personalización y
            atención al cliente. Me aseguro de que cada sitio web sea único y
            refleje la marca y los valores de mis clientes. Además, ofrezco un
            servicio integral que incluye diseño, desarrollo, mantenimiento y
            soporte técnico. <br />
            <br /> Mi objetivo es crear sitios web funcionales, atractivos y
            optimizados para los motores de búsqueda. Quiero que mis clientes se
            sientan satisfechos y orgullosos de su presencia en línea.
          </p>
        </div>
        <img src="/images/landing.png" alt="imagen landing page" />
      </div>

      <VisualEffectTopWhite />

      <div className="Proyectos">
        <h2>
          Te presento algunos <br /> de mis proyectos favoritos
        </h2>

        <div className="Box-Proyectos">
          <div className="Proyecto">
            <img src="/images/fyllo.jpeg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="https://danilett0.github.io/Landing-Page-Fyllo/">
              VER SITIO WEB
            </Link>
          </div>
          <div className="Proyecto">
            <img src="/images/FincaRaiz.jpeg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="https://danilett0.github.io/Pagina-Web-Finca-Raiz/">
              VER SITIO WEB
            </Link>
          </div>
          <div className="Proyecto">
            <img src="/images/BookMark.jpeg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="https://danilett0.github.io/Landing-Page-Bokmark/">
              VER SITIO WEB
            </Link>
          </div>
        </div>

        <div className="Box-Proyectos">
          <div className="Proyecto">
            <img src="/images/ClaudiaBotero.jpeg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="https://danilett0.github.io/Landing-Page-Psicologa/">
              VER SITIO WEB
            </Link>
          </div>
          <div className="Proyecto">
            <img src="/images/LifeMiles.jpg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="https://danilett0.github.io/Landing-Page-Lifemiles/">
              VER SITIO WEB
            </Link>
          </div>
          <div className="Proyecto">
            <img src="/images/Shortly.jpeg" alt="imagen de proyecto" />
            <h4>Landing Page Fyllo</h4>
            <Link to="https://danilett0.github.io/Landing-Page-Shortli/">
              VER SITIO WEB
            </Link>
          </div>
        </div>
        <div className="MasProyectos">
          {!showProyectos && <p onClick={Mostrar}> ver mas proyectos</p>}
          {showProyectos && <div>mas proyectos aqui</div>}
        </div>
      </div>

      <div className="OtrosProyectos">
        <div>
          <p>
            En esta sección puedes ver algunas de las landing pages que he
            creado para diferentes propósitos. Son proyectos sencillos pero con
            un diseño atractivo y funcional. Si quieres ver más de mi trabajo,
            puedes visitar mi repositorio de github donde encontrarás otros
            proyectos más complejos y variados. <br />
            <br />
            <br />
            <Link to="https://github.com/Danilett0?tab=repositories">
              Ver Repositorio{" "}
            </Link>
          </p>
          <img src="/images/Person.png" alt="Persona" />
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
