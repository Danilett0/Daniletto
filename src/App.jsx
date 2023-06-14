import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacto from "./Pages/Contacto";
import Portfolio from "./Pages/Portafolio";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Portfolio' element={<Portfolio />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Contacto' element={<Contacto />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
