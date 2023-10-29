import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data } = useFoodData();
  //npm instal tanstack-query/react-query
  return (
    <div className="App">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(fooData =>
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        )}

      </div>
    </div>
  );
}

export default App;
