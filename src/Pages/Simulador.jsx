import React, { useReducer, useState } from "react";
import { Helmet } from "react-helmet";
import Cuestionario from "../Components/SimuladorPrecio/Cuestionario";
import OpcionesEncuesta from "../Components/SimuladorPrecio/OpcionesEncuesta";
import "../App.css";
import "../styles/components/SimuladorPrecio/SimuladorPrecio.css";

function Pruebas() {
  // estado para guardar las respuestas del usuario
  const [respuestas, setRespuestas] = useState({});

  const handleCheckboxChange = (pregunta, respuesta) => {
    //realizo la nueva asignación al objeto inicial para guardar las respuestas
    setRespuestas((respuestas) => ({
      ...respuestas,
      [pregunta]: respuesta,
    }));
  };

  // control para los botones de siguiente y anterior
  const [pregunta, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "Siguiente":
        if (state < 6) {
          return state + 1;
        } else {
          return state;
        }
      case "Anterior":
        if (state > 1) {
          return state - 1;
        } else {
          return state;
        }
      case "Finalizar":
        return state + 1;

      default:
        return state;
    }
  }, 1);

  return (
    <>
      <Helmet>
        <title>Simulador de precios - Jeferson Danilo Castro Becerra</title>
        <meta
          name="description"
          content="Utiliza nuestro simulador de precios para obtener una cotización aproximada para tu página web. Responde algunas preguntas sobre tus necesidades y te daremos un valor aproximado."
        />
        <meta
          name="keywords"
          content="Jeferson Danilo Castro Becerra, simulador de precios, cotización, página web, diseño web, desarrollo web, bogota"
        />
        <link rel="canonical" href="https://www.daniletto.site/simulador" />
      </Helmet>

      <div className="SimuladorPrecios">
        <img
          src="/images/SimuladorPrecio/daniletto-encuesta-cotizar-pagina-web.svg"
          alt="cotización online de pagina web"
          title="realiza una cotización con nuestro simulador online"
        />

        <Cuestionario
          pregunta={pregunta}
          respuestas={respuestas}
          handleCheckboxChange={handleCheckboxChange}
        />

        <OpcionesEncuesta
          pregunta={pregunta}
          respuestas={respuestas}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}

export default Pruebas;
