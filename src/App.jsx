import React, { Suspense } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Contacto = React.lazy(() => import("./Pages/Contacto"));
const Portafolio = React.lazy(() => import("./Pages/Portafolio"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <HashRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/Portafolio" element={<Portafolio />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
