import { BrowserRouter, Route } from 'react-router-dom'
import Auth from './componets/Auth/Auth';
import LoginPage from './componets/Login-page/LoginPage';
import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/login' component={ Auth }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
