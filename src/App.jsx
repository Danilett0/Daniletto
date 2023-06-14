import React, { Suspense } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css"

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Contacto = React.lazy(() => import("./Pages/Contacto"));
const Portfolio = React.lazy(() => import("./Pages/Portafolio"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Portafolio" element={<Portfolio />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
