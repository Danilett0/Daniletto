import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { preguntasFrecuentes } from "../Data/data";
import "../styles/components/PreguntasFrecuentes.css";

function PreguntasFrecuentes() {
  const [pregunta, setpregunta] = useState(null);

  const handleClick = (id) => {
    setpregunta( id === pregunta ? "close" : id );
  };

  return (
    <div className="Preguntas">
      <h2>ALGUNAS DE LAS <span className="Resaltar-Text-Yellow">PREGUNTAS FRECUENTES </span> AL EMPEZAR UN PROYECTO </h2>
      {preguntasFrecuentes.map((preguntaFrecuente) => (
        <div className="Pregunta" key={preguntaFrecuente.id}>
          <h3 onClick={() => handleClick(preguntaFrecuente.id)} className={pregunta === preguntaFrecuente.id ? "Active" : ""}>
            <FaPlus className="icon" /> {preguntaFrecuente.pregunta}
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
