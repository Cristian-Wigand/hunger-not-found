import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>HUNGER NOT FOUND</h1>
      <p className="body-text">
        Bienvenido a HUNGER NOT FOUND, puedes empezar reservando una mesa{" "}
        <Link to="/reserva" className="custom-link">aquí</Link>.
      </p>
    </div>
  );
};

export default Home;
