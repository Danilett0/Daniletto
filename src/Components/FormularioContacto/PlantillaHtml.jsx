import React from "react";
import "../../App.css";

const PlantillaHtml = ({ Nombre, Apellido, Email, Tel, Mensaje }) => {
    return (
        <html>
            <head>
                <title>Nuevo Registro de Contacto</title>
            </head>
            <body>
                <h1><b>Nuevo Registro de Contacto en <span style={{ color: "#d94848" }}>Daniletto.site</span></b></h1>
                <p><b>Nombre:</b> {`${Nombre} ${Apellido}`}</p>
                <p><b>Correo:</b> {Email}</p>
                <p><b>Telefono:</b> {Tel}</p>
                <p><b>Te dejo el siguiente mensaje:</b></p>
                <p style={{ padding: "5px", backgroundColor: "#f3f3f3" }}>{Mensaje}</p>
            </body>
        </html>
    );
};

export default PlantillaHtml;
