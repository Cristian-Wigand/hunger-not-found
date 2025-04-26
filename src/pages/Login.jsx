import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuario simulado
    const fakeUser = {
      email: "cwigand2023@alu.uct.cl",
      password: "123456"
    };

    if (email === fakeUser.email && password === fakeUser.password) {
      // Guardar sesión simulada
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/reserva");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="mb-4 px-3 py-2 border rounded w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="mb-6 px-3 py-2 border rounded w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
