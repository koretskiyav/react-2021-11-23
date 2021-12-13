import { DECREMENT, INCREMENT, REMOVE, REVIEW_ADD, SET_ACTIVE_RESTAURANT_ID } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const setActiveRestaurantId = (id) => ({ type: SET_ACTIVE_RESTAURANT_ID, id });
export const reviewAdd = (data) => ({ type: REVIEW_ADD, data});
