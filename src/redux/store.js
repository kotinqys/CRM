import { combineReducers, createStore } from "redux";
import profile from './reducers/profile'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    profile,
    form: formReducer
})

const store = createStore(reducers)

export default store