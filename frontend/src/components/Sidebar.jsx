import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className="sidebar">
      <div className="logo">BARBOT</div>
      <nav>
        <ul>
          {categories.map(cat => (
            <li
              key={cat}
              className={cat === selectedCategory ? 'active' : ''}
              onClick={() => onSelectCategory(cat)}
            >
              <span className="accent-bar"></span>
              {cat}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
