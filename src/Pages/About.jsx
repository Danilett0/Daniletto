import React from "react";
import { VisualEffectTopWhite } from "../Components/ShapeVisualEffects";
import Loading from "../Components/Loading";
import { FaCheckCircle, FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../App.css";
import "./css/About.css";

const FormContacto = React.lazy(() => import("../Components/FormContacto"));

function About(props) {
  const ListaHabilidades = [
    "Diseño y desarrollo de tu sitio web.",
    "Moficaciones, ajustes o nuevas funcionalidades para tu web.",
    "Creacion de contenido (imagen, video, texto) para tu sitio web.",
    "Diseño de plantillas de correo electrónico HTML.",
    "Administración de alojamiento web.",
    "Optimización para motores de búsqueda (SEO)",
    "Creacion de tienda online",
  ];

  return (
    <div className="About">
      <div className="Box-Perfil">
        <div className="Perfil">
          <div className="Descripcion">
            <h1>JEFERSON DANILO CASTRO BECERRA</h1>
            <p>
              Soy un desarrollador web con experiencia en UX y diseño. Me
              apasiona crear soluciones web que combinen funcionalidad, estética
              y usabilidad. <br />
              <br /> Mi trabajo refleja mi esencia y mi calidad. Soy una persona
              creativa y recursiva, que siempre busca nuevas formas de resolver
              problemas y mejorar los procesos. <br />
              <br /> No tengo miedo de proponer ideas innovadoras y de aprender
              de mis errores. Soy responsable y respetuoso con mis clientes,
              compañeros y mi trabajo.
            </p>
          </div>

          <div className="Imagen">
            <img
              src="/images/perfil.jpg"
              alt="imagen perfil jeferson danilo castro"
            />
            <div>
              <Link
                className="Whatsapp"
                to={
                  "https://wa.me/3112878998?text=Hola%20Jeferson%20te%20escribo%20por%20informacion%20ya%20que%20vi%20tu%20perfil%20en%20tu%20sitio%20web%20Daniletto"
                }
              >
                <FaWhatsappSquare className="Icon" />
              </Link>

              <Link
                className="Email"
                to="mailto:daniilo.97@hotmail.com?subject=DANILETTO"
              >
                <MdMarkEmailUnread className="Icon" />
              </Link>

              <Link
                className="Linkedin"
                to="linkedin.com/in/jeferson-danilo-castro-becerra-ab46a7180/"
              >
                <BsLinkedin className="Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <VisualEffectTopWhite />

      <div className="Habilidades">
        <div className="Texto">
          <h2>¿QUE PUEDO HACER POR TI?</h2>
          <ul>
            {ListaHabilidades.map((habilidad, index) => (
              <li key={index}>
                <p>
                  <FaCheckCircle className="Icon" />
                  {habilidad}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <img
          className="Imagen"
          src="/images/dev.png"
          alt="imagen desarrollador"
        />
      </div>

      <div className="Metodologia">
        <h2>¿CÓMO TRABAJO?</h2>
        <div className="Cards">
          <div className="Card" data-content="1">
            <h4>REQUERIMIENTOS</h4>
            <img src="/images/requerimientos.png" alt="icono requerimientos" />
            <p>
              Analizo el objetivo, el público y las necesidades de tu sitio web.
              Te propongo las funcionalidades y características que mejor se
              adapten a tu proyecto.
            </p>
          </div>
          <div className="Card" data-content="2">
            <h4>DISEÑO</h4>
            <img src="/images/diseño.png" alt="icono diseño" />
            <p>
              Creo la apariencia y la interfaz de tu sitio web, pensando en la
              usabilidad, la accesibilidad y la experiencia de usuario.
            </p>
          </div>
          <div className="Card" data-content="3">
            <h4>DESARROLLO</h4>
            <img src="/images/desarrollo.png" alt="icono desarrollo" />
            <p>
              Codifico tu sitio web usando los lenguajes de programación más
              adecuados. Construyo la estructura, las funcionalidades
              necesarias.
            </p>
          </div>
          <div className="Card" data-content="4">
            <h4>IMPLEMENTACION</h4>
            <img src="/images/implementacion.png" alt="icono implementacion" />
            <p>
              Subo tu sitio web al servidor para que sea visiable desde
              cualquier parte del mundo, valido la visualizacion en diferentes
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
          <React.Suspense fallback={<Loading />}>
            <FormContacto />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}

export default About;
