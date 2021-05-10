import { BrowserRouter, Route } from 'react-router-dom'
import AuthProvider from './AuthProvider';
import AuthContainer from './componets/Auth/AuthContainer';
import SignUpContainer from './componets/Auth/SignUpContainer';
import LoginPage from './componets/Login-page/LoginPage';
import Main from './componets/Main-page/Main';
import './scss/app.scss'

function App() {

  return (
    <AuthProvider>
      <div className="wrapper">
        <BrowserRouter>
        <Route exact path='/' component={Main}/>
        <Route path='/show' component={LoginPage}/>
        <Route path='/login' component={AuthContainer} />
        <Route path='/signup' component={ SignUpContainer }/>
      </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
