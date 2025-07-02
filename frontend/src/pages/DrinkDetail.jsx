import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../css/DrinkDetail.css'; 

const DrinkDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { drink } = location.state || {};

  // Default drink data if no state is passed
  const defaultDrink = {
    name: 'Margarita',
    alcohol: '10% Alcohol',
    image: '🍹',
    color: 'green',
    description: 'The Margarita is a timeless and refreshing cocktail that perfectly balances tangy, sweet, and salty flavors. This classic drink is made with tequila, triple sec, and fresh lime juice, creating a zesty and invigorating experience with every sip.',
    ingredients: [
      'Tequila',
      'Triple Sec',
      'Lime Juice',
      'Salt (for the rim)'
    ]
  };

  const currentDrink = drink || defaultDrink;

  const handleOrderNow = () => {
    // Simulate order processing
    alert(`Order placed for ${currentDrink.name}! Your drink will be prepared shortly.`);
  };

  const handleBackToMenu = () => {
    navigate('/drinks');
  };

  return (
    <div className="drink-detail">
      <Sidebar activeCategory="cocktails" onCategoryChange={() => {}} />
      
      <div className="drink-detail-content">
        <button className="back-button" onClick={handleBackToMenu}>
          ← Back to Menu
        </button>
        
        <div className="drink-detail-card">
          <div className="drink-info">
            <h1 className="drink-title">{currentDrink.name}</h1>
            
            <div className="drink-description">
              <p>{currentDrink.description}</p>
            </div>
            
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <ul className="ingredients-list">
                {currentDrink.ingredients.map((ingredient, index) => (
                  <li key={index} className="ingredient-item">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="btn btn-primary order-button" onClick={handleOrderNow}>
              ORDER NOW!
            </button>
          </div>
          
          <div className="drink-visual">
            <div className={`drink-image-large ${currentDrink.color}`}>
              <span className="drink-emoji-large">{currentDrink.image}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetail;