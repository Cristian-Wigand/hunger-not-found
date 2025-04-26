import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Crear Cuenta</h2>
        <input type="text" placeholder="Nombre" className="mb-3 px-3 py-2 border rounded w-full" required />
        <input type="email" placeholder="Correo electrónico" className="mb-3 px-3 py-2 border rounded w-full" required />
        <input type="tel" placeholder="Teléfono" className="mb-3 px-3 py-2 border rounded w-full" required />
        <input type="password" placeholder="Contraseña" className="mb-5 px-3 py-2 border rounded w-full" required />
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
