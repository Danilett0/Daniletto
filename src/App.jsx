import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Loading from "./Components/Loading";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacto from "./Pages/Contacto";
import Portafolio from "./Pages/Portafolio";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portafolio" element={<Portafolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
