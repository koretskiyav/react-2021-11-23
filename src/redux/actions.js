import { push, replace } from 'connected-react-router';
import {
  ADD_REVIEW,
  CHANGE_RESTAURANT,
  CREATE_ORDER,
  DECREMENT,
  FAILURE,
  INCREMENT,
  LOAD_PRODUCTS,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  REMOVE,
  REQUEST,
  SUCCESS,
} from './constants';

import {
  createOrderCartSelector,
  isCheckoutPageSelector,
  isSendingToServerSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from './selectors';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const changeRestaurant = (activeId) => ({
  type: CHANGE_RESTAURANT,
  activeId,
});

export const addReview = (review, restId) => ({
  type: ADD_REVIEW,
  review,
  restId,
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});
export const loadProducts = (restId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restId}`,
  restId,
});

const _loadUsers = () => ({ type: LOAD_USERS, CallAPI: '/api/users' });

export const loadReviews = (restId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restId });
  const loaded = reviewsLoadedSelector(state, { restId });

  if (loading || loaded) return;
  dispatch({ type: LOAD_REVIEWS + REQUEST, restId });

  try {
    const data = await fetch(`/api/reviews?id=${restId}`).then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_REVIEWS + SUCCESS, restId, data });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, restId, error });
    dispatch(replace('/error'));
  }
};

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch(_loadUsers());
};

export const checkout = () => async (dispatch, getState) => {
  const state = getState();
  if (!isCheckoutPageSelector(state)) {
    dispatch(push('/checkout'));
    return;
  }

  const sendingToServer = isSendingToServerSelector(state);
  if (sendingToServer) {
    return;
  }
  dispatch({ type: CREATE_ORDER + REQUEST });

  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createOrderCartSelector(state)),
    });

    if (response.ok) {
      dispatch({ type: CREATE_ORDER + SUCCESS });
      dispatch(replace('/success'));
    } else {
      dispatch({ type: CREATE_ORDER + FAILURE, error: await response.json() });
      dispatch(push('/error'));
    }
  } catch (error) {
    dispatch({ type: CREATE_ORDER + FAILURE });
    dispatch(push('/error'));
  }
};
