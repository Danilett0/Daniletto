import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Contacto = React.lazy(() => import("./Pages/Contacto"));
const Portafolio = React.lazy(() => import("./Pages/Portafolio"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
          <Route exact path="/Portafolio" element={<Portafolio />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
