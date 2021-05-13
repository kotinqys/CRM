import app from "../../firebase";
import firebase from 'firebase'

export const setProfile= (profile) => ({
    type: 'SET_PROFILE',
    profile
});

export const login = (email,password,history) => {
    return async dispatch => {
        try {
        //Отправка запрос на firebase для подтверждения аккаунта
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        const user = app.auth().currentUser;

        dispatch(setProfile(user));
        history.push('/');
        } catch (error) {
        alert(error);
        }
    }
}

export const loginWithGoogle = (history) => {
    return async dispatch => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await app.auth().signInWithPopup(provider);
        dispatch(setProfile(user));
        history.push('/');
    }
}

export const signUp = async (event,history) => {
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
}