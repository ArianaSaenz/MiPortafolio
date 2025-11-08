
import './Projects.css';
import React from "react";
import Footer from "../../Footer/Footer";
import FondoVerde from "../Home/Images/imagen4.png";
import FotoPerfil from "../Home/Images/imagen1.png";
import sevenLogo from "../Projects/images/sevenLogo.png";
import yumfull from "../Projects/images/yumfull.png";
import easytravel from "../Projects/images/easy.png";
function Projects() {
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

      <div className="portfolio-container">
        
        <div className="portfolio-item">
          <div className="text-content">
            <h2>YUMFULL</h2>
            <p>
              Yumfull is a project I developed to promote healthy eating through a combination of accessible food options and practical cooking ideas.
            </p>
            <p>
              With a group I created a space where people can discover nutritious products to buy and explore easy, balanced recipes they can prepare at home. My goal with Yumfull was to encourage mindful eating and make wellness more approachable by blending convenience, education, and flavor.
            </p>
             <a 
      href="https://github.com/ArianaSaenz/FrontEnd-Yumfull.git" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-button"
    >
      Take a look 
    </a>
          </div>
          <div className="image-frame">
            <img src={yumfull} alt="YumFull logo" />
          </div>
        </div>

       
        <div className="portfolio-item reverse">
          <div className="image-frame">
            <img src={sevenLogo} alt="Seven logo" />
          </div>
          <div className="text-content">
            <h2>SEVEN</h2>
            <p>
              Seven is a website I created to showcase Salvadoran artists, inspired by the concept of the seven fine arts. I began by focusing on painting, highlighting techniques such as watercolor, gouache, and acrylic.
            </p>
            <p>
              Through this project, I aimed to build a creative space that celebrates local talent and encourages artistic appreciation, while also educating visitors about different styles and mediums.
            </p>
             <a 
      href="https://github.com/tomasBONILL/SevenProyect" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-button"
    >
      Take a look
    </a>
          </div>
        </div>

        
        <div className="portfolio-item">
          <div className="text-content">
            <h2>EASY TRAVEL</h2>
            <p>
              Easy Travel is a prototype I developed to simplify the travel planning experience, especially for people who have never traveled abroad. The idea was to create a user-friendly platform where users can discover affordable and beautiful destinations, explore lodging options like Airbnbs, and access direct links to airline websites to book tickets. 
            </p>
            <p>
              With Easy Travel, I aimed to make international travel more accessible by centralizing useful tools and resources in one place.
            </p>
             <a 
      href="https://www.figma.com/design/jX8RwBUA4UMy88fan9FX9y/Untitled?node-id=0-1&t=8I9ZXljPAu4qJUDn-1" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-button"
    >
      Take a look
    </a>
          </div>
          <div className="image-frame">
            <img src={easytravel} alt="Easy Travel logo" />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Projects;