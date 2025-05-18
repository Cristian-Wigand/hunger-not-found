import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/MesasDisponibles.css";

const agruparEnPaginas = (mesas, tamanoGrupo = 6) => {
  const grupos = [];
  for (let i = 0; i < mesas.length; i += tamanoGrupo) {
    grupos.push(mesas.slice(i, i + tamanoGrupo));
  }
  return grupos;
};

const MesasDisponibles = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { fecha, hora, mesas: mesasIniciales } = location.state || {};
  const [mesas, setMesas] = useState(mesasIniciales || []);
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    if (!fecha || !hora) {
      alert("Faltan datos de la reserva.");
      navigate("/reserva");
      return;
    }

    if (!mesasIniciales) {
      fetch(`http://localhost/hunger/mesas_disponibles.php?fecha=${fecha}&hora=${hora}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && Array.isArray(data.mesas)) {
            setMesas(data.mesas);
          } else {
            alert("No hay mesas disponibles.");
            navigate("/reserva");
          }
        })
        .catch((error) => {
          console.error("Error al obtener mesas:", error);
          alert("Error al cargar mesas.");
        });
    }
  }, [fecha, hora, mesasIniciales, navigate]);

  const reservarMesa = async (id_mesa) => {
    const id_usuario = localStorage.getItem("usuarioId");
    if (!id_usuario) {
      alert("Debes iniciar sesión para reservar.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("https://hambre-no-encontrada.ct.ws/api/reserva.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_usuario, id_mesa, fecha, hora }),
      });

      const data = await response.json();
      navigate("/confirmacion", {
        state: {
          success: data.success,
          error: data.error || null,
        },
      });
    } catch (error) {
      console.error("Error al hacer la reserva:", error);
      navigate("/confirmacion", {
        state: {
          success: false,
          error: "No se pudo conectar con el servidor.",
        },
      });
    }
  };

  const grupos = agruparEnPaginas(mesas, 9);
  const grupoActual = grupos[pagina] || [];

  const cambiarPagina = (direccion) => {
    const nuevaPagina = pagina + direccion;
    if (nuevaPagina >= 0 && nuevaPagina < grupos.length) {
      setPagina(nuevaPagina);
    }
  };

  return (
    <div className="mesas-background">
      <h2 className="mesas-title">Mesas Disponibles</h2>

      <div className="carrusel-paginado">
        <button className="carrusel-boton" onClick={() => cambiarPagina(-1)} disabled={pagina === 0}>
          ←
        </button>

        <div className="grupo-mesas">
          {grupoActual.map((mesa) => (
            <div key={mesa.id} className="mesa-item">
              <div>
                <p className="font-bold">Mesa #{mesa.id}</p>
                <p>Capacidad: 4 personas</p>
              </div>
              <button onClick={() => reservarMesa(mesa.id)} className="mesa-button">
                Reservar
              </button>
            </div>
          ))}
        </div>

        <button className="carrusel-boton" onClick={() => cambiarPagina(1)} disabled={pagina === grupos.length - 1}>
          →
        </button>
      </div>

    </div>
  );
};

export default MesasDisponibles;
