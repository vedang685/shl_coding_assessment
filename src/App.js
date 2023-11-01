import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './Card.js';

function App() {
  const [backend, setBackend] = useState({ data: [] });

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

  return (
    <div className='h-screen'>
      {backend.data.map((elem, index) => (
        <div key={index}>
          <p className='text-red-400'>Hello</p>
          <p>Title: {elem.Project.Title}</p>
          <p>Technologies: {elem.Project.Technologies}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
