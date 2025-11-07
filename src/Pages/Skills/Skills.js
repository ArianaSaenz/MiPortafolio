
import './Skills.css';

import React from "react";
import Footer from "../../Footer/Footer";
import FondoVerde from "../Home/Images/imagen4.png"; 
import FotoPerfil from "../Home/Images/imagen1.png";



function Skills() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* 🔹 BANNER SUPERIOR */}
      <header className="banner-container">
        <img src={FondoVerde} alt="Fondo verde" className="banner-bg" />

        {/* Título */}
        <h1 className="portfolio-title">PORTFOLIO</h1>

        {/* Foto flotante */}
        <div className="profile-wrapper">
          <img src={FotoPerfil} alt="Ariana Sáenz" className="profile-img" />
        </div>

        {/* Rectángulo verde oscuro */}
        <div className="info-box">
          <h2>Ariana Sáenz</h2>
          <p>Integrated Marketing Communications Student</p>
        </div>
      </header>



      <Footer />
    </div>
  );
}

export default Skills;