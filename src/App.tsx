import React from 'react';
import './App.css';
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const[ isModalOpen, setIsModalOpen] = useState(false);
  //npm instal tanstack-query/react-query

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
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
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  );
}

export default App;
