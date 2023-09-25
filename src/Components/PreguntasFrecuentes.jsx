import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { preguntasFrecuentes } from "../Data/data";
import "../styles/components/PreguntasFrecuentes.css";

function PreguntasFrecuentes() {
  const [pregunta, setpregunta] = useState(preguntasFrecuentes[0].id);

  const handleClick = (id) => {
    setpregunta( (id === pregunta) ? "close" : id);
  };

  return (
    <div className="Preguntas">
      <h2>ALGUNAS DE LAS PREGUNTAS MÁS COMUNES QUE ME HACEN AL EMPEZAR</h2>
      {preguntasFrecuentes.map((preguntaFrecuente) => (
        <div className="Pregunta" key={preguntaFrecuente.id}>
          <h3 onClick={() => handleClick(preguntaFrecuente.id)}>
            <FaArrowCircleDown className="icon" /> {preguntaFrecuente.pregunta}
          </h3>
          <div
            className="Respuesta"
            style={{
              height: (pregunta === preguntaFrecuente.id) ? "auto" : "0px",
              overflow: "hidden"
            }}
          >
            <div>
              <p>{preguntaFrecuente.respuesta}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PreguntasFrecuentes;
