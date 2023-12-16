import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { VisualEffectTopBlue } from "../Components/ShapeVisualEffects";
import PreguntasFrecuentes from "../Components/PreguntasFrecuentes";
import Loading from "../Components/Loading";
import useLoading from "../Hooks/useLoading";
import ContactForm from "../Components/FormularioContacto/FormularioContacto";
import ServiciosDaniletto from "../Components/ServiciosDaniletto";
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
                <span className="Resaltar-Text-Yellow"> Daniletto,</span> diseño y desarrollo web profesional a
                tu medida
              </h1>
              <p>
                ¿Buscas un programador que combine el diseño y el desarrollo web
                con creatividad y eficiencia? Entonces, estás en el lugar
                correcto. 👋 Hola, soy{" "}
                <Link className="creador" to={"/About"}>
                  Jeferson Danilo Castro
                </Link>, el
                creador de Daniletto, una marca personal que ofrece soluciones
                web a medida para todo tipo de proyectos. Ya sea que necesites
                una página personal, una tienda online, una aplicación web o
                cualquier otro tipo de proyecto, yo puedo ayudarte a hacerlo
                realidad.
              </p>
              <p>
                ¿Quieres saber más sobre cómo Daniletto puede ayudarte a crear
                tu sitio web ideal?
              </p>
              <div className="BtnOpciones">
                <Link className="Button Red" to="/Contacto">
                  ¡Contáctame!
                </Link>
              </div>
            </div>

            {/* <div className="Beneficios">
              <h2>¿POR QUÉ ELEGIR A <span className="Resaltar-Text-Yellow">DANILETTO</span> PARA CREAR TU SITIO WEB?</h2>
              <div className="Cards">
                <div className="Card">
                  <h3>CALIDAD</h3>
                  <img
                    loading="lazy"
                    src="/images/Home/Calidad.webp"
                    alt="Icono de calidad para proyectos web"
                  />
                  <p>
                    Me esfuerzo por crear sitios web que cumplan con los
                    estándares de accesibilidad, usabilidad y rendimiento.
                  </p>
                </div>
                <div className="Card">
                  <h3>PRECIOS</h3>
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
                  <h3>EXPERIENCIA</h3>
                  <img
                    loading="lazy"
                    src="/images/Home/Satisfaccion.webp"
                    alt="Icono de satisfacción del usuario en su sitio web"
                  />
                  <p>
                    Tengo amplia experiencia en el desarrollo y diseño de
                    páginas web. Ofrezco soluciones de calidad, creativas y
                    asequibles.
                  </p>
                </div>
              </div>
            </div> */}

            <ServiciosDaniletto />

            <VisualEffectTopBlue />

            <div className="Cotizacion">
              <h2>Calcula el precio de tu página web con este simulador gratuito y rápido</h2>
              <img
                src="/images/Home/daniletto-cotizacion-online-animada.svg"
                alt="cotizacion online de pagina web"
                title="realiza una cotizacion con nuestro simulador online"
              />
              <p>
                ¿Te gustaría tener tu propia página web, pero no sabes cuánto te
                costaría? No te preocupes, he creado un simulador online que te
                permite calcular el precio de tu página web según tus
                preferencias y necesidades.
              </p>
              <Link className="Button Red" to="/Simulador">
              Calcula el precio de tu web ahora
              </Link>
            </div>

            <div className="Preguntas-Frecuentes">
              <PreguntasFrecuentes />
            </div>

            <div className="Contacto">
              <h2><span className="Resaltar-Text-Yellow">CONTÁCTAME</span> PARA OBTENER MÁS INFORMACIÓN</h2>
              <p>
                ¿Tienes alguna pregunta sobre mi trabajo? ¿Necesitas soporte
                técnico o quieres colaborar conmigo en algún proyecto? No dudes
                en contactarme haciendo clic en el botón de abajo. Te responderé
                lo antes posible y te brindaré la mejor atención.
              </p>
              <div className="Datos-Form">
                <div>
                  <ContactForm />
                </div>

                <img
                  loading="lazy"
                  src="/images/Contacto/daniletto-contactanos-animado.svg"
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
