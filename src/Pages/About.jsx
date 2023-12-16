import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Helmet } from "react-helmet";
import { BsLinkedin } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { HabilidadesTecnica } from "../Data/data";
import { Link } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import ServiciosDaniletto from "../Components/ServiciosDaniletto";
import "../App.css";
import "../styles/pages/About.css";

function About() {
  const loadingPage = useLoading("about", 300);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Sobre mí - Jeferson Danilo Castro Becerra</title>
            <meta
              name="description"
              content="Conoce más sobre Jeferson Danilo Castro Becerra, desarrollador Front end apasionado por crear soluciones web que combinen funcionalidad, estética y usabilidad."
            />
            <meta
              name="keywords"
              content="Jeferson Danilo Castro Becerra, desarrollador Front end, soluciones web, funcionalidad, estética, usabilidad, creador de páginas web, Bogotá, Colombia"
            />
            <link rel="canonical" href="https://www.daniletto.site/about" />
          </Helmet>

          <div className="About">
            <div className="Box-Perfil">
              <div className="Perfil">
                <div>
                  <div>
                    <div className="Imagen">
                      <img
                        src="/images/About/foto-perfil-jeferson-danilo-castro.webp"
                        alt="imagen de perfil Jeferson Danilo Castro Becerra"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="Informacion">
                <h1>JEFERSON DANILO CASTRO BECERRA</h1>
                <h2>Desarrollador Web</h2>
                <div>
                  <div className="Medios-Contacto">
                    <Link
                      className="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://github.com/Danilett0"
                      title="Ver Repositorio"
                    >
                      <h5>GitHub</h5>
                      <FaGithub className="Icon" />
                    </Link>

                    <Link
                      className="Email"
                      target="_blank"
                      rel="noopener noreferrer"
                      to="mailto:daniilo.97@hotmail.com?subject=DANILETTO"
                      title="Enviar Correo"
                    >
                      <h5>E-mail</h5>
                      <MdMarkEmailUnread className="Icon" />
                    </Link>

                    <Link
                      className="Linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://www.linkedin.com/in/jefersoncastrob/"
                      title="Ver Perfil de Linkedin"
                    >
                      <h5>Linkedin</h5>
                      <BsLinkedin className="Icon" />
                    </Link>

                    <a
                      className="cv"
                      href="/docs/Jeferson_Castro.pdf"
                      download
                      title="Descargar CV Jeferson"
                    >
                      <h5>Descargar CV</h5>
                      <FcDocument className="Icon" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="Descripcion">
                <p>
                  👋 Hola! Bienvenido a mi perfil, Soy Jeferson Castro, un
                  programador con más de 2 años de experiencia en desarrollo
                  web. Me apasiona crear soluciones web que combinen
                  funcionalidad, estética y usabilidad. Mi trabajo refleja mi
                  esencia y mi calidad.
                </p>
              </div>
            </div>

            <div className="Conocimientos">
              <h2>Mis Habilidades</h2>
              <ul>
                {HabilidadesTecnica.map((item) => (
                  <li key={item.id}>
                    <p>{item.talento}</p>
                    <img src={item.img} alt="" />
                  </li>
                ))}
              </ul>
            </div>

            <ServiciosDaniletto />

            <div className="Metodologia">
              <h2>¿CÓMO TRABAJO?</h2>
              <div className="Cards">
                <div className="Card White" data-content="1">
                  <h4>TOMA DE REQUERIMIENTOS</h4>
                  <img
                    loading="lazy"
                    src="/images/About/requerimientos.webp"
                    alt="requerimientos para empezar tu proyecto web"
                  />
                  <p>
                    Estudio los requisitos y el propósito de tu sitio web. Te
                    sugiero alternativas más adecuadas para tu proyecto.
                  </p>
                </div>
                <div className="Card White" data-content="2">
                  <h4>CREACION DEL DISEÑO</h4>
                  <img
                    loading="lazy"
                    src="/images/About/diseño.webp"
                    alt="diseño web Daniletto"
                  />
                  <p>
                    Diseño la apariencia de tu sitio web, con un enfoque en
                    usabilidad, accesibilidad y satisfacción de tus usuarios.
                  </p>
                </div>
                <div className="Card White" data-content="3">
                  <h4>DESARROLLO DE APLICION</h4>
                  <img
                    loading="lazy"
                    src="/images/About/desarrollo.webp"
                    alt="desarrollo de paginas web"
                  />
                  <p>
                    Desarrollo tu sitio web con los lenguajes de programación
                    más apropiados para tu proyecto.
                  </p>
                </div>
                <div className="Card White" data-content="4">
                  <h4>PUBLICACION DEL PROYECTO</h4>
                  <img
                    loading="lazy"
                    src="/images/About/implementacion.webp"
                    alt="implementacion de sitios web"
                  />
                  <p>
                    Publico tu sitio web en un servidor seguro y confiable, para
                    que puedas compartirlo con el mundo entero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;
