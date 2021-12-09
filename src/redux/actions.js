import { DECREMENT, INCREMENT, DELETE } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const deleteProduct = (id) => ({ type: DELETE, id });
