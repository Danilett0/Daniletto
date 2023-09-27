import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactDOMServer from "react-dom/server";
import { useNavigate } from "react-router-dom";
import PlantillaHtml from "./PlantillaHtml";
import Loading from "../Loading";
import "../../App.css";
import "../../styles/components/FormularioContacto.css";

const ContactForm = () => {
  const Navigate = useNavigate();
  const [Cargando, setCargando] = useState(false);
  const [Errores, setErrores] = useState(false);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    setCargando(true);

    //convieto el contenido en html que pueda entender el server
    const html = ReactDOMServer.renderToString(
      //componente de plantilla que genera el html
      <PlantillaHtml
        Nombre={data.Nombre}
        Apellido={data.Apellido}
        Email={data.Email}
        Tel={data.Tel}
        Mensaje={data.Mensaje}
      />
    );

    //defino cabeceras para la petición
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //datos para envio de correo
    const raw = JSON.stringify({
      to: "daniilo.97@hotmail.com",
      subject: "Nuevo Registro de Contacto",
      html: html,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    
    // realizo peticion al api (envio de datos)
    fetch("https://daniletto-notificacion-contacto.onrender.com/enviar-correo", requestOptions)
      .then((response) => response.text())
      .then(() => {
        setCargando(false);
        setErrores(false)
        setTimeout(() => {
          Navigate("/Gracias");
        }, 500);
      }).catch((error) => {
        setCargando(false);
        setErrores(true)
        console.log(error)
        
      });
  };

  return (
    <form
      style={{ position: "relative" }}
      className="FormContact"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="Colx2">
        <div className="Col-1">
          <input
            placeholder="Nombre"
            {...register("Nombre", { required: true })}
          />
          {errors.Nombre && <span>Nombre es requerido</span>}
        </div>

        <div div className="Col-2">
          <input
            placeholder="Apellido"
            {...register("Apellido", { required: true })}
          />
          {errors.Apellido && <span>Apellido es requerido</span>}
        </div>
      </div>

      <div className="Colx2">
        <div className="Col-1">
          <input
            type="email"
            placeholder="Correo Electronico"
            {...register("Email", { required: true })}
          />
          {errors.Email && <span>Correo es requerido</span>}
        </div>

        <div div className="Col-2">
          <input
            type="number"
            placeholder="Telefono"
            {...register("Tel", { required: true })}
          />
          {errors.Tel && <span>Telefono es requerido</span>}
        </div>
      </div>

      <div className="Colx1">
        <textarea
          placeholder="Cuentame, ¿En que puedo ayudarte?"
          name="mensaje"
          cols="5"
          rows="5"
          {...register("Mensaje", { required: true })}
        />
        {errors.Mensaje && <span>No olvides incluir un mensaje</span>}
      </div>

      <div className="Colx1">
        <input className="Button Red" type="submit" />
      </div>
      {Errores && <span>Ops! Ocurrió un error inesperado al intentar enviar el formulario</span>}
      {Cargando && <Loading />}
    </form>
  );
};

export default ContactForm;
