import React from 'react';
import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';

function App() {
  const sampleItem = {
    id: 1,
    name: 'Chicken Biryani',
    image: 'https://example.com/chicken-biryani.jpg',
    description: 'Aromatic basmati rice cooked with tender chicken and spices',
    price: '10.99',
  };

  const addToCart = (id: number) => {
    console.log(`Item with ID ${id} added to the cart.`);
  };

  return (
    <div className="App">
      <Header />
      <MenuItem item={sampleItem} addToCart={addToCart} />
    </div>
  );
}

export default App;
