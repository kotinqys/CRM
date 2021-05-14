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
        {loading ? <Loader /> : <CardsContainer cards={cards} />}
      </Container>
    </div>
  );
}

export default Contacts;
