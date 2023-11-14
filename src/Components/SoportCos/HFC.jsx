import React, { useState } from "react";
import RazonLlamada from "./RazonLlamada";
import Tipologia from "./Tipologia";

function HFC(props) {

  const [razonLlamada, SetRazonLlamada] = useState(false)
  const [perfilEscala, SetPerfilEscala] = useState(false)
  const [tipologia, SetTipologia] = useState(false)

  return (
    <div className="MainHfc">

      <div className="BtnOpciones">
        <button className="Button Red" onClick={() => {
          SetRazonLlamada(true)
          SetPerfilEscala(false)
          SetTipologia(false)
        }}>Razon de llamada</button>

        <button className="Button Blue" onClick={() => {
          SetTipologia(true)
          SetRazonLlamada(false)
          SetPerfilEscala(false)
        }}>Tipologia de llamada</button>

        <button className="Button Green" onClick={() => {
          SetPerfilEscala(true)
          SetRazonLlamada(false)
          SetTipologia(false)
        }}>
          Perfiles Escalamiento
        </button>
      </div>

      {razonLlamada && (
        <RazonLlamada />
      )}

      {perfilEscala && (
        <div className="MainRazonLlamada">
          <div className="Box-Razones">
            <div className="Bloque">
              <h3>Internet</h3>
              <div> <span>1 </span> SOPNROCCID</div>
              <div> <span>2 </span> SERVIDES1</div>
            </div>
          </div>
        </div>
      )}

      {tipologia && (
        <Tipologia />
      )}

    </div>
  );
}

export default HFC;
