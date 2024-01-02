export const enviarCorreo = (requestOptions, setCargando, Navigate) => {

  // envio a pagina sin eserar respuesta
  // por demoras en respuesta en ocaciones con servicio
  setTimeout(() => {
    setCargando(false);
    Navigate("/Gracias");
  }, 3000);

  return new Promise((resolve, reject) => {

    // realizo solicitud al api, se retorna el resultado dado por esta
    fetch("https://daniletto-notificacion-contacto.onrender.com/enviar-correo", requestOptions)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Fallo la solicitud HTTP al intentar enviar el correo");
        } else {
          resolve(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
