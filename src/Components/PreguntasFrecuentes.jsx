import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { preguntasFrecuentes } from "./data";
import "../styles/components/PreguntasFrecuentes.css";

function PreguntasFrecuentes() {
  const [preguntaExpandida, setPreguntaExpandida] = useState("0px");

  function handleClick(id) {
    setPreguntaExpandida(id === preguntaExpandida ? true : id);
  }

  return (
    <div className="Preguntas">
      <h2>PREGUNTAS FRECUENTES</h2>
      {preguntasFrecuentes.map((preguntaFrecuente) => (
        <div className="Pregunta" key={preguntaFrecuente.id}>
          <h4 onClick={() => handleClick(preguntaFrecuente.id)}>
            <FaArrowCircleDown className="icon" /> {preguntaFrecuente.pregunta}
          </h4>
          <div
            className="Respuesta"
            style={{
              height:
                preguntaExpandida === preguntaFrecuente.id ? "95px" : "0px",
              overflow: "hidden",
              transition: "height 0.5s ease-in-out",
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
