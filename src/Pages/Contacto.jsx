import React from "react";
import { Helmet } from "react-helmet";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import ContactForm from "../Components/FormularioContacto/FormularioContacto";
import "../App.css";
import "../styles/pages/Contacto.css";

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
            <h1> <span className="Resaltar-Text-Yellow">CONTÁCTEME</span> PARA OBTENER MÁS INFORMACIÓN</h1>
            <p>
            ¿Necesitas una página web increíble para tu empresa o negocio? Estás en el lugar correcto. Te ofrezco un diseño personalizado, adaptado a tus necesidades y preferencias, con un alto nivel de calidad y funcionalidad.
            </p>
            <p>No esperes más, completa el siguiente formulario y me pondré en contacto contigo lo antes posible.</p>
            <div className="Datos-Form">

              <ContactForm />

              <div className="Imagen">
                <img
                  src="/images/Contacto/daniletto-contactanos-animado.svg"
                  alt="Contacto Daniletto"
                />
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Contacto;
