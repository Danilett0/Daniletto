export const enviarCorreo = async (requestOptions, setCargando, Navigate) => {
  try {
    const response = await fetch( "https://daniletto-notificacion-contacto.onrender.com/enviar-correo", requestOptions);
    await response.text();

    setTimeout(() => {
      setCargando(false);
      Navigate("/Gracias");
    }, 500);

    if (response.status !== 200) {
      throw new Error("Fallo la solicitud HTTP al intentar enviar el correo");
    }else{
      console.log("Correo Enviado Exitosamente")
    }

  } catch (error) {
    console.log(error);
  }
};
