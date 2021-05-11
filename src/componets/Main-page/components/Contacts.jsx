import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import CardsContainer from './CardsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../../redux/actions/cards';

function Contacts(props) {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => ({
    cards: state.cards.cards,
  }));

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <div className='content'>
      <Container maxWidth='xl'>
        <Typography variant='h5' className='content__title'>
          Контакты
        </Typography>
        <hr className='hr' />
        <CardsContainer cards={cards} />
      </Container>
    </div>
  );
}

export default Contacts;
