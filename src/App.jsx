import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacto from "./Pages/Contacto";
import Portafolio from "./Pages/Portafolio";
import NotFound from "./Pages/NotFound";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Portafolio" element={<Portafolio />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
