export const getRequestOptions = (html) => {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: "daniilo.97@hotmail.com",
        subject: "Nuevo Registro de Contacto",
        html: html,
      }),
      redirect: "follow",
    };
  };
  