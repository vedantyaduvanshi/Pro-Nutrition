import React from 'react';
import ReactDOM from 'react-dom';

import FoodData from './FoodData';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App foods={FoodData} />
  </React.StrictMode>,
  document.getElementById('root')
);