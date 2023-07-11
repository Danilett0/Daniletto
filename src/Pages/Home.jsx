import React from "react";
import { Link } from "react-router-dom";
import { VisualEffectTopBlue } from "../Components/ShapeVisualEffects";
import PreguntasFrecuentes from "../Components/PreguntasFrecuentes";
import "../App.css";
import "../styles/pages/Home.css";

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
        <Link className="Button Red" to="/Contacto">
          Obtén una cotización gratis
        </Link>
      </div>

      <div className="Beneficios">
        <h2>
          ¿POR QUÉ ELEGIR A DANILETTO PARA TU PROYECTO WEB? 3 BENEFICIOS CLAVE
        </h2>
        <div className="Cards">
          <div className="Card">
            <h3>ALTA CALIDAD</h3>
            <img
              loading="lazy"
              src="/images/Calidad.png"
              alt="Icono de calidad para proyectos web"
            />
            <p>
              Me aseguro de que cada sitio web sea único y refleje tanto la
              marca, como los valores de nuestros clientes.
            </p>
          </div>
          <div className="Card">
            <h3>PRECIOS asequibles</h3>
            <img
              loading="lazy"
              src="/images/Dinero.png"
              alt="Icono de paginas web económicas"
            />
            <p>
              Ofrezco precios competitivos para que puedas obtener un sitio web
              de muy alta calidad sin gastar una fortuna.
            </p>
          </div>
          <div className="Card">
            <h3>EXPERIENCIA DE USUARIO</h3>
            <img
              loading="lazy"
              src="/images/Satisfaccion.png"
              alt="Icono de satisfacción del usuario en su sitio web"
            />
            <p>
              Cada sitio web sera muy fácil de usar y estará diseñado para
              brindar la mejor experiencia posible a los visitantes.
            </p>
          </div>
        </div>
      </div>

      <div className="Cotizacion">
        <h2>
          Descubre cuánto te costaría crear tu página web con este simulador
          online
        </h2>
        <img
          src="/images/cotizacion_online.png"
          alt="cotizacion online de pagina web"
          title="realiza una cotizacion con nuestro simulador online"
        />
        <p>
          ¿Te gustaría tener tu propia página web, pero no sabes cuánto te
          costaría? No te preocupes, he creado un simulador online que te
          permite calcular el precio de tu página web según tus preferencias y
          necesidades. Solo tienes que responder unas sencillas preguntas y en
          minutos obtendrás un presupuesto personalizado y sin compromiso.
        </p>
        <Link className="Button Red" to="/Simulador">
          Realiza Simulación Online
        </Link>
      </div>

      <VisualEffectTopBlue />

      <div className="Preguntas-Frecuentes">
        <PreguntasFrecuentes />
      </div>

      <div className="Contacto">
        <div className="Datos-Form">
          <div>
            <h2>CONTÁCTAME PARA OBTENER MÁS INFORMACIÓN</h2>
            <p>
              <b>¡Hey!</b> ¿Tienes alguna pregunta sobre mi trabajo? ¿Te
              interesa contratar mis servicios como desarrollador web?
              ¿Necesitas soporte técnico o quieres colaborar conmigo en algún
              proyecto? No dudes en contactarme haciendo clic en el botón de
              abajo. Te responderé lo antes posible y te brindaré la mejor
              atención.
            </p>

            <Link className="Button Red" to="/Contacto">
              Contacto
            </Link>
          </div>

          <img
            loading="lazy"
            src="/images/contacto.png"
            alt="Imagen de contacto Daniletto"
            title="Contáctame para mas información"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
