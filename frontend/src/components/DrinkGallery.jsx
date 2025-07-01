import React from 'react';
import '../styles/DrinkGallery.css';

function DrinkGallery({ drinks }) {
  return (
    <div className="drink-gallery">
      {drinks.map((drink, idx) => (
        <div className="drink-card" key={idx}>
          <img src={drink.image} alt={drink.name} />
          <div className="drink-name">{drink.name}</div>
        </div>
      ))}
    </div>
  );
}

export default DrinkGallery;
