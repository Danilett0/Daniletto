import React from 'react';
import HubspotForm from "react-hubspot-form";
import Loading from "../Components/Loading";

function FormContacto() {
  return (
    <div className="Formulario">
      <HubspotForm
        portalId="39987181"
        formId="075e6686-f49c-4be5-82d6-cd0e56c513d6"
        loading={<Loading />}
      />
    </div>
  );
}

export default FormContacto;
