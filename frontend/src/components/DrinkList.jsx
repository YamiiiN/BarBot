import React from 'react';
import '../styles/DrinkList.css';

function DrinkList({ drinks, onDrinkClick }) {
  return (
    <div className="drink-list">
      {drinks.map((drink, idx) => (
        <div
          key={idx}
          className="drink-card"
          onClick={() => onDrinkClick(drink)}
          role="button"
          tabIndex={0}
          onKeyPress={() => onDrinkClick(drink)}
        >
          <h3>{drink.name}</h3>
          <p><strong>Ingredients:</strong> {drink.ingredients.join(', ')}</p>
          <p><strong>Alcoholic:</strong> {drink.alcoholic ? 'Yes' : 'No'}</p>
          <p><em>{drink.notes}</em></p>
        </div>
      ))}
    </div>
  );
}

export default DrinkList;
