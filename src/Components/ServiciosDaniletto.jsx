import React from "react";
import "../styles/components/ServiciosDaniletto.css";

function ServiciosDaniletto() {
  return (
    <div className="Servicios-Daniletto">
      <h2>¿QUÉ PUEDO HACER POR TI?</h2>

      <div className="Cards">
        <div className="Card" data-content="1">
          <img
            loading="lazy"
            src="/images/Servicios/icon-diseño.png"
            alt="icono diseños creativos para desarrollo web"
          />
          <h4>DISEÑOS CREATIVOS</h4>
          <p>
            Hago que tu sitio web se destaque con diseños originales, atractivos
            y adaptados a tu público objetivo.
          </p>
        </div>
        <div className="Card" data-content="2">
          <img
            loading="lazy"
            src="/images/Servicios/icon-marca.png"
            alt="icono impulso de marca"
          />
          <h4>Marca</h4>
          <p>
            Te ayudo a crear y fortalecer la identidad de tu marca, con un logo,
            un eslogan y un estilo visual que te representen.
          </p>
        </div>
        <div className="Card" data-content="3">
          <img
            loading="lazy"
            src="/images/Servicios/icon-interface.png"
            alt="icono interface para disño web"
          />
          <h4>Interface de Usuario</h4>
          <p>
            Creo la apariencia y la interfaz de tu sitio web, pensando en la
            usabilidad, la accesibilidad y la experiencia de usuario.
          </p>
        </div>
      </div>

      <div className="Cards">
        <div className="Card" data-content="1">
          <img
            loading="lazy"
            src="/images/Servicios/icon-ux.png"
            alt="icono experiencia de usuario"
          />
          <h4>Experiencia de Usuario</h4>
          <p>
            Me aseguro de que tu sitio web sea fácil de navegar, intuitivo y
            funcional, para que tus visitantes queden satisfechos y vuelvan.
          </p>
        </div>
        <div className="Card" data-content="2">
          <img
            loading="lazy"
            src="/images/Servicios/icon-clean-code.png"
            alt="icono codigo limpio"
          />
          <h4>Codigo Limpio</h4>
          <p>
            Escribo código limpio, ordenado y eficiente, siguiendo las mejores
            prácticas y estándares de la industria.
          </p>
        </div>
        <div className="Card" data-content="3">
          <img
            loading="lazy"
            src="/images/Servicios/icon-soporte.png"
            alt="icono soporte oportuno"
          />
          <h4>Soporte Rapido</h4>
          <p>
            Te ofrezco un soporte rápido y personalizado, para resolver
            cualquier problema o duda que tengas con tu sitio web.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiciosDaniletto;
