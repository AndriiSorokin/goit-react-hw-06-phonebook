import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  contacts: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
