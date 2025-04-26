import React from "react";
import { Link } from "react-router-dom";

const Confirmacion = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4">
      <h2 className="text-3xl font-bold text-green-700 mb-4">¡Reserva Confirmada! 🎉</h2>
      <p className="text-gray-700 text-center mb-6 max-w-md">
        Gracias por reservar con 404 Hunger Not Found. Te esperamos para tu próxima reunión profesional.
      </p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Confirmacion;
