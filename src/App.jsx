import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacto from "./Pages/Contacto";
import Blog from "./Pages/Blog";
import Portafolio from "./Pages/Portafolio";
import NotFound from "./Pages/NotFound";
import SimuladorPrecio from "./Pages/Simulador";
import Gracias from "./Pages/Gracias";

import ExperienciaUsuario from "./Pages/BlogPages/ExperienciaDeUsuarioUX";
import ImgConIA from "./Pages/BlogPages/GenerarImagenesIA";
import GoogleSearchConsole from "./Pages/BlogPages/GoogleSearchConsole";
import ImportanciaDelDiseñoWeb from "./Pages/BlogPages/ImportanciaDelDiseñoWeb";
import OptimizacionWeb from "./Pages/BlogPages/OptimizacionWeb";
import SuportCos from "./Pages/SuportCos";
import Seo from "./Pages/BlogPages/SEO";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portafolio" element={<Portafolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/SuportCos" element={<SuportCos />} />
          <Route path="/Simulador" element={<SimuladorPrecio />} />
          <Route path="/Gracias" element={<Gracias />} />
          <Route path="*" element={<NotFound />} />

          {/* rutas para artículos del blog */}
          <Route path="/todo-lo-que-necesitas-saber-sobre-el-diseño-ux-y-cómo-aplicarlo-a-tu-página-web" element={<ExperienciaUsuario />}></Route>
          <Route path="/cómo-crear-imágenes-de-alta-calidad-con-ia" element={<ImgConIA />}></Route>
          <Route path="/google-search-console:-cómo-optimizar-tu-web-y-atraer-más-clientes" element={<GoogleSearchConsole />}></Route>
          <Route path="/cómo-diseñar-una-página-web-atractiva-que-enamore-a-tus-visitantes" element={<ImportanciaDelDiseñoWeb />}></Route>
          <Route path="/optimización-web:-cómo-hacer-que-tu-página-web-sea-más-rápida-y-eficiente" element={<OptimizacionWeb />}></Route>
          <Route path="/cómo-lograr-el-mejor-posicionamiento-seo-para-tu-página-web-en-5-pasos" element={<Seo />}></Route>

        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
