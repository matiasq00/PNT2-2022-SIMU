import logo from "./logo.svg";
import "./App.css";
import Peliculas from "./componentes/Peliculas";
import PelisPage from "./componentes/PelisPage";
import PeliculaDetails from "./componentes/PeliculaDetails";
import Pelicula from "./componentes/Pelicula";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/pelispage" element={<PelisPage />} />
        <Route path="/peliculas/:id" element={<PeliculaDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
