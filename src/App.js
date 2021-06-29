import React from 'react';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import './App.css';

function App() {
  return (
    <div>
      <AddFood className="bordas"/>
      <FoodBox />
    </div>
  );
}
export default App;
