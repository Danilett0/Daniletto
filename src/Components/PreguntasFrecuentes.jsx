import { useState, useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { preguntasFrecuentes } from "./data";
import "../styles/components/PreguntasFrecuentes.css";

function PreguntasFrecuentes() {
  const [preguntaExpandida, setPreguntaExpandida] = useState("0px");
  const respuestaRef = useRef(null);

  function handleClick(index) {
    setPreguntaExpandida(index === preguntaExpandida ? null : index);
  }

  return (
    <div className="Preguntas">
      <h2>PREGUNTAS FRECUENTES</h2>
      {preguntasFrecuentes.map((preguntaFrecuente) => (
        <div className="Pregunta" key={preguntasFrecuentes.id}>
          <h4 onClick={() => handleClick(preguntasFrecuentes.id)}>
            <FaArrowCircleDown className="icon" /> {preguntaFrecuente.pregunta}
          </h4>
          <div
            className="Respuesta"
            style={{
              height:
                preguntaExpandida === preguntasFrecuentes.id ? "100px" : "0px",
              overflow: "hidden",
              transition: "height 0.5s ease-in-out",
            }}
          >
            <div ref={respuestaRef}>
              <p>{preguntaFrecuente.respuesta}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PreguntasFrecuentes;
