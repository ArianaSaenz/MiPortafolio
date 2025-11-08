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
            <li>Responsible</li>
            <li>Creative Thinking</li>
            <li>Strategic Communication</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
          </ul>
          <ul className="skills-list">
            <li>Leadership</li>
            <li>Public Speaking</li>
            <li>Organization</li>
            <li>Initiative</li>
            <li>Social Media Management</li>
          </ul>
        </div>
      </div>

      
      <div className="skills-section">
        <h2 className="skills-title">Software Skills</h2>
        <div className="skills-bars">
          <div className="bar-item">
            <p>JavaScript</p>
            <div className="bar"><div className="fill js"></div></div>
          </div>
          <div className="bar-item">
            <p>Excel</p>
            <div className="bar"><div className="fill excel"></div></div>
          </div>
          <div className="bar-item">
            <p>Power BI</p>
            <div className="bar"><div className="fill powerbi"></div></div>
          </div>
          <div className="bar-item">
            <p>Microsoft Office</p>
            <div className="bar"><div className="fill office"></div></div>
          </div>
          <div className="bar-item">
            <p>HTML</p>
            <div className="bar"><div className="fill html"></div></div>
          </div>
          <div className="bar-item">
            <p>CSS</p>
            <div className="bar"><div className="fill css"></div></div>
          </div>
          <div className="bar-item">
            <p>React</p>
            <div className="bar"><div className="fill react"></div></div>
          </div>
        </div>
      </div>

      
      <div className="skills-section">
        <h2 className="skills-title">Design Skills</h2>
        <div className="skills-bars">
          <div className="bar-item">
            <p>Canva</p>
            <div className="bar"><div className="fill canva"></div></div>
          </div>
          <div className="bar-item">
            <p>Figma</p>
            <div className="bar"><div className="fill figma"></div></div>
          </div>
          <div className="bar-item">
            <p>Genially</p>
            <div className="bar"><div className="fill genially"></div></div>
          </div>
          <div className="bar-item">
            <p>PowerPoint</p>
            <div className="bar"><div className="fill ppt"></div></div>
          </div>
        </div>
      </div>
    </div>

      <Footer />
    </div>
  );
}

export default Skills;
