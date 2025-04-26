import React from "react";
import { useNavigate } from "react-router-dom";

const Reserva = () => {
  const navigate = useNavigate();

  const handleCheckTables = (e) => {
    e.preventDefault();
    navigate("/tables");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <form onSubmit={handleCheckTables} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-purple-800 mb-4 text-center">Reserva tu Mesa</h2>
        <label className="block mb-2 text-gray-700">Fecha</label>
        <input type="date" className="mb-4 p-2 border rounded w-full" required />
        <label className="block mb-2 text-gray-700">Hora</label>
        <input type="time" className="mb-6 p-2 border rounded w-full" required />
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full">
          Buscar Mesas
        </button>
      </form>
    </div>
  );
};

export default Reserva;
