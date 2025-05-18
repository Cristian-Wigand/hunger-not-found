import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../CSS/Confirmacion.css'

const Confirmacion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { success, error } = location.state || {};

  return (
    <div className="confirmacion-background">
      <div className="confirmacion-card">
        <h2 className="confirmacion-title">Confirmación de Reserva</h2>
        {success ? (
          <p className="text-green-600">¡Reserva realizada con éxito!</p>
        ) : (
          <p className="text-red-600">Error: {error}</p>
        )}
        <button onClick={() => navigate("/")} className="confirmacion-button">
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Confirmacion;
