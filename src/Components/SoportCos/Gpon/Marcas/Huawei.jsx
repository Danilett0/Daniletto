import React, { useRef, useState } from "react";

function Huawei() {
  const [firtsComan, setFirtsComan] = useState(false);
  const [ipValida, SetIpvalida] = useState("");
  const [ipWan, SetIpWan] = useState("");
  const [Enlace, setEnlace] = useState("");
  const [ServPort, setServPort] = useState("");
  const [Puertos, setPuertos] = useState("");
  const InputEnlaceRef = useRef();
  const InpServPortRef = useRef();
  const InpRackRef = useRef();
  const InpSlotRef = useRef();
  const InpPuertoRef = useRef();
  const InpOnuRef = useRef();
  const InpIpValRef = useRef();
  const InpIpWanRef = useRef();

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
      <h3>
        validacion <span style={{ color: "red" }}> red de acceso </span>
      </h3>

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
                    <code>display service-port port {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}`}</code>
                    <code>display service-port port {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}`} ont {`${Puertos.split("/")[3]}`}</code>
                    <code>display current-configuration ont {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}</code>
                    <code>display mac-address port {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}/${Puertos.split("/")[2]}`} ont {`${Puertos.split("/")[3]}`}</code>

                    <p>PASO 4</p>
                    <code>config</code>
                    <code>interface gpon {`${Puertos.split("/")[0]}/${Puertos.split("/")[1]}`}</code>
                    <code>display ont optical-info {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}</code>
                    <code>display ont alarm-state {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}</code>
                    <code>display ont info {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`}</code>
                    <code>display ont port state {`${Puertos.split("/")[2]} ${Puertos.split("/")[3]}`} eth-port all</code>

                    <h3 style={{ marginTop: "30px" }}> validacion<span style={{ color: "red" }}> Ruta Ping</span></h3>

                    <div className="Ips">
                      <input ref={InpIpValRef} type="text" placeholder="IP VALIDA" />

                      <button
                        onClick={() => {
                          if (InpIpValRef.current.value !== "") {
                            SetIpvalida(InpIpValRef.current.value)
                          } else {
                            alert("Ip Valida es requerida para continuar")
                            SetIpvalida("")
                            SetIpWan("")
                          }
                        }}
                        className="Button Green"
                      >
                        Continuar
                      </button>
                    </div>

                    {ipValida && (
                      <>
                        <code style={{ margin: "10px 0px" }}>show ip rou vrf pymes-internet {ipValida}</code>

                        <div className="Ips">
                          <input ref={InpIpWanRef} type="text" placeholder="IP WAN" />

                          <button
                            onClick={() => {

                              if (InpIpWanRef.current.value !== "") {
                                SetIpWan(InpIpWanRef.current.value)
                              } else {
                                alert("Ip Wan es requerida para continuar")
                                SetIpWan("")
                              }
                            }}
                            className="Button Green"
                          >
                            Continuar
                          </button>
                        </div>
                        {ipWan && (
                          <div className="ComandosIps">
                            <div>
                              <h4>NODO <span style={{ color: "red" }}> A1K</span></h4>
                              <code>show run vrf pymes-internet | inc {ipWan}</code>
                              <code>show run interface  </code>
                              <code>ping vrf pymes-internet {ipWan} </code>
                              <code>ping vrf pymes-internet {ipWan} re 1500 </code>
                              <code>show arp vrf pymes-internet {ipWan} </code>
                              <code><span style={{ color: "red" }}>Acceso Router:</span> telnet {ipWan} /vrf pymes-internet </code>
                            </div>

                            <div>
                              <h4>NODO <span style={{ color: "red" }}>A9K</span></h4>
                              <code>show run router static vrf pymes-internet | inc {ipWan} </code>
                              <code>show run interface Puerto Logico</code>
                              <code>ping vrf pymes-internet {ipWan}</code>
                              <code>ping vrf pymes-internet {ipWan} co 1500</code>
                              <code>show arp vrf pymes-internet {ipWan}</code>
                              <code><span style={{ color: "red" }}>Acceso Router:</span> telnet vrf pymes-internet {ipWan}</code>
                            </div>
                          </div>
                        )}
                      </>
                    )}
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
