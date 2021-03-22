import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from '../types/userTypes';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [ADD_CONTACT]: (state, { payload }) => [...state, payload],
  [DELETE_CONTACT]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [CHANGE_FILTER]: (state, { payload }) => payload,
});
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
