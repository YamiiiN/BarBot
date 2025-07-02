import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../css/DrinkMenu.css';
// import margarita from '../assets/images/margarita.png';
import margarita from '../assets/images/cocktails-removebg-preview.png';

const DrinkMenu = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('cocktails');

    const drinks = {
        cocktails: [
            {
                id: 1,
                name: 'Margarita',
                alcohol: '10% Alcohol',
                image: margarita,
                color: 'green'
            },
            {
                id: 2,
                name: 'Mojito',
                alcohol: '10% Alcohol',
                image: '🍸',
                color: 'yellow'
            },
            {
                id: 3,
                name: 'Cosmopolitan',
                alcohol: '10% Alcohol',
                image: '🍷',
                color: 'red'
            },
            {
                id: 4,
                name: 'Whiskey Sour',
                alcohol: '10% Alcohol',
                image: '🥃',
                color: 'yellow'
            },
            {
                id: 5,
                name: 'Long Island',
                alcohol: '10% Alcohol',
                image: '🍹',
                color: 'red'
            },
            {
                id: 6,
                name: 'Bloody Mary',
                alcohol: '10% Alcohol',
                image: '🍸',
                color: 'green'
            }
        ],
        mocktails: [
            {
                id: 7,
                name: 'Virgin Mojito',
                alcohol: '0% Alcohol',
                image: '🍹',
                color: 'green'
            },
            {
                id: 8,
                name: 'Shirley Temple',
                alcohol: '0% Alcohol',
                image: '🍸',
                color: 'red'
            },
            {
                id: 9,
                name: 'Arnold Palmer',
                alcohol: '0% Alcohol',
                image: '🥤',
                color: 'yellow'
            }
        ],
        shots: [
            {
                id: 10,
                name: 'Tequila Shot',
                alcohol: '40% Alcohol',
                image: '🥃',
                color: 'yellow'
            },
            {
                id: 11,
                name: 'Jägermeister',
                alcohol: '35% Alcohol',
                image: '🥃',
                color: 'red'
            }
        ],
        signature: [
            {
                id: 12,
                name: 'Barbot Special',
                alcohol: '12% Alcohol',
                image: '🍷',
                color: 'red'
            },
            {
                id: 13,
                name: 'Robot Fuel',
                alcohol: '15% Alcohol',
                image: '🍸',
                color: 'green'
            }
        ]
    };

    const handleDrinkClick = (drink) => {
        navigate(`/drink/${drink.name.toLowerCase().replace(/\s+/g, '-')}`, {
            state: { drink }
        });
    };

    return (
        <div className="drink-menu">
            <Sidebar
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            <div className="drink-menu-content">
                <div className="drinks-grid">
                    {drinks[activeCategory]?.map((drink) => (
                        <div
                            key={drink.id}
                            className={`drink-card ${drink.color}`}
                            onClick={() => handleDrinkClick(drink)}
                        >
                            <div className="drink-image">
                                <img src={drink.image} alt={drink.name} className="drink-img" />
                            </div>
                            <h3 className="drink-name">{drink.name}</h3>
                            <p className="drink-alcohol">{drink.alcohol}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DrinkMenu;