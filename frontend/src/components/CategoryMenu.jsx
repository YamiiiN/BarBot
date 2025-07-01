import React from 'react';
import '../styles/CategoryMenu.css';

function CategoryMenu({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className="sidebar">
      <ul>
        {categories.map(cat => (
          <li
            key={cat}
            className={cat === selectedCategory ? 'active' : ''}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryMenu;
