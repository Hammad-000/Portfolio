import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className='  ' >

        <nav className='bg-red-200 flex justify-center p-3' >
          <NavLink to="/home" style={{ margin: '10px' }}>Home</NavLink>
          <NavLink to="/contact" style={{ margin: '10px' }}>Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

       
      </div>
    </Router>
  );
}

export default App;
