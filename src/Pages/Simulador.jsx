import React, { useReducer, useState } from "react";
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
    <div className="SimuladorPrecios">
      <img
        src="/images/encuesta_simulador_precios.svg"
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
  );
}

export default Pruebas;
