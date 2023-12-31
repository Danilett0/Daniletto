import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loading from "../Components/Loading";
import Header from "../Components/Blog/Header";
import useLoading from "../Hooks/useLoading";
import "../App.css";
import "../styles/pages/Blog.css";

function Blog() {
  const loadingPage = useLoading("blog", 300);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>
              El Blog de Daniletto - Tecnología, Desarrollo Web y Más
            </title>
            <meta
              name="description"
              content="Explora el mundo de la tecnología y el desarrollo web con los artículos informativos y entretenidos del blog de Daniletto."
            />
            <meta
              name="keywords"
              content="daniletto, danileto, tecnología, desarrollo web, programación, diseño web, aplicaciones web, tecnologías emergentes, blog"
            />
            <link rel="canonical" href="https://www.daniletto.site/blog" />

            {/* Etiquetas Open Graph */}
            <meta
              property="og:title"
              content="El Blog de Daniletto - Tecnología, Desarrollo Web y Más"
            />
            <meta
              property="og:description"
              content="Explora el mundo de la tecnología y el desarrollo web con los artículos informativos y entretenidos del blog de Daniletto."
            />
            <meta property="og:image" content="<URL>" />
            <meta property="og:url" content="<URL>" />
          </Helmet>

          <main className="BoxBlog">
            <Header
              Title="El Blog de Daniletto"
              SubTitle="Tecnología, Desarrollo Web y Más"
            />

            <div className="Articles">
              <div className="Article">
                <img
                  loading="lazy"
                  src="/images//Blog//creacion-de-imagen-usando-inteligencia-artificial.webp"
                  alt="crear imágenes con inteligencia artificial"
                />
                <div className="BodyArticle">
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
                  src="/images//Blog//Posicionamiento-web-SEO.webp"
                  alt="mejorar posicionamiento web con SEO"
                />
                <div className="BodyArticle">
                  <h3>
                    Cómo lograr el mejor posicionamiento SEO para tu página web
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
                  src="/images//Blog//Diseño-de-paginas-web-atractivas.webp"
                  alt="importancia del diseño web"
                />
                <div className="BodyArticle">
                  <h3>
                    Cómo diseñar una página web atractiva que enamore a tus
                    visitantes
                  </h3>
                  <p>
                    Descubre cómo definir el objetivo, el público, el contenido,
                    la navegación y el estilo de tu web para crear un diseño
                    atractivo que seduzca a tus visitantes.
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
                  src="/images//Blog//Optimizacion-web.webp"
                  alt="optimización de paginas web"
                />
                <div className="BodyArticle">
                  <h3>
                    Optimización web: cómo hacer que tu página web sea más
                    rápida y eficiente
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
                  src="/images//Blog//importancia-de-la-experiencia-de-usuario-en-la-web.webp"
                  alt="importancia de la experiencia de usuario UX"
                />
                <div className="BodyArticle">
                  <h3>
                    Todo lo que necesitas saber sobre el diseño UX y cómo
                    aplicarlo a tu página web
                  </h3>
                  <p>
                    Aprende que es el diseño UX, sus beneficios, qué principios
                    y herramientas se utilizan y cómo crear una página web que
                    satisfaga las necesidades, expectativas y emociones de los
                    usuarios.
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
                  src="/images//Blog//Google-search-console.webp"
                  alt="importancia de google search console"
                />
                <div className="BodyArticle">
                  <h3>Cómo dominar Google Search Console en 5 pasos</h3>
                  <p>
                    Aprende cómo usar Google Search Console, una herramienta
                    gratuita que te ayuda a analizar y mejorar tu web, a
                    detectar y solucionar errores, a medir el tráfico y el
                    comportamiento de los usuarios.
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
        </>
      )}
    </>
  );
}

export default Blog;
