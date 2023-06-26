import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { VisualEffectTopBlue } from "../Components/ShapeVisualEffects";
import Loading from "../Components/Loading";
import PreguntasFrecuentes from "../Components/PreguntasFrecuentes";
import "../App.css";
import "../styles/pages/Home.css";

const FormContacto = React.lazy(() => import("../Components/FormContacto"));

function Home() {
  return (
    <main>
      <div className="Encabezado">
        <h1>Crea tu sitio web con Daniletto, diseño y desarrollo de calidad</h1>
        <p>
          Daniletto es una marca personal creada por
          <Link className="creador" to={"/About"}>
            Jeferson Danilo Castro
          </Link>
          , un desarrollador web apasionado por el diseño y la innovación.
          Daniletto ofrece soluciones creativas y eficientes para proyectos web
          de todo tipo, desde páginas personales hasta aplicaciones complejas.
        </p>
        <Link to="/Contacto">Obtén una cotización gratis</Link>
      </div>

      <div className="Beneficios">
        <h2>
        ¿POR QUÉ ELEGIR A DANILETTO PARA TU PROYECTO WEB? 3 BENEFICIOS CLAVE
        </h2>
        <div className="Cards">
          <div className="Card">
            <h3>ALTA CALIDAD</h3>
            <img loading="lazy" src="/images/Calidad.png" alt="Icono de calidad para proyectos web" />
            <p>
              Me aseguro de que cada sitio web sea único y refleje tanto la
              marca, como los valores de nuestros clientes.
            </p>
          </div>
          <div className="Card">
            <h3>PRECIOS asequibles</h3>
            <img loading="lazy" src="/images/Dinero.png" alt="Icono de paginas web economicas" />
            <p>
              Ofresco precios competitivos para que puedas obtener un sitio web
              de muy alta calidad sin gastar una fortuna.
            </p>
          </div>
          <div className="Card">
            <h3>EXPERIENCIA DE USUARIO</h3>
            <img
              loading="lazy"
              src="/images/Satisfaccion.png"
              alt="Icono de satisfaccion del usuario en su sitio web"
            />
            <p>
              Cada sitio web sera muy fácil de usar y estará diseñado para
              brindar la mejor experiencia posible a los visitantes.
            </p>
          </div>
        </div>
      </div>
      <VisualEffectTopBlue />

      <div className="Preguntas-Frecuentes">
        <PreguntasFrecuentes />
      </div>

      <div className="Contacto">
        <h2>
          CONTÁCTANOS PARA OBTENER MÁS INFORMACIÓN
        </h2>
        <div className="Datos-Form">
          {
            <Suspense fallback={<Loading />}>
              <FormContacto />
            </Suspense>
          }

          <img
            loading="lazy"
            src="/images/contacto.png"
            alt="Imagen de contacdo Daniletto"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
