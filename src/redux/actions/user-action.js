import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from '../types/userTypes';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addToList = createAction(ADD_CONTACT, ({ name, phone }) => ({
  payload: {
    name,
    phone,
    id: uuidv4(),
  },
}));
// export const addToList = ({ name, phone }) => ({
//   type: ADD,
//   payload: {
//     name,
//     phone,
//     id: uuidv4(),
//   },
// });

export const deleteUser = createAction(DELETE_CONTACT);
// export const deleteUser = id => ({
//   type: DELETE,
//   payload: id,
// });

export const changeFilter = createAction(CHANGE_FILTER);
// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
