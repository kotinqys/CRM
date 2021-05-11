import { combineReducers, createStore,applyMiddleware } from "redux";
import profile from './reducers/profile';
import cards from './reducers/cards';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    profile,
    cards
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default store