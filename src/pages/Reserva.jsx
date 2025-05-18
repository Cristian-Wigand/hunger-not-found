import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Reserva.css";


const Reserva = () => {
  const navigate = useNavigate();
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId");
    if (!usuarioId) {
      alert("No puedes acceder sin haber iniciado sesión.");
      navigate("/login");
    }
  }, [navigate]);  

  const handleCheckTables = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://hambre-no-encontrada.ct.ws/api/mesas_disponibles.php?fecha=${fecha}&hora=${hora}`);
      const data = await response.json();

      if (data.success && Array.isArray(data.mesas)) {
        navigate("/tables", { state: { mesas: data.mesas, fecha, hora } });
      } else {
        alert(data.error || "No hay mesas disponibles.");
      }
    } catch (error) {
      console.error("Error al consultar mesas:", error);
      alert("Error al consultar mesas disponibles.");
    }
  };

  return (
    <div className="reserva-background">
      <form onSubmit={handleCheckTables} className="reserva-form">
        <h2 className="reserva-title">Reserva tu Mesa</h2>

        <label className="reserva-label">Fecha</label>
        <input
          type="date"
          className="reserva-input"
          required
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label className="reserva-label">Hora</label>
        <input
          type="time"
          className="reserva-input"
          required
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <button className="reserva-button">Buscar Mesas</button>
      </form>
    </div>
  );
};

export default Reserva;
