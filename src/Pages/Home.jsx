import React from "react";
import { Link } from "react-router-dom";
import FormContacto from "../Components/FormContacto";
import {VisualEffectTopBlue} from "../Components/ShapeVisualEffects";
import PreguntasFrecuentes from "../Components/PreguntasFrecuentes";
import "../App.css";
import "./css/Home.css";

function Home(props) {
  return (
    <main>
      <div className="Encabezado">
        <h1>¿Por qué somos la mejor opción?</h1>
        <p>
          En Daniletto, nos enfocamos en tres cosas: calidad, personalización y
          atención al cliente. Nos aseguramos de que cada sitio web sea único y
          refleje la marca y los valores de nuestros clientes.
        </p>

        <Link to="/Contacto">Obtén una cotización gratis</Link>
      </div>

      <div className="Beneficios">
        <h2>
          ESTOS SON ALGUNOS BENEFICIOS <br /> QUE TENEMOS PARA TI
        </h2>
        <div className="Cards">
          <div className="Card">
            <h3>ALTA CALIDAD</h3>
            <img src="./images/Calidad.png" alt="icono calidad" />
            <p>
              Nos aseguramos de que cada sitio web sea único y refleje la marca
              y los valores de nuestros clientes.
            </p>
          </div>
          <div className="Card">
            <h3>MEJORES PRECIOS</h3>
            <img src="./images/Dinero.png" alt="icono dinero" />
            <p>
              Ofrecemos precios competitivos para que puedas obtener un sitio
              web de alta calidad sin gastar una fortuna.
            </p>
          </div>
          <div className="Card">
            <h3>EXPERIENCIA DE USUARIO</h3>
            <img src="./images/Satisfaccion.png" alt="icono satisfaccion" />
            <p>
              Nos aseguramos de que cada sitio web sea fácil de usar y esté
              diseñado para brindar la mejor experiencia posible a los
              visitantes.
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
          <FormContacto />
          <img src="./images/contacto.png" alt="imagen contacto" />
        </div>
      </div>
    </main>
  );
}

export default Home;
