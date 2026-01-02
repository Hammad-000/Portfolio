import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaPalette, FaMobile, FaServer, FaArrowRight, FaDownload } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className="">

        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-blue-900/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hammad.dev
            </div>
            <div className="hidden md:flex space-x-8  text-white">
              <NavLink to="/" className="hover:text-blue-600 transition-colors">Home</NavLink>
              <NavLink to="/about" className="hover:text-blue-600 transition-colors">About</NavLink>
              <NavLink to="/projects" className="hover:text-blue-600 transition-colors">Projects</NavLink>         
              <NavLink to="/contact" className="hover:text-blue-600 transition-colors">Contact</NavLink>
            </div>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
