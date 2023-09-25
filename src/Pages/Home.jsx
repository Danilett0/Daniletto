import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { VisualEffectTopBlue } from "../Components/ShapeVisualEffects";
import PreguntasFrecuentes from "../Components/PreguntasFrecuentes";
import Loading from "../Components/Loading";
import useLoading from "../Hooks/useLoading";
import "../App.css";
import "../styles/pages/Home.css";

function Home() {
  const loadingPage = useLoading("home", 300);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>
              Daniletto - Diseño y desarrollo de sitios web de alta calidad en
              Bogotá
            </title>
            <meta
              name="description"
              content="Crea tu sitio web con Daniletto, diseño y desarrollo de calidad en Bogotá, Colombia. Daniletto ofrece soluciones creativas y eficientes para proyectos web de todo tipo, desde páginas personales hasta aplicaciones complejas. Obtén una cotización gratis y descubre cómo podemos ayudarte a destacarte en línea."
            />
            <meta
              name="keywords"
              content="sitio web, diseño web, desarrollo web, proyectos web, páginas personales, aplicaciones web, calidad, soluciones creativas, cotización gratis,comprar pagina web, crear pagina web, cotizar pagina web, jeferson danilo castro, bogota colombia, paginas web en bogota,pagina web bogota,diseño web bogotá,diseño de páginas web bogotá,venta de páginas web bogotá,desarrollo web bogotá,agencia web bogotá,diseño web colombia,diseño de páginas web colombia,venta de páginas web colombia,desarrollo web colombia"
            />
            <link rel="canonical" href="https://www.daniletto.site" />
          </Helmet>

          <main>
            <div className="Encabezado">
              <h1>
                Crea tu sitio web con <span> Daniletto</span>, diseño y desarrollo web de
                calidad
              </h1>
              <p>
                Daniletto es una marca personal creada por
                <Link className="creador" to={"/About"}>
                  Jeferson Danilo Castro
                </Link>
                , un desarrollador web apasionado por el diseño y la innovación.
                Daniletto ofrece soluciones creativas y eficientes para
                proyectos web de todo tipo, desde páginas personales hasta
                aplicaciones complejas.
              </p>
              <div className="BtnOpciones">
                <Link className="Button Red" to="/Contacto">
                  Contáctame ahora
                </Link>
                <Link className="Button Green" to="/simulador">
                  Cotización Online
                </Link>
              </div>
            </div>

            <div className="Beneficios">
              <h2>
                ¿POR QUÉ ELEGIR A DANILETTO PARA TU PROYECTO WEB?
              </h2>
              <div className="Cards">
                <div className="Card">
                  <h3>ALTA CALIDAD</h3>
                  <img
                    loading="lazy"
                    src="/images/Home/Calidad.webp"
                    alt="Icono de calidad para proyectos web"
                  />
                  <p>
                    Me aseguro de que cada sitio web sea único y refleje tanto
                    la marca, como los valores de nuestros clientes.
                  </p>
                </div>
                <div className="Card">
                  <h3>PRECIOS asequibles</h3>
                  <img
                    loading="lazy"
                    src="/images/Home/Dinero.webp"
                    alt="Icono de paginas web económicas"
                  />
                  <p>
                    Ofrezco precios competitivos para que puedas obtener un
                    sitio web de muy alta calidad sin gastar una fortuna.
                  </p>
                </div>
                <div className="Card">
                  <h3>EXPERIENCIA DE USUARIO</h3>
                  <img
                    loading="lazy"
                    src="/images/Home/Satisfaccion.webp"
                    alt="Icono de satisfacción del usuario en su sitio web"
                  />
                  <p>
                    Cada sitio web sera muy fácil de usar y estará diseñado para
                    brindar la mejor experiencia posible a los visitantes.
                  </p>
                </div>
              </div>
            </div>

            <VisualEffectTopBlue />

            <div className="Cotizacion">
              <h2>¿Quieres saber cuánto vale tu página web?</h2>
              <h3>Prueba este simulador online y averígualo!</h3>
              <img
                src="/images/Home/daniletto-simulador-de-precios-paginas-web.webp"
                alt="cotizacion online de pagina web"
                title="realiza una cotizacion con nuestro simulador online"
              />
              <p>
                ¿Te gustaría tener tu propia página web, pero no sabes cuánto te
                costaría? No te preocupes, he creado un simulador online que te
                permite calcular el precio de tu página web según tus
                preferencias y necesidades. Solo tienes que responder unas
                sencillas preguntas y en minutos obtendrás un presupuesto
                personalizado y sin compromiso.
              </p>
              <Link className="Button Red" to="/Simulador">
                Realiza Simulación Online
              </Link>
            </div>

            <div className="Preguntas-Frecuentes">
              <PreguntasFrecuentes />
            </div>

            <div className="Contacto">
              <h2>CONTÁCTAME PARA OBTENER MÁS INFORMACIÓN</h2>
              <div className="Datos-Form">
                <div>
                  <h3>
                    ¿Te interesa contratar mis servicios como desarrollador web?
                  </h3>
                  <p>
                    <b>¡Hey!</b> ¿Tienes alguna pregunta sobre mi trabajo?
                    ¿Necesitas soporte técnico o quieres colaborar conmigo en
                    algún proyecto? No dudes en contactarme haciendo clic en el
                    botón de abajo. Te responderé lo antes posible y te brindaré
                    la mejor atención.
                  </p>

                  <Link className="Button Red" to="/Contacto">
                    Contacto
                  </Link>
                </div>

                <img
                  loading="lazy"
                  src="/images/Home/contacto.webp"
                  alt="Imagen de contacto Daniletto"
                  title="Contáctame para mas información"
                />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Home;
