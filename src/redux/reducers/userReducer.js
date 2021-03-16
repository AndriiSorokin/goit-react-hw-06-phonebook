// import { ADD, FILTER } from '../types/userTypes';
import { combineReducers } from 'redux';

const items = (state = [], action) => {
  return state;
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
