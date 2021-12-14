import { DECREMENT, INCREMENT, REMOVE, ADD_REVIEW, ADD_USER, UPDATE_RESTAURANTS  } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addReview = (review) => ({ type: ADD_REVIEW, review });
export const addUser = (user) => ({ type: ADD_USER, user });
export const updateRestaurants = (id) => ({ type: UPDATE_RESTAURANTS, id });
