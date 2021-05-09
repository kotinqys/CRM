import React from 'react';
import { withRouter } from 'react-router';
import app from '../../firebase';
import SignUp from './SignUp';

function SignUpContainer({ history }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, correctPassword, name } = event.target.elements;
    if (password.value === correctPassword.value) {
      try {
        //Отправка запроса в firebase для создание нового пользователя
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        const user = app.auth().currentUser;
        await user.updateProfile({
          displayName: name.value,
        });
        alert('Вы успешно зарегестрировались!!!');
        history.push('/login');
      } catch (error) {
        alert(error);
      }
    } else {
      alert('Пароль не подтвержден!');
    }
  };
  return <SignUp onSubmit={handleSubmit} />;
}

export default withRouter(SignUpContainer);
