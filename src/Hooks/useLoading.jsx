import { useState, useEffect } from 'react';

function useLoading(pageKey = "home", delay = 300) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //valido clave que llega por parametro en localstorage
    const hasLoaded = localStorage.getItem(pageKey);

    //si la clave existe en localStorage
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    // si no existe la crea en localStorage
    const timer = setTimeout(() => {
      localStorage.setItem(pageKey, 'true');
      // mientras carga el contenido de la pagina..
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, pageKey]);

  return loading;
}

export default useLoading