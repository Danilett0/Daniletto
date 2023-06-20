import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { VisualEffectTopBlue } from "../Components/ShapeVisualEffects";
import PreguntasFrecuentes from "../Components/PreguntasFrecuentes";

import Loading from "../Components/Loading";
import "../App.css";
import "../styles/pages/Home.css";

const FormContacto = React.lazy(() => import("../Components/FormContacto"));

function Home() {
  return (
    <main>
      <div className="Encabezado">
        <h1>¿Por qué soy tu mejor opción?</h1>
        <p>
          Siempre me encofo en 3 cosas para cada uno de mis clientes: calidad,
          cumplimiento y atención. Me aseguro de que cada sitio web sea
          único y refleje la marca y los valores de nuestros clientes.
        </p>

        <Link to="/Contacto">Obtén una cotización gratis</Link>
      </div>

      <div className="Beneficios">
        <h2>
          ESTOS SON ALGUNOS BENEFICIOS <br /> QUE PUEDO OFRECERTE
        </h2>
        <div className="Cards">
          <div className="Card">
            <h3>ALTA CALIDAD</h3>
            <img loading="lazy" src="./images/Calidad.png"  alt="icono calidad" />
            <p>
              Me aseguro de que cada sitio web sea único y refleje tanto la
              marca, como los valores de nuestros clientes.
            </p>
          </div>
          <div className="Card">
            <h3>PRECIOS asequibles</h3>
            <img loading="lazy" src="./images/Dinero.png" alt="icono dinero" />
            <p>
              Ofresco precios competitivos para que puedas obtener un sitio web
              de muy alta calidad sin gastar una fortuna.
            </p>
          </div>
          <div className="Card">
            <h3>EXPERIENCIA DE USUARIO</h3>
            <img loading="lazy" src="./images/Satisfaccion.png" alt="icono satisfaccion" />
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
          CONTÁCTANOS PARA OBTENER <br /> MÁS INFORMACIÓN
        </h2>
        <div className="Datos-Form">
          {
            <Suspense fallback={<Loading />}>
              <FormContacto />
            </Suspense>
          }

          <img loading="lazy" src="./images/contacto.png" alt="imagen contacto" />
        </div>
      </div>
    </main>
  );
}

export default Home;
