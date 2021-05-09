import React from 'react';
import firebase from 'firebase/app';

import app from '../../firebase';

import Auth from './Auth';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../redux/actions/profile';
import { withRouter } from 'react-router';

function AuthContainer({ history }) {
  const dispatch = useDispatch();

  //Вход через логин, пароль
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      //Отправка запрос на firebase для подтверждения аккаунта
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      const user = app.auth().currentUser;

      dispatch(setProfile(user));
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  //Вход через Google
  const handleSubmitwithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await app.auth().signInWithPopup(provider);
    dispatch(setProfile(user));
    history.push('/');
  };

  return <Auth onSubmit={handleSubmit} onSubmitWithGoogle={handleSubmitwithGoogle} />;
}

export default withRouter(AuthContainer);
