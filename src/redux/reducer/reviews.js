import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, data, restId, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [restId]: true },
        error: { ...state.error, [restId]: null },
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, [restId]: false },
        loaded: { ...state.loaded, [restId]: true },
        entities: { ...state.entities, ...arrToMap(data) },
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [restId]: false },
        loaded: { ...state.loaded, [restId]: false },
        error: { ...state.error, [restId]: error },
      };
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        entities: {
          ...state.entities,
          [reviewId]: { id: reviewId, userId, text, rating },
        },
      };
    default:
      return state;
  }
};
