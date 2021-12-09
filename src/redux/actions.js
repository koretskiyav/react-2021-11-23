import { DECREMENT, INCREMENT, REMOVE_ITEM } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const removeItem = (id) => ({ type: REMOVE_ITEM, id });
