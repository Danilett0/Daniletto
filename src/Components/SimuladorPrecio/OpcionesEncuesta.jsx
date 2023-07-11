import React from "react";

function OpcionesEncuesta(props) {
    
  return (
    <div className="OpcionesMenu">
      {props.pregunta !== 7 && (
        <>
          {props.respuestas[props.pregunta - 1] && (
            <button
              className="Button Blue"
              onClick={() => {
                props.dispatch({ type: "Anterior" });
              }}
            >
              Anterior
            </button>
          )}

          {props.respuestas[props.pregunta] && props.pregunta !== 6 && (
            <button
              className="Button Green"
              onClick={() => {
                props.dispatch({ type: "Siguiente" });
              }}
            >
              Siguente
            </button>
          )}

          {props.pregunta === 6 && props.respuestas[props.pregunta] && (
            <button
              className="Button Red"
              onClick={() => {
                props.dispatch({ type: "Finalizar" });
              }}
            >
              Finalizar
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default OpcionesEncuesta;
