import React from "react";
import { Link } from "react-router-dom";

function ResultadoEncuesta(props) {
  let valorTotal = 200000;
  const valorDomHost = 150000;
  const valorDiseño = 100000;
  const valorConten = 50000;
  const valorTienda = 1000000;
  const valorPagBasic = 200000;
  const valorPag = 60000;

  if (props.respuestas[1] === "No") {
    valorTotal += valorDiseño;
  }
  if (props.respuestas[2] === "No") {
    valorTotal += valorDomHost;
  }
  if (props.respuestas[3] === "No") {
    valorTotal += valorConten;
  }
  if (props.respuestas[4] === "Si") {
    valorTotal += valorTienda;
  }
  if (props.respuestas[5] === "No") {
    valorTotal += valorPag;
  }

  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });

  return (
    <div>
      <div className="Resumen">
        <p className="Title">
        De acuerdo con sus respuestas, el presupuesto incluye los siguientes conceptos:
        </p>
        <div className="ItemsCobro">
          {props.respuestas[1] === "No" && (
            <p>
              Valor del diseño web a la medida:{" "}
              <b className="Valor">{formatter.format(valorDiseño)}</b>
            </p>
          )}

          {props.respuestas[2] === "No" && (
            <p>
              Compra de alojamiento y dominio para el sitio web:{" "}
              <b className="Valor">{formatter.format(valorDomHost)}</b>{" "}
            </p>
          )}

          {props.respuestas[3] === "No" && (
            <p>
              Producción de contenido multimedia como imágenes, textos, etc:{" "}
              <b className="Valor">{formatter.format(valorConten)}</b>{" "}
            </p>
          )}

          {props.respuestas[4] === "Si" && (
            <p>
              Valor tienda online:{" "}
              <b className="Valor">{formatter.format(valorTienda)}</b>{" "}
            </p>
          )}

          <p>
            Sitio web con paginas esenciales (inicio, servicios, contacto):{" "}
            <b className="Valor">{formatter.format(valorPagBasic)}</b>{" "}
          </p>

          {props.respuestas[5] === "No" && (
            <p>
              Incluir mas paginas aparte de las esenciales:{" "}
              <b className="Valor">{formatter.format(valorPag)} por pagina adicional</b>{" "}
            </p>
          )}
        </div>
        <div className="ValorCobro">
          <p>
            Valor aproximado para crear su pagina web:
            <b className="Valor">{formatter.format(valorTotal)}</b>
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
