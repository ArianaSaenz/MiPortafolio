import './Home.css';
import React from "react";
import Footer from "../../Footer/Footer";
import FondoVerde from "../Home/Images/imagen4.png";
import FotoPerfil from "../Home/Images/imagen1.png";
import Imagen2 from "../Home/Images/imagen2.png";
import SuperateLogo from "../Home/Images/superate.png";
import JavaScript from "../Home/Images/js.png";
import Excel from "../Home/Images/excel.png";

function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">


      <header className="banner-container">
        <img src={FondoVerde} alt="Fondo verde" className="banner-bg" />


        <h1 className="portfolio-title">PORTFOLIO</h1>

        <div className="profile-wrapper">
          <img src={FotoPerfil} alt="Ariana Sáenz" className="profile-img" />
        </div>


        <div className="info-box">
          <h2>Ariana Sáenz</h2>
          <p>Integrated Marketing Communications Student</p>
        </div>
      </header>


      <section className="about-section">
        <div className="about-text">
          <h2>
            Hello, <br />
            <span>I’m Ariana!</span>
          </h2>
          <p>
            I’m a passionate and creative communicator with a strong sense of
            leadership and responsibility. My journey into Marketing Integrated in
            Communications is driven by my love for storytelling, strategic thinking,
            and connecting ideas with people in meaningful ways.
          </p>
        </div>

        <div className="about-image">
          <div className="image-background"></div>
          <img src={Imagen2} alt="Ariana Sáenz" className="about-photo" />
          <div className="badge badge-date">3rd January 2008</div>
          <div className="badge badge-country">Salvadorian</div>
        </div>
      </section>


      <section className="learning-section">
        <h2 className="learning-title">My Learning Journey!</h2>
        <p className="learning-description">
          I feel that education is where my ideas took shape, and mine started with
          creativity and communication.
        </p>

        <div className="timeline">
          <div className="timeline-line"></div>


          <div className="timeline-item">
            <div className="card">
              <h3>¡Supérate! Program Graduated</h3>
              <img
                src={SuperateLogo}
                alt="¡Supérate!"
              />
            </div>
          </div>


          <div className="timeline-item">
            <div className="card">
              <h3>JavaScript Certification</h3>
              <img
                src={JavaScript}
                alt="JavaScript Certification"
              />
            </div>
          </div>


          <div className="timeline-item">
            <div className="card">
              <h3>Excel Certified</h3>
              <img
                src={Excel}
                alt="Excel Certification"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default Home;
