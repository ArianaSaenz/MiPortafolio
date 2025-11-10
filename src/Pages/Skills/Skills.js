import './Skills.css';
import React from "react";
import Footer from "../../Footer/Footer";
import FondoVerde from "../Home/Images/imagen4.png";
import FotoPerfil from "../Home/Images/imagen1.png";


function Skills() {
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





      <div className="skills-container">

        <div className="skills-section">
          <h2 className="skills-title">Soft Skills</h2>
          <div className="skills-grid soft">
            <ul className="skills-list">
              <li>° Responsible</li>
              <li>° Creative Thinking</li>
              <li>° Strategic Communication</li>
              <li>° Adaptability</li>
              <li>° Teamwork</li>
            </ul>
            <ul className="skills-list">
              <li>° Leadership</li>
              <li>° Public Speaking</li>
              <li>° Organization</li>
              <li>° Initiative</li>
              <li>° Social Media Management</li>
            </ul>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="skills-title">Hard Skills</h2>
          <div className="skills-grid soft">
            <ul className="skills-list">
              <li>° JavaScript</li>
              <li>° Excel</li>
              <li>° Power BI</li>
              <li>° Microsoft Office</li>
              <li>° HTML</li>
            </ul>
            <ul className="skills-list">
              <li>° React</li>
              <li>° CSS</li>
              <li>° Canva</li>
              <li>° Figma</li>
              <li>° Genially</li>
            </ul>
          </div>
        </div>




      </div>

      <Footer />
    </div>
  );
}

export default Skills;
