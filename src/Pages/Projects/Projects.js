
import './Projects.css';
import React from "react";
import Footer from "../../Footer/Footer";
import FondoVerde from "../Home/Images/imagen4.png"; 
import FotoPerfil from "../Home/Images/imagen1.png";
import sevenLogo from "../Projects/images/sevenLogo.png";


function Projects() {
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

<div className="portfolio-container">
      {/* YUMFULL */}
      <div className="portfolio-item">
        <div className="text-content">
          <h2>YUMFULL</h2>
          <p>
            Lorem ipsum dolor sit amet. Et tempora quod vel totam voluptatem et
            veritatis cumque. Qui aliquid omnis in omnis vero id ipsam illum aut
            porro dolores est distinctio quia sed obcaecati natus eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet. Et tempora quod vel totam voluptatem et
            veritatis cumque. Qui aliquid omnis in omnis vero id ipsam illum aut
            porro dolores est distinctio quia sed obcaecati natus eum.
          </p>
        </div>
        <div className="image-frame">
          <img src={sevenLogo} alt="YumFull logo" />
        </div>
      </div>

      {/* SEVEN */}
      <div className="portfolio-item reverse">
        <div className="image-frame">
          <img src={sevenLogo} alt="Seven logo" />
        </div>
        <div className="text-content">
          <h2>SEVEN</h2>
          <p>
            Lorem ipsum dolor sit amet. Et tempora quod vel totam voluptatem et
            veritatis cumque. Qui aliquid omnis in omnis vero id ipsam illum aut
            porro dolores est distinctio quia sed obcaecati natus eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet. Et tempora quod vel totam voluptatem et
            veritatis cumque. Qui aliquid omnis in omnis vero id ipsam illum aut
            porro dolores est distinctio quia sed obcaecati natus eum.
          </p>
        </div>
      </div>

      {/* EASY TRAVEL */}
      <div className="portfolio-item">
        <div className="text-content">
          <h2>EASY TRAVEL</h2>
          <p>
            Lorem ipsum dolor sit amet. Et tempora quod vel totam voluptatem et
            veritatis cumque. Qui aliquid omnis in omnis vero id ipsam illum aut
            porro dolores est distinctio quia sed obcaecati natus eum.
          </p>
          <p>
            Lorem ipsum dolor sit amet. Et tempora quod vel totam voluptatem et
            veritatis cumque. Qui aliquid omnis in omnis vero id ipsam illum aut
            porro dolores est distinctio quia sed obcaecati natus eum.
          </p>
        </div>
        <div className="image-frame">
          <img src={sevenLogo} alt="Easy Travel logo" />
        </div>
      </div>
    </div>


      <Footer />
    </div>
  );
}

export default Projects;