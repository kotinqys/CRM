import React from 'react';
import { Container, Typography } from '@material-ui/core';
import CardsContainer from './CardsContainer';
import Loader from './Loader';

function Contacts({ title, cards, loading }) {
  return (
    <div className='content'>
      <Container maxWidth='xl'>
        <Typography variant='h5' className='content__title'>
          {title}
        </Typography>
        <hr className='hr' />
        {cards.length < 1 ? (
          <h2 className='content__empty'>Нету контаков в этом отделе</h2>
        ) : loading ? (
          <Loader />
        ) : (
          <CardsContainer cards={cards} />
        )}
      </Container>
    </div>
  );
}

export default Contacts;
