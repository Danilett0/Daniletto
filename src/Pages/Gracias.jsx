import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/pages/Gracias.css";

function Gracias() {
  return (
    <div className="Seccion-Agradecimiento">
      <img
        src="/images/Gracias/daniletto-mensaje-agradecimiento-contacto.webp"
        alt="Gracias por contactarme"
      />
      <h1>¡Gracias por tu tiempo!</h1>
      <p>
        Realmente aprecio el tiempo que has dedicado a completar este
        formulario. He recibido tu solicitud y estoy
        emocionado de revisarla. Me pondré en contacto contigo lo antes posible.
        ¡Gracias por considerar mis servicios como desarrollador!
      </p>

      <Link className="Button Green" to="/">
        Vamos a inicio
      </Link>
    </div>
  );
}

export default Gracias;
