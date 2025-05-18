import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reserva from "./pages/Reserva";
import MesasDisponibles from "./pages/MesasDisponibles";
import Confirmacion from "./pages/Confirmacion";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/tables" element={<MesasDisponibles />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
      </Routes>
    </Router>
  );
}

export default App;
