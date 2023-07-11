import React from "react";
import ResultadoEncuesta from "./ResultadoEncuesta";

function Cuestionario(props) {
  return (
    <div className="Cuestionario">
      <div className="Pregunta">
        {props.pregunta === 1 && (
          <>
            <p className="Title">Pregunta {props.pregunta}</p>
            <div>
              <p>¿Cuentas con el diseño para tu página web?</p>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "Si")
                  }
                  checked={props.respuestas[props.pregunta] === "Si"}
                />
                <label>Sí, ya tengo un diseño realizado</label>
              </div>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "No")
                  }
                  checked={props.respuestas[props.pregunta] === "No"}
                />
                <label>No, tengo una idea, pero aún no cuento con él</label>
              </div>
            </div>
          </>
        )}

        {props.pregunta === 2 && (
          <>
            <p className="Title">Pregunta {props.pregunta}</p>
            <div>
              <p>¿Tienes el dominio y hosting comprado?</p>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "Si")
                  }
                  checked={props.respuestas[props.pregunta] === "Si"}
                />
                <label>Sí, ya los compré con mi proveedor de confianza</label>
              </div>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "No")
                  }
                  checked={props.respuestas[props.pregunta] === "No"}
                />
                <label>
                  No, aún no cuento con dominio ni hosting para mi página
                </label>
              </div>
            </div>
          </>
        )}

        {props.pregunta === 3 && (
          <>
            <p className="Title">Pregunta {props.pregunta}</p>
            <div>
              <p>
                ¿Cuentas con el contenido visual para tu página web como textos,
                imágenes, etc.?
              </p>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "Si")
                  }
                  checked={props.respuestas[props.pregunta] === "Si"}
                />
                <label>
                  Sí, ya tengo todo el contenido listo para usarlo en mi página
                </label>
              </div>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "No")
                  }
                  checked={props.respuestas[props.pregunta] === "No"}
                />
                <label>
                  No, necesito que me ayudes a generarlo para usarlo en mi
                  página
                </label>
              </div>
            </div>
          </>
        )}

        {props.pregunta === 4 && (
          <>
            <p className="Title">Pregunta {props.pregunta}</p>
            <div>
              <p>¿Necesitas que tu sitio web sea una tienda online?</p>
              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "Si")
                  }
                  checked={props.respuestas[props.pregunta] === "Si"}
                />
                <label>Sí, mi página debe ser una tienda online</label>
              </div>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "No")
                  }
                  checked={props.respuestas[props.pregunta] === "No"}
                />
                <label>
                  No, solo necesito mostrarme ante el mundo sin tener que crear
                  una tienda online
                </label>
              </div>
            </div>
          </>
        )}

        {props.pregunta === 5 && (
          <>
            <p className="Title">Pregunta {props.pregunta}</p>
            <div>
              <p>¿Cuántas Páginas tendrá tu sitio web?</p>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "Si")
                  }
                  checked={props.respuestas[props.pregunta] === "Si"}
                />
                <label>
                  Puede tener las páginas esenciales, como Inicio, servicios, y
                  contacto por ejemplo.
                </label>
              </div>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "No")
                  }
                  checked={props.respuestas[props.pregunta] === "No"}
                />
                <label>
                  Necesito más de las esenciales, ya que quiero mostrar más
                  información en mi página web
                </label>
              </div>
            </div>
          </>
        )}

        {props.pregunta === 6 && (
          <>
            <p className="Title">Pregunta {props.pregunta}</p>
            <div>
              <p>
                Toda esta información será usada para brindarte un valor
                teniendo en cuenta tus props.respuestas, el valor final puede
                variar un poco por lo que esto será un aproximado
              </p>

              <div className="Checkbox">
                <input
                  type="radio"
                  name={`props.pregunta-${props.pregunta}`}
                  onChange={() =>
                    props.handleCheckboxChange(props.pregunta, "Si")
                  }
                  checked={props.respuestas[props.pregunta] === "Si"}
                />
                <label>¡Vale, Entiendo!</label>
              </div>
            </div>
          </>
        )}
      </div>

      {/* validación para verificar si termino el cuestionario */}
      {props.pregunta === 7 && (
        <div className="Resultados">
          <ResultadoEncuesta respuestas={props.respuestas} />
        </div>
      )}
    </div>
  );
}

export default Cuestionario;
