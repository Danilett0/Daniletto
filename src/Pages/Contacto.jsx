import React, { Suspense } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/pages/Contacto.css";

const FormContacto = React.lazy(() => import("../Components/FormContacto"));

function Contacto() {
  return (
    <div className="Contacto">
      <h1>CONTÁCTEME PARA OBTENER MÁS INFORMACIÓN</h1>
      <p>
        Soy Jeferson Castro, un apasionado desarrollador web. ¿Necesitas una
        página web increíble? Llena este formulario y te ayudaré a hacerla
        realidad.
      </p>
      <div className="Datos-Form">
        <Suspense fallback={<Loading />}>
          <FormContacto />
        </Suspense>

        <div className="Imagen">
          <img
            loading="lazy"
            src="/images/contacto.png"
            alt="imagen de contacto Daniletto"
          />

          <div>
            <Link
              className="Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              to="https://wa.me/3112878998?text=Hola%20Jeferson%20te%20escribo%20por%20informacion%20ya%20que%20vi%20tu%20perfil%20en%20tu%20sitio%20web%20Daniletto"
            >
              <FaWhatsappSquare className="Icon" />
            </Link>

            <Link
              className="Email"
              target="_blank"
              rel="noopener noreferrer"
              to="mailto:daniilo.97@hotmail.com?subject=DANILETTO"
            >
              <MdMarkEmailUnread className="Icon" />
            </Link>

            <Link
              className="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/in/jeferson-danilo-castro-becerra-ab46a7180/"
            >
              <BsLinkedin className="Icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
