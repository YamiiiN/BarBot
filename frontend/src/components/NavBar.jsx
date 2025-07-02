import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Barbot
        </Link>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link active">
              HOME
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/drinks" className="navbar-link">
              DRINKS
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              ABOUT US
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">
              BLOG
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;