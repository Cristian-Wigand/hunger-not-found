import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../CSS/Login.css';
import { AuthContext } from "./AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://hambre-no-encontrada.ct.ws/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      const data = await response.json();

      if (data.success) {
        login(data.id_usuario); // usa el context
        navigate("/reserva");
      } else {
        alert("Error al iniciar sesión: " + data.error);
      }
    } catch (error) {
      alert("Error al conectar con el servidor.");
      console.error("Error en login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Iniciar Sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Entrar"}
          </button>
          <Link to="/register" className="register-button">
            ¿No tienes una cuenta?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
