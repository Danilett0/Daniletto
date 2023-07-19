import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import "../App.css";
import "../styles/pages/Blog.css";

function Blog() {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1200);
    
  }, []);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <main className="BoxBlog">
          <div className="Banner">
            <img
              src="/images/ImagesBlog/Banner_blog_daniletto.jpg"
              alt="Banner blog daniletto"
            />
            <div className="Text">
              <h1>El Blog de Daniletto</h1>
              <h2>Tecnología, Desarrollo Web y Más</h2>
            </div>
          </div>

          <div className="Articles">
            <div className="Article">
              <img
                loading="lazy"
                src="/images/ImagesBlog/creacion de imagen usando inteligencia artificial.jpg"
                alt="crear imágenes con inteligencia artificial"
              />
              <div className="BodyCard">
                <h3>Cómo crear imágenes de alta calidad con IA</h3>
                <p>
                  ¿Te gustaría crear imágenes impresionantes sin necesidad de
                  ser un experto en diseño gráfico? En este artículo te
                  enseñamos cómo hacerlo usando una herramienta 100% gratuita.
                </p>
                <Link
                  className="Button Red"
                  to="/cómo-crear-imágenes-de-alta-calidad-con-ia"
                >
                  Ver Artículo
                </Link>
              </div>
            </div>

            <div className="Article">
              <img
                loading="lazy"
                src="/images/ImagesBlog/Posicionamiento web SEO.jpg"
                alt="mejorar posicionamiento web con SEO"
              />
              <div className="BodyCard">
                <h3>
                  Cómo lograr el mejor posicionamiento SEO para tu página web en
                  5 pasos
                </h3>
                <p>
                  En este artículo te enseñamos cómo optimizar tu web en todos
                  los aspectos: desde las palabras clave hasta la optimización
                  web.
                </p>
                <Link
                  className="Button Red"
                  to="/cómo-lograr-el-mejor-posicionamiento-seo-para-tu-página-web-en-5-pasos"
                >
                  Ver Artículo
                </Link>
              </div>
            </div>

            <div className="Article">
              <img
                loading="lazy"
                src="/images/ImagesBlog/Diseño de paginas web atractivas.jpg"
                alt="importancia del diseño web"
              />
              <div className="BodyCard">
                <h3>
                  Cómo diseñar una página web atractiva que enamore a tus
                  visitantes
                </h3>
                <p>
                  Descubre cómo elegir los colores, las fuentes, las imágenes,
                  los elementos interactivos y la estructura de tu web para
                  crear un diseño atractivo y funcional que enamore a tus
                  visitantes.
                </p>
                <Link
                  className="Button Red"
                  to="/cómo-diseñar-una-página-web-atractiva-que-enamore-a-tus-visitantes"
                >
                  Ver Artículo
                </Link>
              </div>
            </div>

            <div className="Article">
              <img
                loading="lazy"
                src="/images/ImagesBlog/importancia de la experiencia de usuario en la web.jpg"
                alt="importancia de la experiencia de usuario UX"
              />
              <div className="BodyCard">
                <h3>
                  Todo lo que necesitas saber sobre el diseño UX y cómo
                  aplicarlo a tu página web
                </h3>
                <p>
                  Aprende qué es el diseño UX, cuáles son sus beneficios, qué
                  principios y herramientas se utilizan y cómo crear una página
                  web que satisfaga las necesidades, expectativas y emociones de
                  los usuarios.
                </p>
                <Link
                  className="Button Red"
                  to="/todo-lo-que-necesitas-saber-sobre-el-diseño-ux-y-cómo-aplicarlo-a-tu-página-web"
                >
                  Ver Artículo
                </Link>
              </div>
            </div>

            <div className="Article">
              <img
                loading="lazy"
                src="/images/ImagesBlog/Optimizacion web.jpg"
                alt="optimización de paginas web"
              />
              <div className="BodyCard">
                <h3>
                  Optimización web: cómo hacer que tu página web sea más rápida
                  y eficiente
                </h3>
                <p>
                  Descubre cómo reducir el tamaño de tus archivos, mejorar el
                  tiempo de carga, utilizar herramientas de optimización web y
                  evaluar la velocidad y el rendimiento de tu página web.
                </p>
                <Link
                  className="Button Red"
                  to="/optimización-web:-cómo-hacer-que-tu-página-web-sea-más-rápida-y-eficiente"
                >
                  Ver Artículo
                </Link>
              </div>
            </div>

            <div className="Article">
              <img
                loading="lazy"
                src="/images/ImagesBlog/Google search console.jpg"
                alt="importancia de google search console"
              />
              <div className="BodyCard">
                <h3>
                  Google Search Console: cómo optimizar tu web y atraer más
                  clientes
                </h3>
                <p>
                  Aprende cómo usar Google Search Console, una herramienta
                  gratuita que te ayuda a analizar y mejorar tu web, a detectar
                  y solucionar errores, a medir el tráfico y el comportamiento
                  de los usuarios.
                </p>
                <Link
                  className="Button Red"
                  to="/google-search-console:-cómo-optimizar-tu-web-y-atraer-más-clientes"
                >
                  Ver Artículo
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Blog;
