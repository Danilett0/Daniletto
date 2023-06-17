import { useState, useRef } from "react";
import "./css/PreguntasFrecuentes.css";
import { FaArrowCircleDown } from "react-icons/fa";

const preguntasFrecuentes = [
  {
    pregunta: "¿Ustedes se encargan de todo?",
    respuesta:
      "¡Claro!, puedo encargarme de todo si es necesario, diseño, creacion de textos y contenido visual, gestion de hosting y dominio, configuraciones entre otros",
  },
  {
    pregunta: "¿Como es el proceso para empezar con mi proyecto?",
    respuesta:
      "Para iniciar, realizo un levantamiento de informacion para estimar gastos y tiempo, luego preparo el diseño y espero tu aprobacion, ya aprobado comienzo a realizar la construccion de tu pagina web. enviame un mensaje y me ponde en contacto lo antes posible",
  },
  {
    pregunta: "¿CUÁL ES EL TIEMPO DE ENTREGA ESTIMADO?",
    respuesta:
      "El tiempo de entrega estimado depende de varios factores, como la complejidad del proyecto, el número de páginas, las funcionalidades requeridas y las revisiones solicitadas por el cliente.",
  },
  {
    pregunta: "¿Puedo saber como va mi proyecto?",
    respuesta:
      "Claro que si!, Por cualquiera de los medios de contacto que te brindo, puedes indagar sobre el avance de este.",
  },
  {
    pregunta: "¿Que costo tiene?",
    respuesta:
      "El costo para realizar un sitio web varia por diversos factores, como la cantidad de páginas que se necesitan, las funcionalidades que se requieran por lo que te invito a realizar una cotización personalizada por los medios de contacto disponibles.",
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
              height: preguntaExpandida === index ? "80px" : "0px",
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
