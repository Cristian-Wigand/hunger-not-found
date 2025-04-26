import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        404 Hunger Not Found
      </h1>
      <p className="text-gray-700 text-center max-w-md mb-8">
        Tu espacio ideal para reuniones de negocios. Reserva tu mesa de forma rápida y segura.
      </p>
      <nav className="flex flex-col gap-4 w-full max-w-sm">
        <Link to="/login" className="bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700">
          Iniciar Sesión
        </Link>
        <Link to="/register" className="bg-green-600 text-white py-2 rounded-lg text-center hover:bg-green-700">
          Registrarse
        </Link>
        <Link to="/reserva" className="bg-purple-600 text-white py-2 rounded-lg text-center hover:bg-purple-700">
          Reservar Mesa
        </Link>
      </nav>
    </div>
  );
};

export default Home;
