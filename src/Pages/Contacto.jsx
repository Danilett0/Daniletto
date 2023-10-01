import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import "../App.css";
import "../styles/pages/Contacto.css";

import ContactForm from "../Components/FormularioContacto/FormularioContacto";

function Contacto() {
  const loadingPage = useLoading("contacto", 300);
  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Contacto - Jeferson Danilo Castro Becerra</title>
            <meta
              name="description"
              content="Contáctame para obtener más información sobre mis servicios de desarrollo web. Soy Jeferson Castro, un apasionado desarrollador web listo para ayudarte a hacer realidad tus ideas."
            />
            <meta
              name="keywords"
              content="Jeferson Danilo Castro Becerra, contacto, desarrollador web, servicios de desarrollo web, creación de páginas web, Bogotá, Colombia, sitios web"
            />
            <link rel="canonical" href="https://www.daniletto.site/contacto" />
          </Helmet>

          <div className="Contacto">
            <h1>CONTÁCTEME PARA OBTENER MÁS INFORMACIÓN</h1>
            <p>
              Soy Jeferson Castro, un apasionado desarrollador web. ¿Necesitas
              una página web increíble? Llena este formulario y te ayudaré a
              hacerla realidad.
            </p>
            <div className="Datos-Form">
              <ContactForm />

              <div className="Imagen">
                <img
                  src="/images/Contacto/daniletto-contactanos-animado.svg"
                  alt="imagen de contacto Daniletto"
                />

                <div>
                  <Link
                    className="Whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Whatsapp"
                    to="https://wa.me/3112878998?text=Hola%20Jeferson%20te%20escribo%20por%20informacion%20ya%20que%20vi%20tu%20perfil%20en%20tu%20sitio%20web%20Daniletto"
                  >
                    <FaWhatsappSquare className="Icon" />
                  </Link>

                  <Link
                    className="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                    to="mailto:daniilo.97@hotmail.com?subject=DANILETTO"
                  >
                    <MdMarkEmailUnread className="Icon" />
                  </Link>

                  <Link
                    className="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                    to="https://www.linkedin.com/in/jefersondanilocastro/"
                  >
                    <BsLinkedin className="Icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Contacto;
