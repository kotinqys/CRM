import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { createCard } from '../../../redux/actions/cards';
import CreateCard from './CreateCard';

function CreadeCardContainer({ history }) {
  const [error, setError] = useState(false);
  const onCreateCard = (event) => {
    event.preventDefault();
    const { fullName, email, number, age, study, course } = event.target.elements;
    if ((fullName.value, email.value, number.value)) {
      createCard(fullName, email, number, age, study, course, history);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <CreateCard onCreateCard={onCreateCard} error={error} />
    </>
  );
}

export default withRouter(CreadeCardContainer);
