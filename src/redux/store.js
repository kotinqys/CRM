import { combineReducers, createStore,applyMiddleware } from "redux";
import profile from './reducers/profile'
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    profile,
    form: formReducer
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default store