import { DECREMENT, INCREMENT, REMOVE, REVIEWADD } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const reviewAdd = (value) => ({ type: REVIEWADD, value });
