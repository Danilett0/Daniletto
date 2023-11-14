import React, { useRef, useState } from "react";

function Huawei() {
  const [firtsComan, setFirtsComan] = useState(false);
  const [Enlace, setEnlace] = useState("");
  const [ServPort, setServPort] = useState("");
  const [Puertos, setPuertos] = useState("");

  const InputEnlaceRef = useRef();
  const InpServPortRef = useRef();

  const InpRackRef = useRef();
  const InpSlotRef = useRef();
  const InpPuertoRef = useRef();
  const InpOnuRef = useRef();

  const ValEnlace = () => {
    if (
      InputEnlaceRef.current.value !== undefined &&
      InputEnlaceRef.current.value !== ""
    ) {
      setFirtsComan(true);
      setEnlace(InputEnlaceRef.current.value);
    } else {
      setFirtsComan("");
      setEnlace("");
      setServPort("");
      setPuertos("");
      alert("Enlace es necesario para continuar");
    }
  };

  const ValServicePort = () => {
    if (
      InpServPortRef.current.value !== undefined &&
      InpServPortRef.current.value !== ""
    ) {
      setServPort(InpServPortRef.current.value);
    } else {
      setServPort("");
      setPuertos("");
      alert("Service Port es necesario para continuar");
    }
  };

  const ValPuertos = () => {
    const rack = InpRackRef.current.value;
    const slot = InpSlotRef.current.value;
    const port = InpPuertoRef.current.value;
    const onu = InpOnuRef.current.value;

    if (rack && slot && port && onu) {
      setPuertos(`${rack}/${slot}/${port}/${onu}`);
    } else {
      setPuertos("");
      alert("Complete todos los datos para continuar");
    }
  };

  return (
    <div className="MainHuawei">
      <h4>
        Por favor complete toda la informacion <br /> para enviar los comandos
      </h4>

      <div className="Enlace">
        <input ref={InputEnlaceRef} type="text" placeholder="Enlace" />
        <button onClick={ValEnlace} className="Button Green">
          Continuar
        </button>
      </div>

      <div className="Comandos">
        {firtsComan && (
          <>
            <p>PASO 1</p>
            <code>display current-configuration | include {Enlace}</code>
            <code>display mac-address all | include</code>

            <div className="Enlace">
              <input
                ref={InpServPortRef}
                type="text"
                placeholder="Service Port"
              />
              <button onClick={ValServicePort} className="Button Green">
                Continuar
              </button>
            </div>

            {ServPort && (
              <>
                <p>PASO 2</p>
                <code>display service-port {ServPort}</code>
                <code>
                  display current-configuration service-port {ServPort}
                </code>

                <div className="Puertos">
                  <div>
                    <input ref={InpRackRef} placeholder="rack" type="text" />
                    <input ref={InpSlotRef} placeholder="slot" type="text" />
                    <input
                      ref={InpPuertoRef}
                      placeholder="puerto"
                      type="text"
                    />
                    <input ref={InpOnuRef} placeholder="onu" type="text" />
                  </div>
                  <button onClick={ValPuertos} className="Button Green">
                    Continuar
                  </button>
                </div>

                {Puertos && (
                  <>
                    <p>PASO 3</p>
                    <code>
                      display service-port port{" "}
                      {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                        Puertos.split("/")[2]
                      }`}
                    </code>
                    <code>
                      display service-port port{" "}
                      {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                        Puertos.split("/")[2]
                      }`}{" "}
                      ont {`${Puertos.split("/")[3]}`}
                    </code>
                    <code>
                      display current-configuration ont{" "}
                      {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                        Puertos.split("/")[2]
                      } ${Puertos.split("/")[3]}`}
                    </code>
                    <code>
                      display mac-address port{" "}
                      {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${
                        Puertos.split("/")[2]
                      }`}{" "}
                      ont {`${Puertos.split("/")[3]}`}
                    </code>

                    <p>PASO 4</p>
                    <code>config</code>
                    <code>
                      interface gpon{" "}
                      {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}`}
                    </code>
                    <code>
                      display ont optical-info{" "}
                      {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}
                    </code>
                    <code>
                      display ont alarm-state{" "}
                      {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}
                    </code>
                    <code>
                      display ont info{" "}
                      {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}
                    </code>
                    <code>
                      display ont port state{" "}
                      {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}{" "}
                      eth-port all
                    </code>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Huawei;
