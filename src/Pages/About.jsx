import React, { Suspense } from "react";
import { VisualEffectTopWhite } from "../Components/ShapeVisualEffects";
import Loading from "../Components/Loading";
import { FaCheckCircle, FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { ListaHabilidades } from "../Components/data";
import "../App.css";
import "../styles/pages/About.css";

const FormContacto = React.lazy(() => import("../Components/FormContacto"));

function About(props) {
  return (
    <div className="About">
      <div className="Box-Perfil">
        <div className="Perfil">
          <div className="Descripcion">
            <h1>JEFERSON DANILO CASTRO BECERRA</h1>
            <p>
              Soy un desarrollador Front end. Me
              apasiona crear soluciones web que combinen funcionalidad, estética
              y usabilidad.
            </p>
            <p>
              Mi trabajo refleja mi esencia y mi calidad. Soy una persona
              creativa y recursiva, que siempre busca nuevas formas de resolver
              problemas y mejorar los procesos.
            </p>
            <p>
              Me aseguro de que cada solución sea personalizada y adaptada a tus
              necesidades. Si estás buscando a alguien comprometido, creativo y 
              confiable, puedo ayudarte a hacer realidad tus ideas.
              Si tienes alguna pregunta o necesitas más
              información, no dudes en contactarme.
            </p>
            <div className="GitHub">
              <p>
                Te invito a visitar mi perfil en GitHb para ver mas sobre mis
                proyectos
              </p>
              <a target="_blanck" href="https://github.com/Danilett0">
                Ver Repositorio
              </a>
            </div>
          </div>

          <div className="Imagen">
            <img
              src="/images/perfil.jpg"
              alt="imagen de perfil Jeferson Danilo Castro Becerra"
            />
            <div>
              <a
                className="Whatsapp"
                target="_blanck"
                rel="noopener noreferrer"
                href="https://wa.me/3112878998?text=Hola%20Jeferson%20te%20escribo%20por%20informacion%20ya%20que%20vi%20tu%20perfil%20en%20tu%20sitio%20web%20Daniletto"
                title="Escribir a WhatsApp"
              >
                <FaWhatsappSquare className="Icon" />
              </a>

              <a
                className="Email"
                target="_blanck"
                rel="noopener noreferrer"
                href="mailto:daniilo.97@hotmail.com?subject=DANILETTO"
                title="Enviar Correo"
              >
                <MdMarkEmailUnread className="Icon" />
              </a>

              <a
                className="Linkedin"
                target="_blanck"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jeferson-danilo-castro-becerra-ab46a7180/"
                title="Ver Perfil de Linkedin"
              >
                <BsLinkedin className="Icon" />
              </a>

              <a
                className="cv"
                rel="noopener noreferrer"
                href="/docs/cv.pdf"
                download
                title="Descargar CV Jeferson"
              >
                <FcDocument className="Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <VisualEffectTopWhite />

      <div className="Habilidades">
        <div className="Texto">
          <h2>¿QUE PUEDO HACER POR TI?</h2>
          <ul>
            {ListaHabilidades.map((listado) => (
              <li key={listado.id}>
                <p>
                  <FaCheckCircle className="Icon" />
                  {listado.habilidad}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <img
          className="Imagen"
          src="/images/dev.png"
          alt="Desarrollador web Daniletto"
        />
      </div>

      <div className="Metodologia">
        <h2>¿CÓMO TRABAJO?</h2>
        <div className="Cards">
          <div className="Card" data-content="1">
            <h4>REQUERIMIENTOS</h4>
            <img
              loading="lazy"
              src="/images/requerimientos.png"
              alt="requerimientos para empezar tu proyecto web"
            />
            <p>
              Analizo el objetivo, el público y las necesidades de tu sitio web.
              Te propongo las funcionalidades y características que mejor se
              adapten a tu proyecto.
            </p>
          </div>
          <div className="Card" data-content="2">
            <h4>DISEÑO</h4>
            <img
              loading="lazy"
              src="/images/diseño.png"
              alt="diseño web Daniletto"
            />
            <p>
              Creo la apariencia y la interfaz de tu sitio web, pensando en la
              usabilidad, la accesibilidad y la experiencia de usuario.
            </p>
          </div>
          <div className="Card" data-content="3">
            <h4>DESARROLLO</h4>
            <img
              loading="lazy"
              src="/images/desarrollo.png"
              alt="desarrollo de paginas web"
            />
            <p>
              Codifico tu sitio web usando los lenguajes de programación más
              adecuados. Construyo la estructura, las funcionalidades
              necesarias.
            </p>
          </div>
          <div className="Card" data-content="4">
            <h4>IMPLEMENTACIÓN</h4>
            <img
              loading="lazy"
              src="/images/implementacion.png"
              alt="implementacion de sitios web"
            />
            <p>
              Subo tu sitio web al servidor para que sea visible desde
              cualquier parte del mundo, valido la visualización en diferentes
              navegadores web.
            </p>
          </div>
        </div>
      </div>

      <div className="Contacto">
        <p>
          Me encantaría saber de ti. Si quieres contactarme, puedes usar
          cualquiera de los medios que te di antes. También puedes llenar un
          formulario con tu información y tu mensaje. Te contestaré lo más
          pronto que pueda. ¡Muchas gracias por tu atención!
        </p>

        <div className="Formulario">
          <Suspense fallback={<Loading />}>
            <FormContacto />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default About;
