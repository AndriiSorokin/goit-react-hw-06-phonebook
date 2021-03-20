import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    contacts: userReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
