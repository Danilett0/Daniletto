import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { VisualEffectTopWhite } from "../Components/ShapeVisualEffects";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import "../App.css";
import "../styles/pages/Portafolio.css";

function Portafolio() {
  const [showProyectos, setShowProyectos] = useState(false);
  const loadingPage = useLoading("portafolio", 300);

  const Mostrar = () => {
    setShowProyectos(true);
  };

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>
              Portafolio de diseño web - Jeferson Danilo Castro Becerra
            </title>
            <meta
              name="description"
              content="Descubre algunos de los proyectos de diseño web que he realizado y que reflejan mi estilo, mi creatividad y mis habilidades técnicas. Desde sitios web corporativos hasta aplicaciones web interactivas."
            />
            <meta
              name="keywords"
              content="Jeferson Danilo Castro Becerra, portafolio, diseño web, proyectos web, sitios web corporativos, aplicaciones web interactivas, creatividad, habilidades técnicas, Bogotá, Colombia"
            />
            <link
              rel="canonical"
              href="https://www.daniletto.site/portafolio"
            />
          </Helmet>

          <div className="Portafolio">
            <div className="Encabezado">
              <div>
                <div className="Texto">
                  <h1>BIENVENIDO A MI PORTAFOLIO</h1>
                  <p>
                    Me apasiona el diseño web y me gusta crear experiencias
                    digitales innovadoras, atractivas e intuitivas para
                    diferentes tipos de clientes y usuarios. En este portafolio
                    encontrarás una muestra de mi trabajo, aplicaciones web
                    interactivas, paginas web con diseños atractivos y
                    funcionales etc.
                  </p>
                  <p>
                    Mi objetivo es crear páginas web que te encanten y que te
                    ayuden a alcanzar tus metas. Ya sea que necesites una web
                    personal o profesional, yo puedo diseñarla a tu medida y con
                    las mejores herramientas.
                  </p>
                </div>
                <img
                  src="/images/Portafolio/landing.webp"
                  alt="imagen landing page"
                />
              </div>
            </div>

            <VisualEffectTopWhite />

            <div className="Proyectos">
              <h2>Te presento algunos de mis proyectos favoritos</h2>

              <div className="ProyectosIniciales">
                <div className="Box-Proyectos">
                  <div className="Proyecto">
                    <h4>App del clima</h4>
                    <img
                      src="/images/Portafolio/sol.webp"
                      alt="Aplicación del clima con react"
                    />
                    <p>
                      Conoce el clima con esta app. Temperatura, humedad,
                      viento, presión y pronóstico. Hecha con React y lo último
                      en tecnología.
                    </p>
                    <Link
                      className="Button Red"
                      target="_blank"
                      to="https://danilett0.github.io/WhaterApp/"
                    >
                      VER SITIO WEB
                    </Link>
                  </div>

                  <div className="Proyecto">
                    <h4>Calculadora</h4>
                    <img
                      src="/images/Portafolio/calculadora.webp"
                      alt="Aplicación de calculadora con react"
                    />
                    <p>
                      Domina las matemáticas con la app calculadora. Realiza
                      operaciones básicas con una interfaz sencilla y bonita.
                      Creada con React y las últimas tecnologías.
                    </p>
                    <Link
                      className="Button Red"
                      target="_blank"
                      to="https://danilett0.github.io/calculadoraReact/"
                    >
                      VER SITIO WEB
                    </Link>
                  </div>

                  <div className="Proyecto">
                    <h4>Imagen Random</h4>
                    <img
                      src="/images/Portafolio/imagenes.webp"
                      alt="Aplicación de random gif con react"
                    />
                    <p>
                      Te gustan las sorpresas? Con esta app podrás generar
                      imágenes increíbles con frases al azar. ¡Nunca sabrás lo
                      que te va a tocar!
                    </p>
                    <Link
                      className="Button Red"
                      target="_blank"
                      to="https://danilett0.github.io/RandomGif/"
                    >
                      VER SITIO WEB
                    </Link>
                  </div>
                </div>
              </div>

              <div className="Box-Proyectos">
                <div className="Proyecto">
                  <img
                    src="/images/Portafolio/fyllo.webp"
                    alt="creacion de pagina web FYLLO"
                  />
                  <h4>Landing Page Fyllo</h4>
                  <Link
                    className="Button Red"
                    target="_blank"
                    to="https://danilett0.github.io/Landing-Page-Fyllo/"
                  >
                    VER SITIO WEB
                  </Link>
                </div>
                <div className="Proyecto">
                  <img
                    src="/images/Portafolio/e-learning.webp"
                    alt="Creación de pagina web E-Learning"
                  />
                  <h4>Landing Page E-Learning</h4>
                  <Link
                    className="Button Red"
                    target="_blank"
                    to="https://landing-page-elearning.netlify.app/"
                  >
                    VER SITIO WEB
                  </Link>
                </div>
                <div className="Proyecto">
                  <img
                    src="/images/Portafolio/BookMark.webp"
                    alt="Creación de pagina web BookMark"
                  />
                  <h4>Landing Page BookMark</h4>
                  <Link
                    className="Button Red"
                    target="_blank"
                    to="https://danilett0.github.io/Landing-Page-Bokmark/"
                  >
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
                        src="/images/Portafolio/sonix.webp"
                        alt="creación de pagina web sonix"
                      />
                      <h4>Landing Page SoniX</h4>
                      <Link
                        className="Button Red"
                        target="_blank"
                        to="https://landing-page-sonix.netlify.app/"
                      >
                        VER SITIO WEB
                      </Link>
                    </div>
                    <div className="Proyecto">
                      <img
                        src="/images/Portafolio/LifeMiles.webp"
                        alt="creación de pagina web LifeMiles"
                      />
                      <h4>Landing Page LifeMiles</h4>
                      <Link
                        className="Button Red"
                        target="_blank"
                        to="https://danilett0.github.io/Landing-Page-Lifemiles/"
                      >
                        VER SITIO WEB
                      </Link>
                    </div>
                    <div className="Proyecto">
                      <img
                        src="/images/Portafolio/Shortly.webp"
                        alt="creación de pagina web Shortly"
                      />
                      <h4>Landing Page Shortly</h4>
                      <Link
                        className="Button Red"
                        target="_blank"
                        to="https://danilett0.github.io/Landing-Page-Shortli/"
                      >
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
                  creado para diferentes propósitos. Son proyectos sencillos
                  pero con un diseño atractivo y funcional. Si quieres ver más
                  de mi trabajo, puedes visitar mi repositorio de github donde
                  encontrarás otros proyectos más complejos y variados.
                  <Link
                    className="Button Red"
                    target="_blank"
                    to="https://github.com/Danilett0"
                  >
                    Ver Repositorio
                  </Link>
                </p>
                <img
                  src="/images/Portafolio/Person.webp"
                  alt="consulta mas información sobre Daniletto"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Portafolio;
