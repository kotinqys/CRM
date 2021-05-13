import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { getCards } from '../../redux/actions/cards';
import Contacts from './components/Contacts';

function CardsRouter(props) {
  const dispatch = useDispatch();

  const { cards } = useSelector((state) => ({
    cards: state.cards.cards,
  }));

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <>
      <Route
        path='/crm/contacts'
        component={() => (
          <Contacts title='Контакты' cards={cards.filter((card) => card.category === 'contacts')} />
        )}
      />
      <Route
        path='/crm/conversation'
        component={() => (
          <Contacts
            title='Переговоры'
            cards={cards.filter((card) => card.category === 'conversation')}
          />
        )}
      />
      <Route
        path='/crm/invoice'
        component={() => (
          <Contacts
            title='Выставленный счет'
            cards={cards.filter((card) => card.category === 'invoice')}
          />
        )}
      />
      <Route
        path='/crm/paidinvoice'
        component={() => (
          <Contacts
            title='Оплаченный счет'
            cards={cards.filter((card) => card.category === 'paidinvoice')}
          />
        )}
      />
      <Route
        path='/crm/succes'
        component={() => (
          <Contacts
            title='Успешные продажи'
            cards={cards.filter((card) => card.category === 'succes')}
          />
        )}
      />
      <Route
        path='/crm/unsucces'
        component={() => (
          <Contacts
            title='Неудачные продажи'
            cards={cards.filter((card) => card.category === 'unsucces')}
          />
        )}
      />
    </>
  );
}

export default CardsRouter;
