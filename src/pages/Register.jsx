import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../CSS/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("https://hambre-no-encontrada.ct.ws/api/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        navigate("/login");
      } else {
        alert("Error al registrar: " + data.error);
      }
    } catch (error) {
      alert("Error al conectar con el servidor.");
      console.error("Error en registro:", error);
    }
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <form onSubmit={handleRegister} className="register-form">
          <h2>Crear Cuenta</h2>
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
          <input
            type="password"
            placeholder="Confirmar contraseña"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Registrarse</button>
          <Link to="/login" className="login-button">
            ¿Ya tienes una cuenta?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
