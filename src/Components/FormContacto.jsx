import React, { useEffect } from "react";

function FormContacto(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.addEventListener("load", () => {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "39987181",
        formId: "075e6686-f49c-4be5-82d6-cd0e56c513d6",
        target: ".Formulario",
      });
    });
    document.body.appendChild(script);
  }, []);

  return <div className="Formulario"></div>;
}

export default FormContacto;
