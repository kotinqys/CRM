import React from 'react';
import app from '../../../firebase';
import Cards from './Cards';

function CardsContainer({ cards }) {
  const handleChange = (val) => {};

  return (
    <div className='cards'>
      {cards.map((card) => (
        <Cards card={card} handleChange={handleChange} />
      ))}
    </div>
  );
}

export default CardsContainer;
