import React, { useState } from "react";
import RazonLlamada from "./RazonLlamada";

function HFC(props) {

  const [razonLlamada, SetRazonLlamada] = useState(false)
  const [perfilEscala, SetPerfilEscala] = useState(false)


  return (
    <div className="MainHfc">
      <button onClick={() => {
        SetRazonLlamada(true)
        SetPerfilEscala(false)
      }}>Razon de llamada</button>

      <button onClick={() => {
        SetPerfilEscala(true)
        SetRazonLlamada(false)
      }}>
        Perfiles Escalamiento
      </button>

      {razonLlamada && (
        <RazonLlamada />
      )}

      {perfilEscala && (
        <h4>|SOPNROCCID|SERVIDES1|</h4>
      )}

    </div>
  );
}

export default HFC;
