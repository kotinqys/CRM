import { current } from 'immer';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import app from './firebase';
import { setProfile } from './redux/actions/profile';

export const AuthContext = React.createContext();
//провайдер преднозначен для полученя данные о профиле
function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    //Полсе отрисовки  приложения проверка на наличий профайла в cookie
    //Если пользователь найден то его добавить в state
    app.auth().onAuthStateChanged(setCurrentUser);
    dispatch(setProfile(currentUser));
  }, []);
  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
