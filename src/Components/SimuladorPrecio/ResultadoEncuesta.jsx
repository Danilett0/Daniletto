import React from "react";
import { Link } from "react-router-dom";

function ResultadoEncuesta(props) {
  let valorPagina = 200000;

  if (props.respuestas[1] === "No") {
    valorPagina += 100000;
  }
  if (props.respuestas[2] === "No") {
    valorPagina += 150000;
  }
  if (props.respuestas[3] === "No") {
    valorPagina += 100000;
  }
  if (props.respuestas[4] === "Si") {
    valorPagina += 1000000;
  }
  if (props.respuestas[5] === "No") {
    valorPagina += 50000;
  }

  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });

  return (
    <div>
      <div className="Resumen">
        <p className="Title">
          Basándome en tus respuestas el costo incluirá los siguientes Items.
        </p>
        <div className="ItemsCobro">
          {props.respuestas[1] === "No" && (
            <p>
              Costo diseño web totalmente personalizado:{" "}
              <b className="Valor">$100.000</b>
            </p>
          )}

          {props.respuestas[2] === "No" && (
            <p>
              Compara Hosting y dominio para el sitio web:{" "}
              <b className="Valor">$150.000</b>{" "}
            </p>
          )}

          {props.respuestas[3] === "No" && (
            <p>
              Creación de contenido como imágenes, textos, videos etc:{" "}
              <b className="Valor">$100.000</b>{" "}
            </p>
          )}

          {props.respuestas[4] === "Si" && (
            <p>
              Creación de tienda Online para el sitio web:{" "}
              <b className="Valor">$1'000.000</b>{" "}
            </p>
          )}

          <p>
            Sitio web con paginas esenciales (inicio, servicios, contacto):{" "}
            <b className="Valor">$200.000</b>{" "}
          </p>

          {props.respuestas[5] === "No" && (
            <p>
              Incluir mas paginas aparte de las esenciales:{" "}
              <b className="Valor">$50.000 por pagina adicional</b>{" "}
            </p>
          )}
        </div>
        <div className="ValorCobro">
          <p>
            Valor aproximado para crear su pagina web:
            <b className="Valor"> {formatter.format(valorPagina)}</b>
          </p>
        </div>
      </div>

      <div className="Opciones">
        <Link className="Button Green" to="/">
          Entiendo, llévame a inicio
        </Link>
        <Link className="Button Red" to="/Contacto">
          Vale, quiero contactarlos
        </Link>
      </div>
    </div>
  );
}

export default ResultadoEncuesta;
