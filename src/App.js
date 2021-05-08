import { BrowserRouter, Route } from 'react-router-dom'
import AuthProvider from './AuthProvider';
import Auth from './componets/Auth/Auth';
import SignUp from './componets/Auth/SignUp';
import LoginPage from './componets/Login-page/LoginPage';
import './scss/app.scss'

function App() {
  return (
    <AuthProvider>
      <div className="wrapper">
      <BrowserRouter>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/login' component={Auth} />
        <Route path='/signup' component={ SignUp }/>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
