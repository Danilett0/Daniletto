export const enviarCorreo = async (requestOptions, setCargando, setErrores, Navigate) => {
  try {
    const response = await fetch( "https://daniletto-notificacion-contacto.onrender.com/enviar-correo", requestOptions);
    await response.text();
    if (response.status !== 200) {
      throw new Error("Fallo la solicitud HTTP al intentar enviar el correo");
    } else {
      setCargando(false);
      setErrores(false);
      setTimeout(() => {
        Navigate("/Gracias");
      }, 500);
    }
  } catch (error) {
    setCargando(false);
    setErrores(true);
    console.log(error);
  }
};
