import React, { useState } from 'react';

import Auth from './Auth';
import { useDispatch } from 'react-redux';
import { login, loginWithGoogle } from '../../redux/actions/profile';
import { withRouter } from 'react-router';

function AuthContainer({ history }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  //Вход через логин, пароль
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      dispatch(login(email, password));
      history.push('/');
    } catch (error) {
      setError(true);
    }
  };

  //Вход через Google
  const handleSubmitwithGoogle = () => {
    dispatch(loginWithGoogle(history));
  };

  return <Auth onSubmit={handleSubmit} onSubmitWithGoogle={handleSubmitwithGoogle} error={error} />;
}

export default withRouter(AuthContainer);
