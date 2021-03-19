import { ADD, FILTER, DELETE } from '../types/userTypes';
import { combineReducers } from 'redux';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
