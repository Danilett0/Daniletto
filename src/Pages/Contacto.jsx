import React from "react";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import "../App.css";
import "../styles/pages/Contacto.css";

const FormContacto = React.lazy(() => import("../Components/FormContacto"));

function Contacto() {
  return (
    <div className="Contacto">
      <h1>
        CONTÁCTAME PARA OBTENER <br /> MÁS INFORMACIÓN
      </h1>
      <div className="Datos-Form">
        {
          <React.Suspense fallback={<Loading />}>
            <FormContacto />
          </React.Suspense>
        }

        <div className="Imagen">
          <img
            loading="lazy"
            src="/images/contacto.png"
            alt="imagen contacto"
          />

          <div>
            <Link
              className="Whatsapp"
              to={"https://wa.me/3112878998?text=Hola%20Jeferson%20te%20escribo%20por%20informacion%20ya%20que%20vi%20tu%20perfil%20en%20tu%20sitio%20web%20Daniletto"}
            >
              <FaWhatsappSquare className="Icon" />
            </Link>

            <Link
              className="Email"
              to={"mailto:daniilo.97@hotmail.com?subject=DANILETTO"}
            >
              <MdMarkEmailUnread className="Icon" />
            </Link>

            <Link
              className="Linkedin"
              to={"linkedin.com/in/jeferson-danilo-castro-becerra-ab46a7180/"}
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
