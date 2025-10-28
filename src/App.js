
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
  const showNavbar = true; 

  return (
    <Router>
      <div>
        {showNavbar && <NavBar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
