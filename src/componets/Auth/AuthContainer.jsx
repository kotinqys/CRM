import React from 'react';

import Auth from './Auth';
import { useDispatch } from 'react-redux';
import { login, loginWithGoogle } from '../../redux/actions/profile';
import { withRouter } from 'react-router';

function AuthContainer({ history }) {
  const dispatch = useDispatch();

  //Вход через логин, пароль
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    dispatch(login(email, password, history));
  };

  //Вход через Google
  const handleSubmitwithGoogle = () => {
    dispatch(loginWithGoogle(history));
  };

  return <Auth onSubmit={handleSubmit} onSubmitWithGoogle={handleSubmitwithGoogle} />;
}

export default withRouter(AuthContainer);
