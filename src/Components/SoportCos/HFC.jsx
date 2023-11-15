import React, { useState } from "react";
import RazonLlamada from "./RazonLlamada";
import Tipologia from "./Tipologia";

function HFC(props) {

  const [razonLlamada, SetRazonLlamada] = useState(false)
  const [perfilEscala, SetPerfilEscala] = useState(false)
  const [tipologia, SetTipologia] = useState(false)
  const [confAvan, SetConfAvan] = useState(false)
  const [comandos, SetComandos] = useState(false)
  const [ipFija, SetIpFija] = useState(false)

  const ResetModulos = () => {
    SetIpFija(false)
    SetRazonLlamada(false)
    SetPerfilEscala(false)
    SetTipologia(false)
    SetConfAvan(false)
    SetComandos(false)
  }

  return (
    <div className="MainHfc">

      <div className="BtnOpciones">
        <button className="Button Blue" onClick={() => {
          ResetModulos();
          SetRazonLlamada(true);
        }}>Razon de llamada</button>

        <button className="Button Blue" onClick={() => {
          ResetModulos();
          SetTipologia(true)
        }}>Tipologia de llamada</button>

        <button className="Button Blue" onClick={() => {
          ResetModulos();
          SetPerfilEscala(true)
        }}>
          Perfiles Escalamiento
        </button>

        <button className="Button Blue" onClick={() => {
          ResetModulos();
          SetConfAvan(true)
        }}>
          Configuraciones Avanzadas
        </button>

        <button className="Button Blue" onClick={() => {
          ResetModulos();
          SetComandos(true)
        }}>
          Comandos RR
        </button>

        <button className="Button Blue" onClick={() => {
          ResetModulos();
          SetIpFija(true)
        }}>
          IP FIJA
        </button>

      </div>

      {razonLlamada && (
        <RazonLlamada />
      )}

      {perfilEscala && (
        <div className="MainRazonLlamada">
          <div className="Box-Razones">
            <div className="Bloque">
              <div> <span>Visitas</span> SERVIDES1</div>
              <div> <span>Otros</span> SOPNROCCID</div>
            </div>
          </div>
        </div>
      )}

      {tipologia && (
        <Tipologia />
      )}

      {confAvan && (
        <div className="MainRazonLlamada">
          <div className="Box-Razones">
            <div className="Bloque">
              <div><span>DMZ</span> <b>IP VALIDA</b></div>
              <div><span>FORWARDING</span> <b>PUERTO + PROTOCOLO</b></div>
              <div><span>PORT FORWARDING</span> <b>PUERTO + PROTOCOLO  + IP PRIVADA</b></div>
              <div><span>PASSTHROUGH</span> <b>MAC</b></div>
            </div>
          </div>
        </div>
      )}

      {comandos && (
        <div className="MainRazonLlamada">
          <div className="Box-Razones">

            <div className="Bloque">
              <h4>BUSQUEDA POR CEDULA O NIT</h4>
              <div><span>CM</span> <b>SHIFT F9 + SHIFT F3</b></div>
            </div>
            <div className="Bloque">
              <h4>BUSQUEDA POR TELEFONO</h4>
              <div><span>CM</span> <b>SHIFT F2  (60 + INDICATIVO + NUMERO)</b></div>
            </div>
            <div className="Bloque">
              <h4>LLAMADA DE SERVICIO</h4>
              <div><span>Crear</span> <b>SHIFT F11</b></div>
              <div><span>Buscar</span> <b>SHIFT F11 + F5</b></div>
            </div>

          </div>

          <div className="Box-Razones">

            <div className="Bloque">
              <h4>VALIDAR SI ES CUENTA PYMES</h4>
              <div><span>Estrato</span> <b>SHIFT F4  + SHIFT F2</b></div>
              <div><span>F7 (Edificio)</span> <b>SHIFT F4</b></div>
            </div>
            <div className="Bloque">
              <h4>CREAR OT</h4>
              <div><span>Crear</span> <b>SHIFT F3 + F6  (F2 avanzar)</b></div>
              <div><span>Buscar</span> <b>SHIFT F7</b></div>
            </div>
            <div className="Bloque">
              <h4>MARCACIONES O PQR</h4>
              <div><span>Crear</span> <b>SHIFT F10</b></div>
              <div><span>Buscar</span> <b>SHIFT F10 + SHIFT F1 + SHIFT F4</b></div>
            </div>

          </div>
          <div className="Box-Razones">
            <div className="Bloque">
              <h4>Terminar PQR</h4>
              <div><span>ABIERTA</span> <b>F5 + F3</b></div>
              <div><span>CERRADA</span> <b>F3 + F5</b></div>
            </div>
          </div>
        </div>
      )}

      {ipFija && (
        <div className="MainRazonLlamada">
          <div className="Box-Razones">
            <div className="Bloque">
              <div><span>IP FIJA</span> <b>IP ASIGNADA (192.197.143.20)</b></div>
              <div><span>MASCARA</span> <b>255.255.255.0</b></div>
              <div><span>PUERTA ENLACE</span><b> IP TERMINADA EN 1 (192.197.143.1)</b></div>
              <div><span>DNS1</span> <b>190.157.8.33</b></div>
              <div><span>DNS2</span> <b>190.157.8.1</b></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default HFC;