import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './Card.js';
import CardDetails from './CardDetails';
import Header from './Header';

function App() {
  const [backend, setBackend] = useState({ data: [] });
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch('/api/fetch/data')
      .then((response) => response.json())
      .then((data) => {
        data.data.forEach((elem) => {
          elem.Project.Title = parseInt(elem.Project.Title.slice(8, 11));
        });
        data.data.sort((a, b) => a.Project.Title - b.Project.Title);

        setBackend(data);
      });
  }, []);

  const openCardDetails = (cardData) => {
    setSelectedCard(cardData);
  };

  const closeCardDetails = () => {
    setSelectedCard(null);
  };

  return (
    <div className="app-container background">
      <Navbar />
      <Header/>
        <div className='flex flex-wrap mt-4'>
          {backend.data.map((elem, index) => (
            <div key={index} className='w-1/4 p-4' onClick={() => openCardDetails(elem)}>
              <Card data ={elem}/>
            </div>
          ))}
        </div>
        {selectedCard && (
        <CardDetails data={selectedCard} onClose={closeCardDetails} />
      )}
    </div>
  );
}

export default App;
