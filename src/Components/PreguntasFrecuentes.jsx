import { useState, useRef } from "react";
import "./css/PreguntasFrecuentes.css";
import { FaArrowCircleDown } from "react-icons/fa";

const preguntasFrecuentes = [
  {
    pregunta: "¿CUÁL ES EL TIEMPO DE ENTREGA ESTIMADO?",
    respuesta:
      "El tiempo de entrega estimado depende de varios factores, como la complejidad del proyecto, el número de páginas, las funcionalidades requeridas y las revisiones solicitadas por el cliente.",
  },
  {
    pregunta: "¿CÓMO PUEDO REALIZAR UN SEGUIMIENTO DE MI PEDIDO?",
    respuesta:
      "El tiempo de entrega estimado depende de varios factores, como la complejidad del proyecto, el número de páginas, las funcionalidades requeridas y las revisiones solicitadas por el cliente.",
  },
  {
    pregunta: "¿CÓMO PUEDO REALIZAR UN SEGUIMIENTO DE MI PEDIDO?",
    respuesta:
      "El tiempo de entrega estimado depende de varios factores, como la complejidad del proyecto, el número de páginas, las funcionalidades requeridas y las revisiones solicitadas por el cliente.",
  },
  {
    pregunta: "¿CÓMO PUEDO REALIZAR UN SEGUIMIENTO DE MI PEDIDO?",
    respuesta:
      "El tiempo de entrega estimado depende de varios factores, como la complejidad del proyecto, el número de páginas, las funcionalidades requeridas y las revisiones solicitadas por el cliente.",
  },
];

function PreguntasFrecuentes() {
  const [preguntaExpandida, setPreguntaExpandida] = useState("0px");
  const respuestaRef = useRef(null);

  function handleClick(index) {
    setPreguntaExpandida(index === preguntaExpandida ? null : index);
  }

  return (
    <div className="Preguntas">
      <h2>PREGUNTAS FRECUENTES</h2>
      {preguntasFrecuentes.map((preguntaFrecuente, index) => (
        <div className="Pregunta" key={index}>
          <h4 onClick={() => handleClick(index)}>
            <FaArrowCircleDown className="icon" /> {preguntaFrecuente.pregunta}
          </h4>
          <div
            className="Respuesta"
            style={{
              height: preguntaExpandida === index ? "50px" : "0px",
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
