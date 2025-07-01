import React from 'react';
import '../styles/DrinkDetailsModal.css';

function DrinkDetailsModal({ drink, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} role="button" tabIndex={0} onKeyPress={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>{drink.name}</h2>
        <p><strong>Alcoholic:</strong> {drink.alcoholic ? 'Yes' : 'No'}</p>
        <h3>Ingredients:</h3>
        <ul>
          {drink.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
        <p><em>{drink.notes}</em></p>
      </div>
    </div>
  );
}

export default DrinkDetailsModal;
