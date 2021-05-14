import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { getCards } from '../../redux/actions/cards';
import AboutCard from './components/AboutCard';
import Contacts from './components/Contacts';
import CreadeCardContainer from './components/CreadeCardContainer';

function CardsRouter(props) {
  const dispatch = useDispatch();

  const { cards, loading } = useSelector((state) => ({
    cards: state.cards.cards,
    loading: state.cards.loading,
  }));

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <>
      <Route
        exact
        path='/crm'
        component={() => (
          <Contacts
            loading={loading}
            title='Контакты'
            cards={cards.filter((card) => card.category === 'contacts')}
          />
        )}
      />
      <Route
        path='/crm/contacts'
        component={() => (
          <Contacts
            loading={loading}
            title='Контакты'
            cards={cards.filter((card) => card.category === 'contacts')}
          />
        )}
      />
      <Route
        path='/crm/conversation'
        component={() => (
          <Contacts
            loading={loading}
            title='Переговоры'
            cards={cards.filter((card) => card.category === 'conversation')}
          />
        )}
      />
      <Route
        path='/crm/invoice'
        component={() => (
          <Contacts
            loading={loading}
            title='Выставленный счет'
            cards={cards.filter((card) => card.category === 'invoice')}
          />
        )}
      />
      <Route
        path='/crm/paidinvoice'
        component={() => (
          <Contacts
            loading={loading}
            title='Оплаченный счет'
            cards={cards.filter((card) => card.category === 'paidinvoice')}
          />
        )}
      />
      <Route
        path='/crm/succes'
        component={() => (
          <Contacts
            loading={loading}
            title='Успешные продажи'
            cards={cards.filter((card) => card.category === 'succes')}
          />
        )}
      />
      <Route
        path='/crm/unsucces'
        component={() => (
          <Contacts
            loading={loading}
            title='Неудачные продажи'
            cards={cards.filter((card) => card.category === 'unsucces')}
          />
        )}
      />
      <Route path='/crm/:cardId' component={AboutCard}></Route>
      <Route path='/crm/create-card' component={CreadeCardContainer}></Route>
    </>
  );
}

export default CardsRouter;
