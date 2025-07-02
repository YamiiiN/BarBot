import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';  

const Sidebar = ({ activeCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 'cocktails', name: 'COCKTAILS', active: true },
    { id: 'mocktails', name: 'MOCKTAILS', active: false },
    { id: 'shots', name: 'SHOTS', active: false },
    { id: 'signature', name: 'SIGNATURE', active: false }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/home" className="sidebar-logo">
            Barbot
          </Link>
        </div>
        
        <nav className="sidebar-nav">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`sidebar-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                onCategoryChange(category.id);
                setIsOpen(false);
              }}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </div>
      
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;