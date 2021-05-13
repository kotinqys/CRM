import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../../redux/actions/cards';
import { menu } from '../Main';
import Cards from './Cards';

function CardsContainer({ cards }) {
  const dispatch = useDispatch();
  const onUpdateCard = (card, val) => {
    menu.forEach((item) => {
      item.val === val && dispatch(updateCard(card, item.url));
    });
  };

  return (
    <div className='cards'>
      {cards.map((card) => (
        <Cards key={card.id} card={card} onUpdateCard={onUpdateCard} />
      ))}
    </div>
  );
}

export default CardsContainer;
