import React from 'react';
import { Container, Typography } from '@material-ui/core';
import CardsContainer from './CardsContainer';

function Contacts({ title, cards }) {
  return (
    <div className='content'>
      <Container maxWidth='xl'>
        <Typography variant='h5' className='content__title'>
          {title}
        </Typography>
        <hr className='hr' />
        <CardsContainer cards={cards} />
      </Container>
    </div>
  );
}

export default Contacts;
