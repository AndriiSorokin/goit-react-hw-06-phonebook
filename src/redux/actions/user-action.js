import { ADD, DELETE, CHANGE_FILTER, FILTER } from '../types/userTypes';
import { v4 as uuidv4 } from 'uuid';

export const addToList = ({ name, phone }) => ({
  type: ADD,
  payload: {
    name,
    phone,
    id: uuidv4(),
  },
});

export const deleteUser = id => ({
  type: DELETE,
  payload: id,
});

