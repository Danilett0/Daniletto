import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactDOMServer from "react-dom/server";
import { useNavigate } from "react-router-dom";
import PlantillaHtml from "./PlantillaHtml";
import Loading from "../Loading";
import { enviarCorreo } from "./services";
import { getRequestOptions } from "./config";
import "../../App.css";
import "../../styles/components/FormularioContacto.css";

const ContactForm = () => {
  const Navigate = useNavigate();
  const [Cargando, setCargando] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCargando(true);

    //realizo la plantilla html para enviar
    const html = ReactDOMServer.renderToString(
      <PlantillaHtml
        Nombre={data.Nombre}
        Apellido={data.Apellido}
        Email={data.Email}
        Tel={data.Tel}
        Mensaje={data.Mensaje}
      />
    );

    //optengo las configuracions para la peticion
    const requestOptions = getRequestOptions(html);

    // realizo el llamado al servicio
    enviarCorreo(requestOptions, setCargando, Navigate);
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
            {...register("Nombre", {
              required: "Nombre requerido",
              pattern: {
                value: /^[a-z\s]+$/i,
                message: "El nombre sólo puede contener letras",
              },
            })}
          />
          {errors.Nombre && <span>{errors.Nombre.message}</span>}
        </div>

        <div className="Col-2">
          <input
            placeholder="Apellido"
            {...register("Apellido", {
              required: "Apellido requerido",
              pattern: {
                value: /^[a-z\s]+$/i,
                message: "El apellido sólo puede contener letras",
              },
            })}
          />
          {errors.Apellido && <span>{errors.Apellido.message}</span>}
        </div>
      </div>

      <div className="Colx2">
        <div className="Col-1">
          <input
            placeholder="Correo Electronico"
            {...register("Email", {
              required: "El correo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "correo electrónico no válido",
              },
            })}
          />
          {errors.Email && <span>{errors.Email.message}</span>}
        </div>

        <div className="Col-2">
          <input
            type="number"
            placeholder="Telefono"
            {...register("Tel", {
              required: "Teléfono requerido",
              minLength: {
                value: 10,
                message: "El teléfono debe tener exactamente 10 números",
              },
              maxLength: {
                value: 10,
                message: "El teléfono no puede tener mas de 10 números",
              },
            })}
          />
          {errors.Tel && <span>{errors.Tel.message}</span>}
        </div>
      </div>

      <div className="Colx1">
        <textarea
          placeholder="Cuentame, ¿En que puedo ayudarte?"
          name="mensaje"
          cols="5"
          rows="5"
          {...register("Mensaje", {
            required: "No olvides incluir un mensaje",
            minLength: {
              value: 30,
              message: "El mensaje debe tener al menos 30 caracteres",
            },
          })}
        />
        {errors.Mensaje && <span>{errors.Mensaje.message}</span>}
      </div>

      <div className="Colx1">
        <input className={!Cargando ? "Button Red" : "Hidde"} type="submit" />
      </div>
      {Cargando && <Loading />}
    </form>
  );
};

export default ContactForm;
