import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/reserve");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">Iniciar Sesión</h2>
        <input type="email" placeholder="Correo electrónico" className="mb-4 px-3 py-2 border rounded w-full" required />
        <input type="password" placeholder="Contraseña" className="mb-6 px-3 py-2 border rounded w-full" required />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
