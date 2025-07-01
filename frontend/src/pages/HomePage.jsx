import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DrinkGallery from '../components/DrinkGallery';
import '../styles/HomePage.css';

// Data for drinks categorized
const drinkCategories = { 
  Cocktails: [
    {
      name: 'Margarita',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Tequila', 'Triple Sec', 'Lime Juice'],
      alcoholic: true,
      notes: 'Classic, with salt rim',
    },
    {
      name: 'Mojito',
      image: '/assets/images/margarita.jpg',
      ingredients: ['White Rum', 'Lime', 'Mint', 'Sugar', 'Soda'],
      alcoholic: true,
      notes: 'Refreshing & minty',
    },
    {
      name: 'Cosmopolitan',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Vodka', 'Triple Sec', 'Cranberry Juice', 'Lime Juice'],
      alcoholic: true,
      notes: 'Fruity, classy',
    },
    {
      name: 'Whiskey Sour',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Whiskey', 'Lemon Juice', 'Sugar Syrup'],
      alcoholic: true,
      notes: 'Sweet and sour',
    },
    {
      name: 'Long Island Iced Tea',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Vodka', 'Tequila', 'Rum', 'Triple Sec', 'Gin', 'Cola', 'Lemon'],
      alcoholic: true,
      notes: 'Strong & complex',
    },
    {
      name: 'Piña Colada',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Rum', 'Coconut Cream', 'Pineapple Juice'],
      alcoholic: true,
      notes: 'Creamy tropical flavor',
    },
    {
      name: 'Tequila Sunrise',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Tequila', 'Orange Juice', 'Grenadine'],
      alcoholic: true,
      notes: 'Layered, fruity',
    },
    {
      name: 'Bloody Mary',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Vodka', 'Tomato Juice', 'Lemon Juice', 'Tabasco', 'Worcestershire'],
      alcoholic: true,
      notes: 'Spicy and savory',
    },
    {
      name: 'Mai Tai',
      image: '/assets/images/margarita.jpg',
      ingredients: ['White Rum', 'Dark Rum', 'Orange Curacao', 'Lime', 'Almond Syrup'],
      alcoholic: true,
      notes: 'Tropical cocktail',
    },
    {
      name: 'Daiquiri',
      ingredients: ['White Rum', 'Lime Juice', 'Sugar'],
      alcoholic: true,
      notes: 'Simple and citrusy',
    },
  ],

  Mocktails: [
    {
      name: 'Virgin Mojito',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Lime', 'Mint', 'Sugar', 'Soda'],
      alcoholic: false,
      notes: 'Non-alcoholic mojito',
    },
    {
      name: 'Shirley Temple',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Ginger Ale', 'Grenadine', 'Lime'],
      alcoholic: false,
      notes: "Kids' favorite",
    },
    {
      name: 'Tropical Sunset',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Orange Juice', 'Pineapple', 'Grenadine'],
      alcoholic: false,
      notes: 'Beautiful layered drink',
    },
    {
      name: 'Cucumber Cooler',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Cucumber', 'Mint', 'Lime', 'Tonic Water'],
      alcoholic: false,
      notes: 'Refreshing detox drink',
    },
    {
      name: 'Berry Fizz',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Mixed Berries', 'Lemon Juice', 'Sparkling Water'],
      alcoholic: false,
      notes: 'Bubbly and fruity',
    },
    {
      name: 'Lemon Basil Smash',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Lemon Juice', 'Basil', 'Sugar Syrup', 'Soda Water'],
      alcoholic: false,
      notes: 'Herbaceous and fresh',
    },
    {
      name: 'Apple Ginger',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Apple Juice', 'Ginger Ale', 'Lemon'],
      alcoholic: false,
      notes: 'Spicy-sweet mocktail',
    },
    {
      name: 'Mango Mule',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Mango Juice', 'Lime', 'Ginger Beer'],
      alcoholic: false,
      notes: 'Mock version of Moscow Mule',
    },
    {
      name: 'Strawberry Cooler',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Strawberries', 'Lemon Juice', 'Sprite'],
      alcoholic: false,
      notes: 'Bright and sweet',
    },
    {
      name: 'Blue Lagoon (Virgin)',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Blue Curacao syrup', 'Lemonade', 'Soda'],
      alcoholic: false,
      notes: 'Vibrant and citrusy',
    },
  ],

  Shots: [
    {
      name: 'B-52',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Kahlua', 'Baileys', 'Grand Marnier'],
      alcoholic: true,
      notes: 'Layered shot',
    },
    {
      name: 'Kamikaze',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Vodka', 'Triple Sec', 'Lime Juice'],
      alcoholic: true,
      notes: 'Tangy and potent',
    },
    {
      name: 'Lemon Drop',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Vodka', 'Lemon Juice', 'Sugar Rim'],
      alcoholic: true,
      notes: 'Sweet & sour',
    },
    {
      name: 'Jägerbomb',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Jägermeister', 'Energy Drink'],
      alcoholic: true,
      notes: 'Popular party shot',
    },
    {
      name: 'Mind Eraser',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Vodka', 'Kahlua', 'Soda Water'],
      alcoholic: true,
      notes: 'Drink with a straw',
    },
    {
      name: 'Mexican Flag',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Grenadine', 'Peppermint Schnapps', 'Green Liqueur'],
      alcoholic: true,
      notes: 'Layered patriotic shot',
    },
    {
      name: 'Baby Guinness',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Coffee Liqueur', 'Baileys'],
      alcoholic: true,
      notes: 'Looks like a tiny stout',
    },
    {
      name: 'Fireball Shot',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Cinnamon Whiskey'],
      alcoholic: true,
      notes: 'Spicy cinnamon flavor',
    },
    {
      name: 'Sambuca Blaze',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Sambuca'],
      alcoholic: true,
      notes: 'Flammable and flashy',
    },
    {
      name: 'Nutty Irishman',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Frangelico', 'Baileys'],
      alcoholic: true,
      notes: 'Creamy and nutty',
    },
  ],

  'Beer Mixes': [
    {
      name: 'Shandy',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Beer', 'Lemonade'],
      alcoholic: true,
      notes: 'Light and refreshing',
    },
    {
      name: 'Snakebite',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Beer', 'Cider'],
      alcoholic: true,
      notes: 'Stronger, UK classic',
    },
    {
      name: 'Black and Tan',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Pale Ale', 'Stout'],
      alcoholic: true,
      notes: 'Layered beer drink',
    },
    {
      name: 'Radler',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Beer', 'Citrus Soda'],
      alcoholic: true,
      notes: 'Similar to Shandy',
    },
    {
      name: 'Diesel',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Beer', 'Cola'],
      alcoholic: true,
      notes: 'Popular in Germany',
    },
    {
      name: 'Michelada',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Beer', 'Lime', 'Tomato Juice', 'Spices'],
      alcoholic: true,
      notes: 'Mexican-style beer mix',
    },
    {
      name: 'Corona Sunrise',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Corona Beer', 'Tequila', 'Orange Juice', 'Grenadine'],
      alcoholic: true,
      notes: 'Cocktail-beer hybrid',
    },
    {
      name: 'Irish Car Bomb',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Guinness', 'Baileys', 'Irish Whiskey'],
      alcoholic: true,
      notes: 'Drop shot into stout',
    },
    {
      name: 'Lagerita',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Beer', 'Tequila', 'Lime Juice'],
      alcoholic: true,
      notes: 'Margarita-beer fusion',
    },
    {
      name: 'Flaming Dr. Pepper',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Beer', 'Amaretto', 'Overproof Rum'],
      alcoholic: true,
      notes: 'Lit shot in beer glass',
    },
  ],

  Signature: [
    {
      name: 'BarBot Special',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Vodka', 'Blue Curacao', 'Lime', 'Sprite'],
      alcoholic: true,
      notes: 'House signature drink',
    },
    {
      name: 'Electric Sunset',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Vodka', 'Cranberry', 'Peach Schnapps', 'Orange Juice'],
      alcoholic: true,
      notes: 'Fruity and punchy',
    },
    {
      name: 'Neon Lights',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Blue Curacao', 'Lemonade', 'Club Soda'],
      alcoholic: false,
      notes: 'Glow-in-the-dark feel',
    },
    {
      name: 'RoboRita',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Tequila', 'Lime', 'Pineapple Juice', 'Bitters'],
      alcoholic: true,
      notes: 'AI twist on Margarita',
    },
    {
      name: 'Code Red',
      ingredients: ['Cranberry', 'Lime', 'Chili Syrup', 'Vodka'],
      alcoholic: true,
      notes: 'Sweet and spicy kick',
    },
    {
      name: 'Citrus Blast',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Orange Juice', 'Lemon', 'Club Soda'],
      alcoholic: false,
      notes: 'Tangy non-alcoholic',
    },
    {
      name: 'Metal Mule',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Whiskey', 'Ginger Ale', 'Bitters'],
      alcoholic: true,
      notes: 'Bold and balanced',
    },
    {
      name: 'Techno Tonic',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Gin', 'Tonic Water', 'Blueberry Syrup'],
      alcoholic: true,
      notes: 'Sweet twist on classic gin',
    },
    {
      name: 'Lemon Byte',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Lemon Juice', 'Honey', 'Mint', 'Sparkling Water'],
      alcoholic: false,
      notes: 'Refreshing mocktail',
    },
    {
      name: 'Midnight Circuit',
      image: '/assets/images/margarita.jpg',
      ingredients: ['Blackcurrant Juice', 'Cola', 'Vodka'],
      alcoholic: true,
      notes: 'Dark and mysterious flavor',
    },
  ],
};


function HomePage() {
  const categories = Object.keys(drinkCategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="main-layout">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <DrinkGallery drinks={drinkCategories[selectedCategory]} />
    </div>
  );
}

export default HomePage;