import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import app from '../../../firebase';
import { updateCard } from '../../../redux/actions/cards';
import { menu } from '../Main';
import Cards from './Cards';

function CardsContainer({ cards, history }) {
  const dispatch = useDispatch();
  const onUpdateCard = (card, val) => {
    menu.forEach((item) => {
      item.val === val && dispatch(updateCard(card, item.url));
    });
  };

  const deleteCard = (card) => {
    app
      .firestore()
      .collection('cards')
      .doc(card)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
        history.push('/');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };
  console.log(history);
  return (
    <div className='cards'>
      {cards.map((card) => (
        <Cards key={card.id} card={card} onUpdateCard={onUpdateCard} deleteCard={deleteCard} />
      ))}
    </div>
  );
}

export default withRouter(CardsContainer);
