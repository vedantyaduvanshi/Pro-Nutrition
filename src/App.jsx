import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import './App.css';

const App = ({ foods }) => {
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleSearch = (query) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const handleAdd = (food) => {
    const existingFoodIndex = selectedFoods.findIndex(
      (selectedFood) => selectedFood.name === food.name
    );

    if (existingFoodIndex !== -1) {
      const updatedSelectedFoods = [...selectedFoods];
      updatedSelectedFoods[existingFoodIndex].quantity += food.quantity;
      setSelectedFoods(updatedSelectedFoods);
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const handleReset = (index) => {
    const updatedSelectedFoods = [...selectedFoods];
    updatedSelectedFoods.splice(index, 1);
    setSelectedFoods(updatedSelectedFoods);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredFoods.map((food, index) => (
        <FoodBox key={index} food={food} onAdd={handleAdd} />
      ))}
      <div>
        <h2>Selected Foods:</h2>
        {selectedFoods.map((selectedFood, index) => (
          <div key={index}>
            <p>
              {selectedFood.quantity} {selectedFood.name} ={' '}
              {selectedFood.calories * selectedFood.quantity} cal{' '}
              <button onClick={() => handleReset(index)}>Reset</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
