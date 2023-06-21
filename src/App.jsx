import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("Daniletto/Pages/About"));
const Contacto = React.lazy(() => import("../Pages/Contacto"));
const Portafolio = React.lazy(() => import("/Daniletto/Pages/Portafolio"));
const NotFound = React.lazy(() => import("/Daniletto/Pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/Daniletto" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/Portafolio" element={<Portafolio />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
