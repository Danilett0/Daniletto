import { useState } from "react";
import Zte from "./Marcas/Zte";
import Huawei from "./Marcas/Huawei";

function Gpon(props) {
  const [huawei, setHuawei] = useState(false);
  const [zte, setZte] = useState(false);

  return (
    <div className="MainGpon">
      <h3>Selecciona Marca</h3>

      <div className="Marcas">
        <button
          onClick={() => {
            setHuawei(true);
            setZte(false);
          }}
          className="Button"
        >
          HUAWEI
        </button>
        <button
          onClick={() => {
            setZte(true);
            setHuawei(false);
          }}
          className="Button"
        >
          ZTE
        </button>
      </div>

        <div>
          {zte && (
            <Zte />
          )}
          {huawei && (
            <Huawei />
          )}
        </div>

    </div>
  );
}

export default Gpon;
