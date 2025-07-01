import React from 'react';
import '../styles/DrinkGrid.css';

function DrinkGrid({ drinks }) {
  return (
    <div className="drink-grid">
      {drinks.map((drink, idx) => (
        <div className="drink-card" key={idx}>
          <div className="drink-img">
            <img src={drink.image || '/assets/images/margarita.png'} alt={drink.name} />
          </div>
          <div className="drink-meta">
            <h3>{drink.name}</h3>
            <p className="drink-ingredients">{drink.ingredients.join(', ')}</p>
            <span className="drink-notes">{drink.notes}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DrinkGrid;
