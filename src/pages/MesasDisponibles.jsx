import React from "react";
import { useNavigate } from "react-router-dom";

const MesasDisponibles = () => {
  const navigate = useNavigate();

  const mesas = [
    { id: 1, numero: 5, capacidad: 4 },
    { id: 2, numero: 3, capacidad: 2 },
    { id: 3, numero: 8, capacidad: 6 },
  ];

  const reservarMesa = (id) => {
    console.log("Mesa seleccionada:", id);
    navigate("/confirmacion");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <h2 className="text-2xl font-semibold text-center text-purple-800 mb-6">Mesas Disponibles</h2>
      <ul className="space-y-4 max-w-md mx-auto">
        {mesas.map((mesa) => (
          <li key={mesa.id} className="border p-4 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <p className="font-bold">Mesa #{mesa.numero}</p>
              <p>Capacidad: {mesa.capacidad} personas</p>
            </div>
            <button
              onClick={() => reservarMesa(mesa.id)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Reservar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MesasDisponibles;
