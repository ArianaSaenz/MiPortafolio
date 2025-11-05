
import './Home.css';
import React from "react";
import Footer from "../../Footer/Footer";
import Imagen1 from "../Home/Images/imagen1.png"; 
import Imagen2 from "../Home/Images/imagen2.png";


function Home() {
  return (
  
    <div className="bg-white text-gray-900 font-sans">
     

      <header className="relative bg-gradient-to-b from-green-300 to-green-700 rounded-b-3xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
          <h1 className="text-4xl font-bold text-green-900 tracking-wider">
            PORTFOLIO
          </h1>
          <nav className="space-x-6 text-white font-medium">
            <a href="/" className="hover:text-green-200">Home</a>
            <a href="/education" className="hover:text-green-200">Education</a>
            <a href="/skills" className="hover:text-green-200">Skills</a>
            <a href="/experience" className="hover:text-green-200">Experience</a>
          </nav>
        </div>
        <div className="flex items-center justify-between max-w-6xl mx-auto px-6 pb-10">
          <div>
            <img
              src={Imagen1}
              alt="Ariana Sáenz"
              className="w-48 rounded-xl shadow-lg"
            />
            <div className="bg-green-800 text-white mt-4 p-2 rounded-md w-fit">
              <h2 className="text-lg font-semibold">Ariana Sáenz</h2>
              <p className="text-sm">Integrated Marketing Communications Student</p>
            </div>
          </div>
        </div>
      </header>

     

      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
        <div className="max-w-lg">
          <h3 className="text-2xl font-bold mb-2">Hello, I’m Ariana!</h3>
          <p className="text-gray-700 leading-relaxed">
            I’m a passionate and creative communicator with a strong sense of leadership and responsibility. 
            My journey into Marketing Integrated Communications is driven by my love for storytelling, 
            strategic thinking, and connecting ideas with people in meaningful ways.
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-center">
          <img
            src={Imagen2}
            alt="Ariana"
            className="w-48 rounded-full mx-auto border-4 border-green-700"
          />
          <div className="mt-3">
            <p className="bg-green-600 text-white rounded-full px-4 py-1 inline-block text-sm">29 January 2000</p>
            <p className="bg-green-800 text-white rounded-full px-4 py-1 inline-block text-sm ml-2">Salvadorian</p>
          </div>
        </div>
      </section>

      

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-2">My Learning Journey!</h2>
        <p className="text-center text-gray-600 mb-10">
          I feel that education is where my ideas took shape, and mine started with curiosity, creativity, and communication.
        </p>

      

        <div className="relative flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-green-200 text-green-900 p-6 rounded-xl shadow-md text-center w-56">
            <h3 className="font-bold">¡Supérate! Program</h3>
            <p className="text-sm mt-2">Leadership · English · Technology</p>
          </div>

          <div className="bg-green-300 text-green-900 p-6 rounded-xl shadow-md text-center w-56">
            <h3 className="font-bold">JavaScript Certification</h3>
            <p className="text-sm mt-2">Exploring logic and creativity through code</p>
          </div>

          <div className="bg-green-400 text-green-900 p-6 rounded-xl shadow-md text-center w-56">
            <h3 className="font-bold">Excel Certified</h3>
            <p className="text-sm mt-2">Turning data into stories</p>
          </div>
        </div>

        <p className="text-center mt-10 text-gray-700 max-w-2xl mx-auto">
          Each certification isn’t just a paper — it’s a step toward blending strategy, storytelling, and innovation.
        </p>
      </section>

      <Footer />
    
    </div>
  );
}

export default Home;