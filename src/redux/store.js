import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
