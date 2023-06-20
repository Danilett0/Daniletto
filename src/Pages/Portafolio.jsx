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
            Bienvenido a mi portafolio de diseño web, donde podrás ver algunos
            de los proyectos que he realizado y que reflejan mi estilo, mi
            creatividad y mis habilidades técnicas. <br />
            <br /> Me apasiona el diseño web y me gusta crear experiencias
            digitales innovadoras, atractivas e intuitivas para diferentes tipos
            de clientes y usuarios. En este portafolio encontrarás una muestra
            de mi trabajo, desde sitios web corporativos hasta aplicaciones web
            interactivas, pasando por diseños gráficos y motion graphics. <br />
            <br /> Espero que te guste lo que ves y que te sirva para hacerte
            una idea de lo que puedo hacer por ti y por tu proyecto.
          </p>
        </div>
        <img src="/images/landing.png" alt="imagen landing page" />
      </div>

      <VisualEffectTopWhite />

      <div className="Proyectos">
        <h2>
          Te presento algunos <br /> de mis proyectos favoritos
        </h2>

        <div className="ProyectosIniciales">
          <div className="Box-Proyectos">
            <div className="Proyecto">
              <h4>App del clima</h4>
              <img src="/images/sol.png" alt="icono clima" />
              <p>
                Conoce el clima con esta app. Temperatura, humedad, viento,
                presión y pronóstico. Hecha con React y lo último en tecnología.
              </p>
              <Link to="https://danilett0.github.io/WhaterApp/">
                VER SITIO WEB
              </Link>
            </div>

            <div className="Proyecto">
              <h4>Calculadora</h4>
              <img src="/images/calculadora.png" alt="icono clima" />
              <p>
                Domina las matemáticas con la app calculadora. Realiza
                operaciones básicas con una interfaz sencilla y bonita. Creada
                con React y las últimas tecnologías.
              </p>
              <Link to="https://danilett0.github.io/calculadoraReact/">
                VER SITIO WEB
              </Link>
            </div>

            <div className="Proyecto">
              <h4>Imagen Random</h4>
              <img src="/images/imagenes.png" alt="icono clima" />
              <p>
                Te gustan las sorpresas? Con esta app podrás generar imágenes
                increíbles con frases al azar. ¡Nunca sabrás lo que te va a
                tocar!
              </p>
              <Link to="https://danilett0.github.io/RandomGif/">
                VER SITIO WEB
              </Link>
            </div>
          </div>
        </div>

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
            <h4>Pagina FincaRaiz</h4>
            <Link to="https://danilett0.github.io/Pagina-Web-Finca-Raiz/">
              VER SITIO WEB
            </Link>
          </div>
          <div className="Proyecto">
            <img src="/images/BookMark.jpeg" alt="imagen de proyecto" />
            <h4>Landing Page BookMark</h4>
            <Link to="https://danilett0.github.io/Landing-Page-Bokmark/">
              VER SITIO WEB
            </Link>
          </div>
        </div>

        <div>
          {!showProyectos && (
            <p className="VerMas" onClick={Mostrar}>
              ver mas proyectos
            </p>
          )}
          {showProyectos && (
            <div className="Box-Proyectos">
              <div className="Proyecto">
                <img
                  src="/images/ClaudiaBotero.jpeg"
                  alt="imagen de proyecto"
                />
                <h4>Landing Page ClaudiaBotero</h4>
                <Link to="https://danilett0.github.io/Landing-Page-Psicologa/">
                  VER SITIO WEB
                </Link>
              </div>
              <div className="Proyecto">
                <img src="/images/LifeMiles.jpg" alt="imagen de proyecto" />
                <h4>Landing Page LifeMiles</h4>
                <Link to="https://danilett0.github.io/Landing-Page-Lifemiles/">
                  VER SITIO WEB
                </Link>
              </div>
              <div className="Proyecto">
                <img src="/images/Shortly.jpeg" alt="imagen de proyecto" />
                <h4>Landing Page Shortly</h4>
                <Link to="https://danilett0.github.io/Landing-Page-Shortli/">
                  VER SITIO WEB
                </Link>
              </div>
            </div>
          )}
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
              Ver Repositorio
            </Link>
          </p>
          <img src="/images/Person.png" alt="Persona" />
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
