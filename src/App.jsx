import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Hire from "./Hire";
import Contact from "./Contact";
import "./App.css"; // Ensure you have styles

function App() {
  return (
      <Router basename="/your-repo">
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">PlumbConnect</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/hire">Hire</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
